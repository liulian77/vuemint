import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cart: [{
      id: 1,
      title: 'mac',
      price: 1000,
      count: 10,
      checked: false
    }, {
      id: 1,
      title: 'huawei',
      price: 1000,
      count: 20,
      checked: true
    }, {
      id: 1,
      title: 'vivo',
      price: 1000,
      count: 10,
      checked: true
    } ]
  },
  getters: {
    cartTotalCount (state) {
      return state.cart
        .reduce((res, currcount) => {
          res += currcount.count
          return res
        }, 0)
    },
    cartCheckedCount (state) {
      return state.cart.filter(item => item.checked === true)
        .reduce((res, currcount) => {
          res += currcount.count
          return res
        }, 0)
    }
  }
})
