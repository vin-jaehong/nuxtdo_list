import { defineStore } from 'pinia';
import { TodoData, useDefaultStore } from './store';

export const useModalStore = defineStore('modal', {
    state: (): ModalStoreState=> ({
        showEditTodoModal: false,
        currentEditTodoData: {} as TodoData,
    }),
    getters: {

    },
    actions: {
        toggleEditTodoModal(isShow: boolean): void {
            this.showEditTodoModal = isShow;
        },
        setCurrentEditTodoData(code: TodoData['code']):void {
            const defaultStore = useDefaultStore();
            const { getTodoDataByCode } = defaultStore;
            getTodoDataByCode('ads');
        },
    }
});

export interface ModalStoreState {
    showEditTodoModal: boolean,
    currentEditTodoData: TodoData,
}