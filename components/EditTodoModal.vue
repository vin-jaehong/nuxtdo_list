<template>
    <div>
        <ModalLayout :isShow="showEditTodoModal">
            <b-card-group deck style="height: 100%;" class="text-center">
                <b-card header="Edit">
                    <b-input-group size="sm" prepend="Subject">
                        <b-form-input placeholder="Please enter Subject" v-model="currentEditTodoData.subject"></b-form-input>
                    </b-input-group>
                    <b-form-textarea placeholder="Please enter content" class="mt-5" style="height:70%;" v-model="currentEditTodoData.content"></b-form-textarea>
                    <b-button variant="info" @click="submitBtnClickHandler">Submit</b-button>
                    <b-button @click="cancelBtnClickHandler">Cancel</b-button>
                </b-card>
            </b-card-group>
        </ModalLayout>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useDefaultStore, TodoData } from '~/store/store';
    import { useModalStore } from '~/store/modal_store';
    const defaultStore = useDefaultStore();
    const modalStore = useModalStore();
    
    //store
    const { saveTodoData } = defaultStore;
    const { showEditTodoModal, currentEditTodoData } = storeToRefs(modalStore);
    const { toggleEditTodoModal } = modalStore;

    //method
    const cancelBtnClickHandler = ()=> {
        //모달 닫기
        toggleEditTodoModal(false);
    };
    const submitBtnClickHandler = ()=> {
        //저장 후 모달 닫기
        saveTodoData(currentEditTodoData.value);
        toggleEditTodoModal(false);
    }
</script>

<style lang="scss">
</style>