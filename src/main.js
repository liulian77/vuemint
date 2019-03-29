// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import * as ajax from './request'

import './font/iconfont.css'
import store from './store'

Vue.prototype.$ajax = ajax
Vue.use(MintUI)

// router.beforeEach((to, from, next) => {
//   const firstLevelRoute = to.path.split('/')[1]
//   switch (firstLevelRoute) {
//     case 'home':

//       break
//     case 'mall':

//       break
//     case 'cart':

//       break
//     case 'mine':

//       break
//     default:

//       break
//   }

//   console.log(to)
//   console.log(store.getters.islogin)

//   if (to.meta.isRequeires && store.getters.islogin) {
//     next('/login')
//   } else {
//     // 如果没有权限 或者说有权限已经登录，就直接访问
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
