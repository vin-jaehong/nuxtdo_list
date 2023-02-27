<template>
    <div>
        <div style="min-height: 700px; position: relative;">
            <TodoItem v-for="todoData of todoList" :key="todoData.code" :todoData="todoData" class="mb-2"></TodoItem>
            <div class="no-search-wrap" v-if="todoList.length<1">
                <p>Search not found</p>
            </div>
        </div>
        
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
    .no-search-wrap {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        display: table;
        text-align: center;
        background-color: #00000017;
        color: #0000002a;
        p {
            display: table-cell;
            vertical-align: middle;
        }
    }
</style>