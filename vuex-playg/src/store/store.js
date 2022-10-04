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
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            })
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= -1
            })
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function(){
        context.commit('reducePrice', payload)}, 3000)
    }
}
});