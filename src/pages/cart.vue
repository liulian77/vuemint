<template>
  <div class="cart">
     <!-- <input type=button value=后退 onclick="window.history.go(-1)"> -->
    <!-- <mt-header title="购物车">
        <mt-button icon="back"></mt-button>
    </mt-header> -->
    <div class="head">
        <i class="iconfont icon-fanhui" onclick="window.history.go(-1)"></i>
        购物车
    </div>
    <div class="bxzy_box">
      <div class="bxzy">白熊自营</div>
    </div>
    <div class="noshop"  v-if="cart.length === 0">
<p>你还没有商品哦</p>
<router-link to="/mall" class="gotoshop">快去逛逛吧</router-link>
</div>
    <div class="bxzy_box_shop" >

      <div class="bxzy_box_shop_list"   v-for=" item in cart"
    :key="item.id">
    <div class="check"><input type="checkbox"
    @click='togochecked(item.id)'
    :checked='item.checked'
    ></div>
         <div class="left">
        <div class="bxzy_box_shop_list_img">
          <img :src="item.img">
        </div>
        <div class="bxzy_box_shop_list_title">
          <p class="title">{{item.title}}</p>
          <span>￥{{item.price}}</span>
          <div class="button">
            <b class="button_1 re" @click="handleRemove(item.id)">-</b>
            <b class="button_1 val">{{item.count}}</b>
            <b class='button_1 add' @click="handleAdd(item.id)">+</b>
          </div>
          <p class="delat" @click='deletCartItemAsync(item.id)'>&#xe619;</p>
        </div>
         </div>
      </div>
  <div class="Allcheck" ><input
    @change='togoAllchecked($event.target.checked)'
    type="checkbox"
    :checked='isAllChecked'
    >{{isAllChecked ? '取消全选':"全选"}} <span><b>免邮</b>本单已免运费</span></div>
      <div class="gobuy" v-if="cart.length !== 0">
       <p>总金额: <span>￥{{cartCheckedPrice.toFixed(2)}}</span></p>
       <router-link class="gobuy_button" tag="div" to="/mine">
 结算
       </router-link>
      </div>
    <div class="buttom_link">

    </div>
    </div>

    <!-- <div
    v-for=" item in cart"
    :key="item.id"
    >
    <input
    type="checkbox"
    @click='togochecked(item.id)'
    :checked='item.checked'/>
    {{item.price}}
    {{item.title}}
    ${{item.count}}

    <button @click='deletCartItemAsync(item.id)'>删除</button>
    </div>
    <div><input
    @change='togoAllchecked($event.target.checked)'
    type="checkbox"
    :checked='isAllChecked'>{{isAllChecked ? '取消全选':"全选"}}</div>
    <div>
    总共{{cartTotalCount}}件商品 ， 选中{{cartCheckedCount}}多少件商品，,选中商品{{cartCheckedPrice}}价格

    </div> -->

  </div>
</template>

<script>
import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
export default {
  created () {
    console.log(this.cart)
  },

  computed: {
    ...mapState([
      'cart'
    ]),
    ...mapGetters([
      'cartTotalCount',
      'cartCheckedCount',
      'cartCheckedPrice',
      'isAllChecked'
    ])
  },
  methods: {

    ...mapMutations([
      'deletCartItem',
      'togochecked',
      'togoAllchecked',
      'handleRemove',
      'handleAdd'

    ]),
    ...mapActions([
      'deletCartItemAsync'
    ])
  }
}
</script>
<style>
.cart {
  background: #e9e4e4;
}
/* .mint-header {
  width: 100%;
  text-align: center;
  height: 5rem;
  border-bottom: 1px solid #cccccc;
  line-height: 5rem;
  font-size: 2.5rem;
  background-color: #ffffff;
  color: black;
} */
.head{
   background-color: #ffffff;
    height: 4rem;
    line-height: 4rem;
    border-bottom: 1px solid #dedede;
    position: relative;
    font-size: 1.8rem;
  text-align: center;
}
.fanhui-btn{
  background-color: #ffffff;
  border: 1px solid red;
}
.icon-fanhui{
        position: absolute;
        left:0;
        font-size: 2.5rem;
    }
