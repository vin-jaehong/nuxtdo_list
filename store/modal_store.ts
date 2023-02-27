import { defineStore } from 'pinia';
import { TodoData, useDefaultStore, MethodResult } from './store';

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
        setCurrentEditTodoData(code: TodoData['code']): MethodResult {
            const result: MethodResult = {success: true, msg: ''};
            try {
                const defaultStore = useDefaultStore();
                const { getTodoDataByCode } = defaultStore;
                //목록에서 선택한 일정 데이터 가져오기
                const todoData = getTodoDataByCode(code);
                if (todoData===false) throw '데이터 가져오기 실패';
                //현재 일정 데이터 업데이트
                this.currentEditTodoData = todoData as TodoData;
            } catch(e) {
                result.success = false;
                result.msg = e;
            }
            return result;
        },
    }
});

export interface ModalStoreState {
    showEditTodoModal: boolean,
    currentEditTodoData: TodoData,
}