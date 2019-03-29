<<<<<<< HEAD
export default{

  deletCartItemAsync (store, id) {
    setTimeout(() => {
      // 不能在这里直接修改state，需要使用store.commit('方法名':参数)
      store.commit('deletCartItem', id)
    }, 300)
  }

=======
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
>>>>>>> 557efd14c8a88648b1d7427f1094502775394876
}
