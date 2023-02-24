<template>
    <div>
        <b-list-group-item class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ todoData.subject }}</h5>
                <div>
                    <small><b-button>edit</b-button></small>
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
    import { defineProps } from 'vue';
    const DefaultStore = useDefaultStore();

    //store
    const { deleteTodoData } = DefaultStore;

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
</script>

<style lang="scss">
    
</style>