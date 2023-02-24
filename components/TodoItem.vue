<template>
    <div>
        <b-list-group-item class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ todoData.subject }}</h5>
                <div>
                    <small><b-button>edit</b-button></small>
                    <small><b-button>delete</b-button></small>
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
    import { TodoData } from '~/store/store';
    import { defineProps } from 'vue';

    interface Props {
        todoData: TodoData,
    }
    const props = defineProps<Props>();
    
</script>

<style lang="scss">
    
</style>