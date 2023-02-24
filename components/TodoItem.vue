<template>
    <div>
        <b-list-group-item class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ todoData.subject }}</h5>
                <div>
                    <small><b-button @click="editBtnClickHandler(todoData.code);">edit</b-button></small>
                    <small><b-button @click="deleteBtnClickHandler(todoData.code);">delete</b-button></small>
                </div>
            </div>

            <p class="mb-1">
                {{ todoData.content }}
            </p>

            <small>{{ todoData.date }}</small>
        </b-list-group-item>
    </div>
</template>

<script setup lang="ts">
    import { TodoData, useDefaultStore } from '~/store/store';
    import { useModalStore } from '~/store/modal_store';
    import { defineProps } from 'vue';
    const defaultStore = useDefaultStore();
    const modalStore = useModalStore();

    //store
    const { deleteTodoData } = defaultStore;
    const { toggleEditTodoModal, setCurrentEditTodoData } = modalStore;

    //props
    interface Props {
        todoData: TodoData,
    }
    const props = defineProps<Props>();
    
    //삭제 버튼 클릭 시 이벤트
    const deleteBtnClickHandler = (code: TodoData['code'])=> {
        const response = deleteTodoData(code);
        if (response.success===false)   alert('delete failed');
    };
    //수정 버튼 클릭 시 이벤트
    const editBtnClickHandler = (code: TodoData['code'])=> {
        //상태 갱신
        setCurrentEditTodoData(code);
        //모달 열기
        toggleEditTodoModal(true);
    };
</script>

<style lang="scss">
    
</style>