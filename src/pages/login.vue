<template>
  <div class="logo">
    <div class="title">
      <div class="close" onclick="window.history.go(-1)">X</div>
      <router-link tag='div' to="/register" class="word">注册</router-link>
    </div>
    <div class="logo-body">
      <img class="big-logo" src="../img/logo-big.png" alt>
    <!-- <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    <mt-button  class="btnLogo"@click="doLogin" type="primary" size="large">登录</mt-button> -->
      <div class="name">
        <i class="icon">&#xe618;</i>
        <input class="username" type="text" v-model="username" placeholder="请输入账号">
      </div>
      <div class="pwd">
        <i class="icon">&#xe60c;</i>
        <input class="password" type="password" v-model="password" placeholder="请输入密码">
      </div>
      <mt-button class="btnLogo" size="large" type="primary" @click="dologin">登录</mt-button>
      <div class="forget">忘记密码</div>
    </div>
    <div class="footer">

      <fieldset>
        <legend>使用第三方账号登陆</legend>
      </fieldset>
      <i class="icon1">&#xe73b;</i> &nbsp;
      <i class="icon2">&#xe600;</i> &nbsp;
      <i class="icon3">&#xe636;</i>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters
  , mapMutations } from 'vuex'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters([
      'isLogin'
    ])
  },
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     if (vm.isLogin) {
  //       vm.$router.push('/mine')
  //     }
  //     if (this.isLogin) {
  //       next('/mine')
  //     }
  //   })
  // },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.isLogin) {
        vm.updateUserInfo({
          displayName: '',
          token: ''
        })
      }
    })
  },
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     if (vm.islogin) {
  //       // console.log('eiojfiorjtg')
  //       vm.$router.push('/main')
  //     }
  //   })
  //   // if (this.islogin) {
  //   //   next('/mine')
  //   // }
  // },
  watch: {
    isLogin () {
      if (this.isLogin === true) {
        // 如果登录成功，就跳转， 获取全局导航守卫（@/main.js -> router.beforeEach里面）传递过来的参数，决定往哪儿跳
        // 如果没有参数，就默认到 '/mine', 这种情况是由用户直接访问登录页造成的。
        const { comeFrom = '/mine' } = this.$route.params
        this.$router.push(comeFrom)
      }
    }
  },
  methods: {

    dologin () {
      const { username, password } = this
      this.login({
        username,
        password
      })
      console.log(username, password)
    },
    ...mapActions(['login']),
    ...mapMutations([
      'updateUserInfo'
    ])
  }
}
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
}

.logo {
  width: 96%;
  height: 100%;
  margin-left: 0.3rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .title {
    height: 4rem;
    display: flex;
    flex-direction: row;
    font-size: 1.6rem;
    justify-content: space-between;
    .close {
      color: gray;
      line-height: 4rem;
      margin-left: 1rem;
      font-size: 2rm;
    }
    .word {
      color: #ff0055;
      font-weight: 600;
      line-height: 4rem;
    }
  }
  .logo-body {
    flex: 1;
    .big-logo {
      margin-left: 40%;
      margin-top: 3rem;
      width: 8rem;
      height: 18%;
    }
    .name {
      height: 4rem;
      width: 95%;
      padding-left: 20%;
      margin-top: 4.5rem;
       position: relative;
      .icon {
        font-family: "icon";
        position: absolute;
        top: 1rem;
        font-size: 2.3rem;
      }
      .username {
        display: inline-block;
        margin-left: 4rem;
        height: 3.6rem;
        outline: none;
        border: none;
        font-size: 1.5rem;
        line-height: 3.6rem;
        border-bottom: 1px solid #eeeeee;

      }
    }
    .pwd {
      height: 4rem;
      width: 85%;
      padding-left: 20%;
      margin-top: 2rem;
      position: relative;
      .icon {
        font-family: "icon";
        font-size: 2.3rem;
        position: absolute;
        top: 1rem;
      }
      .password {
        margin-left: 4rem;
        height: 4rem;
        outline: none;
        border: none;
        font-size: 1.5rem;
         line-height: 4rem;
        border-bottom: 1px solid #eeeeee;
      }
    }

    .btnLogo {
      margin-top: 2rem;
      margin-left: 8%;
      width: 90%;
      background: #dddddd;
      color: #999999;
    }
    .forget {
      width: 30%;
      float: right;
      color: #ff0055;
      font-weight: 600;
      border: none;
      padding-left:2rem;
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }
  .footer {

    height: 20%;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;
    color: #888888;
    & > fieldset {
      margin-bottom: 2rem;
    }

    & > i {
      font-family: "icon";
      font-size: 5rem;
    }
  }
}

@font-face {
  font-family: "icon"; /* project id 1105026 */
  src: url("//at.alicdn.com/t/font_1105026_frt2zuu3r9.eot");
  src: url("//at.alicdn.com/t/font_1105026_frt2zuu3r9.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1105026_frt2zuu3r9.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1105026_frt2zuu3r9.woff") format("woff"),
    url("//at.alicdn.com/t/font_1105026_frt2zuu3r9.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1105026_frt2zuu3r9.svg#iconfont") format("svg");
}
</style>
