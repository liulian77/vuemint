import { postLogin } from '@/request'
export default {
  deletCartItemAsync (store, id) {
    setTimeout(() => {
      // 不能在这里直接修改state，需要使用store.commit('方法名':参数)
      store.commit('deletCartItem', id)
    }, 300)
  },
  login (store, loginInfo) {
    // 用户登录的时候，需要有一个actions来处理登录动作
    postLogin(loginInfo)
      .then(resp => {
        if (resp.data.code === 200) {
          // 登录成功之后需要同步用户信息
          store.commit('updateUserInfo', resp.data.data)
        }
      })
  }
}
