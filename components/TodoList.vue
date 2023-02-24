<template>
    <div>   
        <TodoItem v-for="todoData of todoList" :key="todoData.code" :todoData="todoData"></TodoItem>
        
        <EditTodoModal></EditTodoModal>
    </div>
</template>

<script setup lang="ts">
    import { useDefaultStore } from '~/store/store';
    import { storeToRefs } from 'pinia';
    const defaultStore = useDefaultStore();
    
    //store
    const { todoList } = storeToRefs(defaultStore);
</script>

<style lang="scss">
</style>