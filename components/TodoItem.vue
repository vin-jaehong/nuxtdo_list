<template>
    <div>
        <b-list-group-item @click="todoListItemClickHandler" class="flex-column align-items-start cursor todo-list-item" style="position: relative;">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ todoData.subject }}</h5>
                
                <div>
                    <small><b-button variant="outline-info" @click="editBtnClickHandler">edit</b-button></small>
                    <small><b-button variant="outline-danger" @click="deleteBtnClickHandler">delete</b-button></small>
                </div>
            </div>

            <p class="mb-1">
                {{ todoData.content }}
            </p>

            <small>{{ todoData.date }}</small>

            <div class="active-wrap" v-if="todoData.isChecked">
                <p>D i d</p>
            </div>
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
    const { deleteTodoData, saveTodoData } = defaultStore;
    const { toggleEditTodoModal, setCurrentEditTodoData } = modalStore;

    //props
    interface Props {
        todoData: TodoData,
    }
    const props = defineProps<Props>();
    
    //삭제 버튼 클릭 시 이벤트
    const deleteBtnClickHandler = ()=> {
        const response = deleteTodoData(props.todoData.code);
        if (response.success===false)   alert('delete failed');
    };
    //수정 버튼 클릭 시 이벤트
    const editBtnClickHandler = ()=> {
        //상태 갱신
        setCurrentEditTodoData(props.todoData.code);
        //모달 열기
        toggleEditTodoModal(true);
    };
    //항목 클릭 시 이벤트
    const todoListItemClickHandler = ()=> {
        //체크 여부 변경 후 저장 (props 원본 값은 건들지 않음)
        const changeTodoData = {...props.todoData} as TodoData;
        changeTodoData.isChecked = !changeTodoData.isChecked;
        const response = saveTodoData(changeTodoData);
        if (response.success===false) alert('적용 실패');
    }
</script>

<style lang="scss">
    .todo-list-item:hover {
        background-color: #17a3b855;
        transition: all 0.2s;
    }
    .active-wrap {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        text-align: center;
        background-color: #17a3b892;
        color: #ffffffc0;
        font-size: 20px;
        display: table;
        p {
            display: table-cell;
            vertical-align: middle;
        }
    }
</style>