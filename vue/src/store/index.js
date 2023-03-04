import {createStore} from "vue";

const store = createStore ({
    state: {
        user: {
            data: {name: 'Ivan'},
            token: null
        }


    },
    getters: {},
    actions: {},
    mutations: {},
    modules: {}
})

export default store;
