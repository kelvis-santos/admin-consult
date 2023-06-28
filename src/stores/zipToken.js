import { defineStore } from 'pinia'

export const useZipTokenStore = defineStore('zipToken', {
    state: () => ({
        token: '',
    }),
    getters: {
        getToken() {
            return this.token;
        }
    },
    actions: {
        setToken(token) {
            this.token = token;
        }
    }
})