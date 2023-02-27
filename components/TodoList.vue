<template>
    <div>   
        <TodoItem v-for="todoData of todoList" :key="todoData.code" :todoData="todoData"></TodoItem>
        
        <div class="text-center mt-5">
            <b-button variant="outline-info" @click="moreBtnClickHandler">MORE</b-button>
        </div>
        <EditTodoModal></EditTodoModal>
    </div>
</template>

<script setup lang="ts">
    import { useDefaultStore } from '~/store/store';
    import { storeToRefs } from 'pinia';
    const defaultStore = useDefaultStore();
    
    //store
    const { increaseTodoListPagingCount, updateTodoList } = defaultStore;
    const { todoList } = storeToRefs(defaultStore);

    //method
    const moreBtnClickHandler = ()=> {
        //페이지 증가
        increaseTodoListPagingCount();
        //목록 갱신
        updateTodoList();
    };
</script>

<style lang="scss">
</style>