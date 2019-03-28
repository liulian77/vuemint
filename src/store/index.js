import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    cart: []
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

    togoAllchecked (state, checked) {
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
      }, 1000)
    }
  }

})
