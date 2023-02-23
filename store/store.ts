import { defineStore } from 'pinia';

export const useDefaultStore = defineStore('default', {
    state: ()=> ({
        currentUrlPath: '/',
    }),
    getters: {

    },
    actions: {
        changeCurrentUrlPath(newUrlPath: string) {
            this.currentUrlPath = newUrlPath;
        },
    },
});