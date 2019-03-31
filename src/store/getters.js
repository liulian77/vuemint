export default {
  isLogin (state) {
    // 为了语义化，咱们直接在这里计算出一个isLogin的值，根据是否有token，当然，如果是全局的，也可能直接进入应用程序的时候就会发送一个请求去验证token，那么这个值应该在state
    return state.userInfo.token !== ''
  },
  cartTotalCount (state) {
    return state.cart.reduce((res, currcount) => {
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
}
