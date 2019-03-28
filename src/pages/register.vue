<template>
    <div>

          <div class="register">
            <span class="exit">&lt;</span>
             <span class="title">注册</span>
          </div>
          <form class="register-name">
            <input type="text" placeholder="请输入手机号" /> <button class="code">发送验证码</button>
             <input class="inputcode" type="验证码" placeholder="验证码"/> <div class="btnclose">x</div>
             <input class="password" type="" placeholder="请输入密码" /><div class="btnpassword">x</div><span class="icon">&#xe61b;</span>
              <input type="submit" class="register_" value="注册"/>
             <div class="read">注册即表示已接收<i>乐峰用户协议</i></div>
          </form>

     </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.register{
   height:5rem;
   background: #ffffff;
   border-bottom:.1rem solid #cccccc;
   line-height: 5rem;
   font-size:1.4rem;
   font-weight: 500;
   margin-bottom: 1.2rem;
   .exit{
     margin-left:5%;
   }
   .title{
     margin-left:35%;
   }
}
.register-name{

   height:14rem;
   background: #ffffff;
   border-bottom:.1rem solid #cccccc;
   text-align: center;
   line-height: 2.6rem;
   font-size:1.4rem;
   font-weight: 500;
   margin-bottom: 1.2rem;
  position:relative;
}
input{
  height:4rem;
  border:none;
  outline: none;
  border-bottom:1px solid #f5f5f5;
  width:90%;
  font-size: 1.1rem;

}
.password{
 border-bottom: none;
}
.code{
  height: 2.3rem;
width:9rem;
position:absolute;
right:1.8rem ;
border:none;
border:.1rem solid #cccccc;
outline: none;
background: #ffffff;
top:.5rem;
color:black;
border-radius: 5px;
font-size: 1rem;
}
 .btnclose{
  position:absolute;
  display: block;
  height:20px;
  width:20px;
  font-size:1rem;
  right:2.4rem;
  top:5rem;
  color:#ffffff;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  background: #696969;
}

.btnpassword{
  position:absolute;
  display: block;
  height:20px;
  width:20px;
  font-size:1rem;
  right:5rem;
  top:10rem;
  color:#ffffff;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  background: #696969;
}
.register_{
margin-top: 3rem;
background: #ff1133;
text-align: center;
color:#ffffff;
height:4.5rem;
}
.icon{
font-family: icon;
}
.read{
  font-size: 1rem;
  margin-top: .5rem;
  color:dimgrey;
  & i{
    color:#d89d39;
  }
}
@font-face {
  font-family: 'icon';  /* project id 1105026 */
  src: url('//at.alicdn.com/t/font_1105026_b7e8voggrjg.eot');
  src: url('//at.alicdn.com/t/font_1105026_b7e8voggrjg.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1105026_b7e8voggrjg.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1105026_b7e8voggrjg.woff') format('woff'),
  url('//at.alicdn.com/t/font_1105026_b7e8voggrjg.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1105026_b7e8voggrjg.svg#iconfont') format('svg');
}
</style>
