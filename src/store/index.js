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
  }
})
