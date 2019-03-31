import Vue from 'vue'
import Vuex from 'vuex'
// Vue.use(Vuex)
// export default new Vuex.Store({
//   state: {
//     n: 1
//   }
// })
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

  // state: {
  //     cart: JSON.parse(window.localStorage.getItem('bx')) || [],
  //     userInfo: JSON.parse(window.localStorage.getItem('cart')) || {
  //         displayName: '',
  //         token: ''
  //     }
  // },
  strict: true,
  plugins: [anys],
  state,
  getters,
  mutations,
  actions
  // mutations: {

  //     // 只能在这里修改state
  //     deletCartItem(state, id) {
  //         state.cart = state.cart.filter(item => item.id !== id)
  //     },
  //     togochecked(state, id) {
  //         state.cart = state.cart.map(item => {
  //             if (item.id === id) {
  //                 item.checked = !item.checked
  //             }
  //             return item
  //         })
  //     },

  //     // handleRemove (state, count) {
  //     //   console.log(state)
  //     //   state.cart = state.cart.map(item => {
  //     //     console.log(item)
  //     //     if (item.id === count) {
  //     //       item.count = item.count - 1
  //     //     }
  //     //     return item
  //     //   })
  //     // },
  //     handleRemove(state, id) {
  //         state.cart = state.cart.map(item => {
  //             if (item.id === id && item.count !== 1) {
  //                 item.count--
  //             }
  //             return item
  //         })
  //     },
  //     handleAdd(state, id) {
  //         state.cart = state.cart.map(item => {
  //             if (item.id === id && item.count !== 999) {
  //                 item.count = item.count + 1
  //             }
  //             return item
  //         })
  //     },
  //     togoAllchecked(state, checked) {
  //         console.log(state)
  //             // const CartLength = state.cart.length
  //         console.log(state.cart.length)
  //         state.cart = state.cart.map(item => {
  //             item.checked = checked
  //             return item
  //         })
  //     },
  //     addToCart(state, iteminfo) {
  //         console.log(iteminfo)
  //         const isInCart = state.cart.some(cartItem => cartItem.id === iteminfo.id)
  //         console.log(isInCart)
  //         if (isInCart) {
  //             state.cart = state.cart.map(item => {
  //                 if (item.id === iteminfo.id) {
  //                     item.count += 1
  //                 }
  //                 return item
  //             })
  //         } else {
  //             state.cart.push({
  //                 ...iteminfo,
  //                 checked: false,
  //                 count: 1
  //             })
  //         }
  //     },
  //     updateUserInfo(state, uesr) {
  //         state.userInfo = uesr
  //     }
  // },
  // actions: {
  //     deletCartItemAsync(store, id) {
  //         setTimeout(() => {
  //             // 不能在这里直接修改state，需要使用store.commit('方法名':参数)
  //             store.commit('deletCartItem', id)
  //         }, 300)
  //     },
  //     // 这是一个异步的请求，所以要在actions是
  //     login(store, loginInfo) {
  //         // 用户登录的时候，需要有一个actions来处理登录动作
  //         postLogin(loginInfo)
  //             .then(resp => {
  //                 if (resp.data.code === 200) {
  //                     // 登录成功之后需要同步用户信息
  //                     store.commit('updateUserInfo', resp.data.data)
  //                 }
  //             })
  //     }
  // }
})