.bxzy_box {
  width: 100%;
  height: 3rem;
  background-color: #ffffff;
  margin-top: 1rem;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #efefef;
  font-size: 1.5rem;
  line-height: 3rem;
}
.bxzy {
  width: 10rem;
  height: 2rem;
  padding-left: 2rem;
  color: red;
}
.bxzy_box_shop {
  width: 100%;
  height: auto;
  background-color: #ffffff;
}
.left{
  width:90%;
  float: right;
}
.check{
  float: left;
  padding-top: 5.5rem;
  padding-left: 1rem;
}
.Allcheck{
height: 5rem;
padding-top: 2rem;
padding-left: 1.5rem;
font-size: 1.5rem;
}
.Allcheck span{
  float: right;
  padding-right: 2rem;
}
.Allcheck b{
  font-size: 1.5rem;
  background:pink;
  height: 1.5rem;
  line-height: 1.5rem;
  display: inline-block;
  color: #ffffff;width: 3rem;
  text-align: center;
  margin-right: 1rem;
  border-radius: 2px;
}
.bxzy_box_shop_list {
  width: 100%;
  height: 15rem;
  border-bottom: 1px solid #efefef;
}
.bxzy_box_shop_list_img {

  width: 35%;
  float: left;
}
.bxzy_box_shop_list_img img {
  width: 80%;
  padding-left: 1rem;
  padding-top: 2rem;

}
.bxzy_box_shop_list_title {
  width: 65%;
  height: 100%;
  float: right;
}
.bxzy_box_shop_list_title .title{
  width: 80%;
    padding-top: 1.5rem;
}
.bxzy_box_shop_list_title p {
  font-size: 1.5rem;
}
.bxzy_box_shop_list_title span {
  font-size: 1.5rem;
  display: block;
  padding-top: 1rem;
}
.delat {
  font-family: "iconfont";
  float: right;
  padding-right: 1.5rem;
  font-size: 2.5rem !important;
  margin-top: 2rem;
}
.button {
  float: left;
}
.button b{
    font-size: 1.5rem;
  height: 2.5rem;
  float: left;
  width: 2.5rem;
  border: 1px solid #cccccc;
  margin-top: 2rem;
  line-height: 2.5rem;
  text-align: center;
}
.button .re{
    border-right: none;
}
.button .add{
    border-left: none;
}
.gobuy{
width: 100%;
height: 7rem;
border: 1px solid #dedede;
font-size: 2rem;
line-height: 7rem;
position: fixed;
bottom: 0rem;;
background-color: #ffffff;
}
.gobuy p{
    padding-left: 1rem;
    float: left;
    }
    .gobuy span{
        color: red;
    }
.gobuy .gobuy_button{
    float: right;
    width: 30%;
    height: 5.5rem;
    background-color: red;
    border-radius: 3px;
    margin-top: 0.5rem;
    margin-right: 1rem;
    text-align: center;
    line-height: 5.5rem;
    color: #ffffff;
}
.buttom_link{
  height: 7rem;
  width: 100%;
  background: #ffffff;
}
.noshop{
  width: 100%;
  height: 40rem;
  font-size: 3rem;
  text-align: center;
  padding-top: 15rem;
}
.noshop p{
  padding-bottom: 2rem;
}
.noshop .gotoshop{
  background-color: red;
  text-decoration: none;
  display: inline;
  color: #efefef;
  border-radius: 10px;
  font-size: 3rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
@font-face {
  font-family: "iconfont"; /* project id 1105026 */
  src: url("//at.alicdn.com/t/font_1105026_ya3h6xfbac.eot");
  src: url("//at.alicdn.com/t/font_1105026_ya3h6xfbac.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1105026_ya3h6xfbac.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1105026_ya3h6xfbac.woff") format("woff"),
    url("//at.alicdn.com/t/font_1105026_ya3h6xfbac.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1105026_ya3h6xfbac.svg#iconfont") format("svg");
}
</style>
