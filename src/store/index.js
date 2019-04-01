import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
const anys = (store) => {
  store.subscribe((mutation, state) => {
    window.localStorage.setItem('bx', JSON.stringify(state.cart))
    window.localStorage.setItem('user', JSON.stringify(state.userInfo))
  })
}
export default new Vuex.Store({
  strict: true,
  plugins: [anys],
  state,
  getters,
  mutations,
  actions
})
