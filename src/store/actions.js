export default{

  deletCartItemAsync (store, id) {
    setTimeout(() => {
      // 不能在这里直接修改state，需要使用store.commit('方法名':参数)
      store.commit('deletCartItem', id)
    }, 300)
  }

}
