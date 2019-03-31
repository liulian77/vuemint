import types from './types'
export default {
  // 只能在这里去修改state
  [types.deletCartItem] (state, id) {
    state.cart = state.cart.filter(item => item.id !== id)
  },
  [types.togochecked] (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id) {
        item.checked = !item.checked
      }
      return item
    })
  },
  [types.handleRemove] (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id && item.count !== 1) {
        item.count--
      }
      return item
    })
  },
  [types.handleAdd] (state, id) {
    state.cart = state.cart.map(item => {
      if (item.id === id && item.count !== 999) {
        item.count = item.count + 1
      }
      return item
    })
  },
  [types.togoAllchecked] (state, checked) {
    console.log(state)
    // const CartLength = state.cart.length
    console.log(state.cart.length)
    state.cart = state.cart.map(item => {
      item.checked = checked
      return item
    })
  },
  [types.addToCart] (state, iteminfo) {
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
  },
  [types.detailAddCart] (state, iteminfo) {
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
  },
  updateUserInfo (state, userInfo) {
    state.userInfo = userInfo
  }
}
