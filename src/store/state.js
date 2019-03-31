export default {
  // 初始值应该从本地存储里去取，如果取到就用取到的值，如果没有取到，得自己定义一个初始化的值
  cart: JSON.parse(window.localStorage.getItem('bx')) || [],
  userInfo: JSON.parse(window.localStorage.getItem('user')) || {
    displayName: '',
    token: ''
  }
}
