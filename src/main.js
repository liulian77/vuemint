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

Vue.config.productionTip = false

Vue.mixin({
  filters: {
    num (n) {
      return n > 99 ? '99+' : n
    }
  }
})
router.beforeEach((to, from, next) => {
  if (to.meta.isAuthRequired && !store.getters.isLogin) {
    next({
      name: 'login',
      params: {
        // 这里的参数属于隐式传参，这样才能在登录成功之后返回到用户本身需要访问的页面，因为直接到Login里获取不到用户本身访问的路由，这是由于到了Login页面本来就已经重定向了
        comeFrom: to.fullPath
      }
    })
  } else {
    // 如果没有权限 或者说有权限已经登录，就直接访问
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
