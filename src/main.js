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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
