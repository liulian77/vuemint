<template>

    <div class="logo">
      <div class="title">
        <div class="close">X</div>
         <div class="word">注册</div>
      </div>
      <form class="logo-body">
         <img class="big-logo" src="../img/logo-big.png" alt="">
         <div> <i  class="icon">&#xe618;</i> <input type="text" placeholder="手机/用户名/邮箱"/></div>
         <div><i  class="icon">&#xe60c;</i> <input type="password" placeholder="密码"/></div>
         <mt-button  class="btnLogo" size="large" type="primary">登录</mt-button>
         <div class="forget">忘记密码</div>
      </form>
      <form class="footer">
          <fieldset>
              <legend>使用第三方账号登陆</legend>
          </fieldset>
      <i class="icon1">&#xe73b;</i> &nbsp;  <i  class="icon2">&#xe600;</i> &nbsp;<i  class="icon3"> &#xe636;</i>
      </form>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
body{
margin: 0;
padding: 0;
}

.logo{
    width: 96%;
    height: 100%;
    margin-left:.3rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  .title{
      height: 4rem;
      display: flex;
      flex-direction:row;
       font-size:1.6rem;
justify-content: space-between;
   .close{
          color:gray;
          line-height: 4rem;
   }
   .word{
       color:#ff0055;
       font-weight: 600;
         line-height: 4rem;
   }
  }
  .logo-body{

     flex:1;
     .big-logo{
        margin-left:40%;
        margin-top: 3rem;
        width: 8rem;
     }
     div{
         width: 90%;
         margin-left:1.2rem;
         height: 3.2rem;
         border-bottom: 1px solid #f5f5f5;
         font-size: 1.3rem;
         line-height: 3.2rem;
         margin-top: 1.2rem;
           &>.icon{
               font-family: 'icon';
               font-size: 1.3rem;
           }
       &>input{
            width: 80%;
            height:3.1rm;
            outline: none;
            border:none;
            font-size: 1.3rem;
            line-height: 3.6rm;
       }
     }
     .btnLogo{
         margin-top: 2rem;
         margin-left: 1.2rem;
         width: 90%;
         background: #dddddd;
         color:#999999;
     }
    .forget{

        width: 30%;
        float:right;
        color:#ff0055;
        font-weight: 600;
        border:none;
       font-size: 1.2rem;

    }
  }
  .footer{
      margin-top: 2rem;
      height:10rem;
      text-align: center;
      font-size: 1.2rem;
       font-weight: 600;
       color:#888888;
            &> fieldset{
                margin-bottom: 2rem;
            }

       &>i{

               font-family: 'icon';
               font-size: 2.5rem;

           }

  }
}

@font-face {
  font-family: 'icon';  /* project id 1105026 */
  src: url('//at.alicdn.com/t/font_1105026_frt2zuu3r9.eot');
  src: url('//at.alicdn.com/t/font_1105026_frt2zuu3r9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1105026_frt2zuu3r9.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1105026_frt2zuu3r9.woff') format('woff'),
  url('//at.alicdn.com/t/font_1105026_frt2zuu3r9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1105026_frt2zuu3r9.svg#iconfont') format('svg');
}
</style>
