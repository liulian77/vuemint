import {postLogin} from '@/request'
export default{
  // 这是一个异步的请求，所以要在actions是
  login (store, loginInfo) {
    postLogin(loginInfo).then(resp => {
      if (
        resp.data.code === 200
      ) {
        store.commit('updateUserInfo', resp.data.data)
        console.log(resp.data.data)
      }
    })
  }
}
