<template>
    <div class="mine">
        <div class="header">
            <i class="iconfont icon-icon26"></i>
            <div class="login">
                <router-link tag="span" to="/home">登录</router-link> /
                <router-link tag="span" to="/home">注册</router-link>
            </div>
        </div>
        <div class="mine-body">
            <router-link class="mine-content"  tag="div" to="/">
                <div class="wrapper">
                    <span class="wrapper-left-order">我的订单</span>
                    <span class="all-order">全部订单<i class="iconfont icon-jiantou"></i></span>
                </div>
            </router-link>
            <div class="body-pay">
                <ul>
                    <li><i class="iconfont icon-zhifuwancheng pay"></i>待支付</li>
                    <li><i class="iconfont icon-tuihuodan pay"></i>待收货</li>
                    <li><i class="iconfont icon-daipingjia pay"></i>待评价</li>
                    <li><i class="iconfont icon-tuihuodan pay"></i>退货单</li>
                </ul>
            </div>
             <router-link class="mine-content"  tag="div" to="/">
                <div class="wrapper">
                  <i class="iconfont icon-18 mifeng"></i>
                    <span class="wrapper-left">我的优惠券</span>
                    <span><i class="iconfont icon-jiantou"></i></span>
                </div>
            </router-link>
             <router-link class="mine-content"  tag="div" to="/">
                <div class="wrapper">
                  <i class="iconfont icon-huaduo mifeng"></i>
                    <span class="wrapper-left">我的花粉</span>
                    <span><i class="iconfont icon-jiantou"></i></span>
                </div>
            </router-link>
             <router-link class="mine-content space"  tag="div" to="/">
                <div class="wrapper">
                  <i class="iconfont icon-zhifuwancheng mifeng"></i>
                    <span class="wrapper-left">我的银行卡</span>
                    <span><i class="iconfont icon-jiantou"></i></span>
                </div>
            </router-link>
             <router-link class="mine-content"  tag="div" to="/">
                <div class="wrapper">
                  <i class="iconfont icon-xin mifeng" ></i>
                    <span class="wrapper-left">我的收藏</span>
                    <span><i class="iconfont icon-jiantou"></i></span>
                </div>
            </router-link>
             <router-link class="mine-content space"  tag="div" to="/">
                <div class="wrapper">
                  <i class="iconfont icon-iconset0207 mifeng"></i>
                    <span class="wrapper-left">浏览记录</span>
                    <span><i class="iconfont icon-jiantou"></i></span>
                </div>
            </router-link>
             <router-link class="mine-content"  tag="div" to="/">
                <div class="wrapper">
                  <i class="iconfont icon-yijianfankui mifeng"></i>
                    <span class="wrapper-left">意见反馈</span>
                    <span><i class="iconfont icon-jiantou"></i></span>
                </div>
            </router-link>
             <router-link class="mine-content"  tag="div" to="/">
                <div class="wrapper">
                  <i class="iconfont icon-dianhuatubiao mifeng"></i>
                    <span class="wrapper-left">联系客服</span>
                    <span><i class="iconfont icon-jiantou"></i></span>
                </div>
            </router-link>
             <router-link class="mine-content space"  tag="div" to="/">
                <div class="wrapper posit">
                  <i class="iconfont icon-dongwutubiao-xianxing-mifeng mifeng xiaomifeng"></i>
                    <span class="wrapper-left last">关于乐峰</span>
                    <span><i class="iconfont icon-jiantou"></i></span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'mine'
}
</script>

<style  lang="scss" scoped>
.mine{
     height: 100%;
    display: flex;
    flex-direction: column;
    .header{
        width: 100%;
        height:20%;
        background-color: rgb(235, 190, 196);
        line-height: 8.5rem;
        font-size: 1.6rem;
        position: relative;
        .icon-icon26{
           display: inline-block;
            font-size: 5.5rem;
            margin-left: 2rem;
             color: rgb(241, 119, 155);
        }
        .login{
            top:0;
            left:8rem;
            position: absolute;
        }
    }
    .mine-body{
        flex: 1;
        overflow-x: hidden;
        font-size: 1.5rem;
        background-color:  #f1ecec;
        .mine-content{
          background-color:  #fff;
            height: 4.5rem;
            border-bottom: 1px solid #dadada;
            .wrapper{
                width: 94%;
                height: 4.5rem;
                margin-left: 4%;
                line-height: 4.5rem;
                .all-order{
                    color: #aca5a5;
                }
                .wrapper-left-order{
                    display: inline-block;
                    width: 76%;
                }
                .wrapper-left{
                     display: inline-block;
                    width: 84%;
                    margin-left: 0.5rem;
                }
                .last{
                    width: 89%;
                }
                .mifeng{
                  color: rgb(209, 103, 117);
                  font-size: 1.8rem;
                }
                 .xiaomifeng{
                  font-size: 3.4rem;
                  position: absolute;
                left: -0.7rem;
                }
                .icon-jiantou{
                    color: #aca5a5;
                }
            }
            .posit{
                position: relative;
                padding-left: 2.3rem;
            }
        }
        .space{
              margin-bottom: 0.8rem;
        }
        .body-pay{
           background-color:  #fff;
          margin-bottom: 0.8rem;
             height:6.5rem;
            border-bottom: 1px solid #dadada;
            ul{
                display: flex;
                justify-content: space-around;
                li{
                    display: flex;
                    flex-direction:column;
                    align-items: center;
                    .pay{
                      line-height: 4.5rem;
                       color: #FF2266;
                       font-size: 2.2rem;
                    }
                }
            }
        }
    }
}
</style>
