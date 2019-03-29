import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// Vue.use(Vuex)
// export default new Vuex.Store({
//   state: {
//     n: 1
//   }
// })

Vue.use(Vuex)
<<<<<<< HEAD
const anys = (store) => {
  store.subscribe((mutation, state) => {
    window.localStorage.setItem('bx', JSON.stringify(state.cart) || [])
  })
}
export default new Vuex.Store({
  state: {
    cart: JSON.parse(window.localStorage.getItem('bx'))
  },
  plugins: [anys],
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
    },
    cartCheckedPrice (state) {
      return state.cart.filter(item => item.checked === true)
        .reduce((res, currcount) => {
          res += currcount.count * currcount.price
          return res
        }, 0)
    },
    isAllChecked (state) {
      return state.cart.every(item => item.checked === true)
    }

  },
  mutations: {

    // 只能在这里修改state
    deletCartItem (state, id) {
      state.cart = state.cart.filter(item => item.id !== id)
    },
    togochecked (state, id) {
      state.cart = state.cart.map(item => {
        if (item.id === id) {
          item.checked = !item.checked
        }
        return item
      })
    },

    // handleRemove (state, count) {
    //   console.log(state)
    //   state.cart = state.cart.map(item => {
    //     console.log(item)
    //     if (item.id === count) {
    //       item.count = item.count - 1
    //     }
    //     return item
    //   })
    // },
    handleRemove (state, id) {
      state.cart = state.cart.map(item => {
        if (item.id === id && item.count !== 1) {
          item.count--
        }
        return item
      })
    },
    handleAdd (state, id) {
      state.cart = state.cart.map(item => {
        if (item.id === id && item.count !== 999) {
          item.count = item.count + 1
        }
        return item
      })
    },
    togoAllchecked (state, checked) {
      console.log(state)
      // const CartLength = state.cart.length
      console.log(state.cart.length)
      state.cart = state.cart.map(item => {
        item.checked = checked
        return item
      })
    },
    addToCart (state, iteminfo) {
      console.log(iteminfo)
      const isInCart = state.cart.some(cartItem => cartItem.id === iteminfo.id)
      console.log(isInCart)
      if (isInCart) {
        state.cart = state.cart.map(item => {
          if (item.id === iteminfo.id) {
            item.count += 1
          }
          return item
        })
      } else {
        state.cart.push({
          ...iteminfo,
          checked: false,
          count: 1
        })
      }
    }
  },
  actions: {
    deletCartItemAsync (store, id) {
      setTimeout(() => {
        // 不能在这里直接修改state，需要使用store.commit('方法名':参数)
        store.commit('deletCartItem', id)
      }, 300)
    }
  }
=======
const asyncStorgage = (store) => {
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // window.localStorage.setItem('nb-cart', JSON.stringify(state.cart))
    window.localStorage.setItem('nb-userInfo', JSON.stringify(state.uesr))
  })
}
export default new Vuex.Store({
  strict: true,
  plugins: [asyncStorgage],
  state,
  getters,
  mutations,
  actions
>>>>>>> 557efd14c8a88648b1d7427f1094502775394876
})
