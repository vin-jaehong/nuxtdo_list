<template>
    <div>
        <ModalLayout :isShow="showEditTodoModal">
            <b-card-group deck style="height: 100%;" class="text-center">
                <b-card header="Edit">
                    <b-input-group size="sm" prepend="Subject">
                        <b-form-input placeholder="Please enter Subject"></b-form-input>
                    </b-input-group>
                    <b-form-textarea placeholder="Please enter content" class="mt-5" style="height:70%;"></b-form-textarea>
                    <b-button variant="info">Submit</b-button>
                    <b-button @click="cancelBtnClickHandler">Cancel</b-button>
                </b-card>
            </b-card-group>
        </ModalLayout>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useModalStore } from '~/store/modal_store';
    const modalStore = useModalStore();
    
    //store
    const { showEditTodoModal } = storeToRefs(modalStore);
    const { toggleEditTodoModal } = modalStore;

    //method
    const cancelBtnClickHandler = ()=> {
        //모달 닫기
        toggleEditTodoModal(false);
    };
</script>

<style lang="scss">
</style>