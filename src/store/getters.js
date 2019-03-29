export default{
  islogin (state) {
    // 响应回来的
    console.log(state)
    return state.uesr.token !== ''
  }

}
