import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            { name: 'Banana', price: 20 },
            { name: 'Apple', price: 40 },
            { name: 'Lemon', price: 60 },
            { name: 'Pineapple', price: 80 },
        ]
    }
})