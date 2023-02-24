<template>
    <div class="add_wrap">
        <b-row>
            <b-col sm="2">
                <label for="textarea-auto-height">Subject :</label>
            </b-col>
            <b-col sm="10">
                <b-form-input placeholder="Please write the todo title" v-model="subject"></b-form-input>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col sm="2">
                <label for="textarea-auto-height">Content :</label>
            </b-col>
            <b-col sm="10">
            <b-form-textarea
                placeholder="Please write the todo content"
                rows="3"
                max-rows="8"
                v-model="content"
            ></b-form-textarea>
            </b-col>
        </b-row>
        <b-button variant="info" class="float-right mt-2" @click="addBtnClickHandler">추가</b-button>
    </div>
</template>

<script setup lang="ts">
    import { ref, useRouter } from '@nuxtjs/composition-api';
    import { useDefaultStore, TodoData, MethodResult } from '~/store/store';
    const defaultStore = useDefaultStore();
    const { saveTodoData } = defaultStore;
    const router = useRouter();

    //제목, 내용
    const subject = ref('');
    const content = ref('');

    //추가 버튼 클릭 이벤트
    const addBtnClickHandler:AddBtnClickHandler = ()=> {
        //할 일 추가
        const response = addTodoData();
        if (response.success===false) {
            alert('추가 실패');
        } else {
            router.push('/');
        }
    };

    //할 일 추가
    const addTodoData: AddTodoData = ()=> {
        const result: MethodResult = {success:true, msg:''};
        try {
            //저장 할 데이터
            const todoDataTemplate:TodoData = {
                code: new Date().getTime().toString(36),
                date: new Date(),
                subject: subject.value,
                content: content.value,
                isChecked: false,
            };

            //스토어에 저장 요청
            const response = saveTodoData(todoDataTemplate);
            if (response.success===false) throw response.msg;
        } catch(e) {
            result.success = false;
            result.msg = e;
        }
        return result;
    };

    type AddTodoData = ()=>MethodResult;
    type AddBtnClickHandler = ()=>void;
</script>

<style lang="scss">
    .add_wrap {
        overflow: hidden;
    }
</style>