import { defineStore } from 'pinia';

export const useDefaultStore = defineStore('default', {
    state: (): DefaultStoreState => ({
        currentUrlPath: '/',
        todoListSecretKey: 'todoListSecretKey',
        todoList: [],
    }),
    getters: {

    },
    actions: {
        changeCurrentUrlPath(newUrlPath: string) {
            this.currentUrlPath = newUrlPath;
        },
        updateTodoList() {
            this.todoList = JSON.parse(localStorage.getItem(this.todoListSecretKey) ?? '[]');
        },
        saveTodoList(newTodoData:TodoData): MethodResult {
            const result: MethodResult = {success:true, msg:''};
            try {
                //기존에 데이터가 있을 경우 교체
                let localStorageTodoList:TodoData[] = JSON.parse(localStorage.getItem(this.todoListSecretKey) ?? '[]');
                if (localStorageTodoList.find(todoData=>todoData.code===newTodoData.code)) {
                    localStorageTodoList = localStorageTodoList.map(todoData=>{
                        if (todoData.code===newTodoData.code) return newTodoData;
                        return todoData;
                    });
                //데이터가 존재하지 않을 경우 추가
                } else {
                    localStorageTodoList.unshift(newTodoData);
                }
                //로컬 스토리지 저장
                localStorage.setItem(this.todoListSecretKey, JSON.stringify(localStorageTodoList));
                //상태 업데이트
                this.updateTodoList();
            } catch(e) {
                result.success = false;
                result.msg = e;
            }
            return result;
        },
    },
});

export interface MethodResult {
    success: boolean,
    msg: unknown|string,
}

export interface TodoData {
    code: string,
    date: Date,
    subject: string,
    content: string,
    isChecked: boolean,
}
interface DefaultStoreState {
    currentUrlPath: string,
    todoListSecretKey: string,
    todoList: TodoData[],
}