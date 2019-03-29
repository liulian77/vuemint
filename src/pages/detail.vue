
<template>
  <div class="detail">
    <div class="detail-title">
     <router-link to="/mall" tag="div" class="detail-icon">&lt;</router-link>
      <div class="biaoti">{{detail.detail.title}}</div>
      <div class="detail-icon">&#xe61d;</div>
    </div>
    <div class="detali-body">
      <div class="img">
        <img :src="detail.detail.image" alt>
      </div>
      <div class="miaoshu">
        <div class="box-word">{{detail.detail.title}}</div>
        <div class="detail-icon">&#xe607;</div>
      </div>
      <div class="price">
        <span>￥</span>
        <i>{{detail.detail.price}}</i>
        <em>{{detail.detail.originPrice}}</em>
      </div>
      <div class="flower">
        <div>
          <span>免邮</span>全场满99元包邮
        </div>
        <div>
          <span>花粉</span>购买最多获得
          <i>{{detail.detail.price}}</i>个花粉
        </div>
      </div>
      <div class="throung"></div>
      <div class="biaozhi">
        <div>
          <i>&#xe6f4;</i>正品保证
        </div>
        <div>
          <i>&#xe722;</i>品牌授权
        </div>
        <div>
          <i>&#xe603;</i>七天退货
        </div>
      </div>
      <div class="throung"></div>
      <div class="detail-products">
        <div class="ww-title">
          <div class="current">商品详情</div>
          <div>购买说明</div>
        </div>
        <div class="ww-box1">
          <div class="line1">
            <div class="xiao-product">商品品牌：</div>
            <div class="xiao-product1">{{detail.detail.shop.title}}</div>
          </div>
          <div class="line1">
            <div class="xiao-product">商品品牌：</div>
            <div class="xiao-product1">{{detail.detail.shop.title}}</div>
          </div>
          <div class="line1">
            <div class="xiao-product">评价</div>
            <div class="xiao-product1">{{detail.detail.shop.itemScore}}</div>
          </div>
          <div class="line1">
            <div class="xiao-product">创建时间：</div>
            <div class="xiao-product1">{{detail.detail.shop.updateTime}}</div>
          </div>
          <div class="line1">
            <div class="xiao-product">规格：</div>
            <div class="xiao-product1">50g</div>
          </div>
          <div class="line1">
            <div class="xiao-product">特点描述：</div>
            <div class="xiao-product1">补水保湿，抗皱除湿，提亮肤色</div>
          </div>
          <div class="line1">
            <div class="xiao-product">产地：</div>
            <div class="xiao-product1">广州</div>
          </div>
          <div class="line1">
            <div class="xiao-product">货号：</div>
            <div class="xiao-product1">{{detail.detail.id}}</div>
          </div>
          <router-link to="/" class="more">查看玉兰油更多商品</router-link>
        </div>
      </div>
      <div class="throung"></div>
      <div class="koubei">
        <div class="ww1">
          <div>
            商品评价
            <em>(132)</em>
          </div>
          <div>
            <span>
              <i>95.5%</i> 好评
            </span>
          </div>
        </div>
        <div class="ww2">
          <div class="wwe">
            <div>
              <i>&#xe62c;</i>
              <b>满意</b>
            </div>
            <div>
              <em>我最亲爱的</em>
              <span>2019-03-03</span>
            </div>
          </div>
          <div class="wwm">不错，不错，不错</div>
        </div>
        <div class="ww2">
          <div class="wwe">
            <div>
              <i>&#xe62c;</i>
              <b>满意</b>
            </div>
            <div>
              <em>我最亲爱的</em>
              <span>2019-03-03</span>
            </div>
          </div>
          <div class="wwm">不错，不错，不错</div>
        </div>
        <div class="ww2">
          <div class="wwe">
            <div>
              <i>&#xe62c;</i>
              <b>满意</b>
            </div>
            <div>
              <em>我最亲爱的</em>
              <span>2019-03-03</span>
            </div>
          </div>
          <div class="wwm">不错，不错，不错</div>
        </div>
      </div>
      <div class="throung"></div>
      <div class="liulan">浏览本商品的用户还买了</div>
      <div class="ul">
        <div class="li">
          <img src="../img/banner_19.jpg" alt>
        </div>
        <div class="li">
          <img src="../img/banner_4.jpg" alt>
          <div class="li">
            <img src="../img/banner_7.jpg" alt>
          </div>
          <div class="li">
            <img src="../img/banner_6.jpg" alt>
          </div>
          <div class="li">
            <img src="../img/banner_9.jpg" alt>
          </div>
          <div class="li">
            <img src="../img/banner_7.jpg" alt>>
          </div>
          <div class="li">
            <img src="../img/banner_8.jpg" alt>
          </div>
          <div class="li">
            <img src="../img/banner_9.jpg" alt>
          </div>
          <div class="li">
            <img src="../img/banner_19.jpg" alt>
          </div>
          <div class="li">
            <img src="../img/banner_4.jpg" alt>
          </div>
        </div>
      </div>
      <div class="scorll">上拉查看图文详情</div>
      <div class="detail-pic" v-for="banner in banners" :key="banner.id">
        <img :src="banner.url" alt>
      </div>
    </div>
    <div class="detail-footer">
      <div>
        <i>&#xe606;</i>
      </div>
      <router-link  :to="{
                name:'cart',
                params:{
                    id:detail.detail.id,
                    title:detail.detail.shop.title,
                    amount:1,
                    price:detail.detail.price,
                }
            }"
      id="addtocar">加入购物车</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      detail: {},
      banners: []
    }
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$ajax.getDetail(to.params.id).then(resp => {
        if (resp.data.code === 200) {
          vm.detail = resp.data.data
          vm.banners = vm.detail.detail.photos
          // console.log(resp)

          // console.log(vm.detail)
          console.log(vm.detail.detail.id)
        }
      })
    })
  }
}
</script>

<style lang="scss" scop>
.detail {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.detail-title {
  height: 3.1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  div {
    height: 2.8rem;
    line-height: 3.2rem;
    font-size: 1.5rem;
  }
  .biaoti {
    width: 60%;
    height: 100%;
    margin-left: 10%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .detail-icon {
    font-family: "iconfont";
  }
}
.detali-body {
  flex: 1;
  overflow-x: hidden;
  .img {
    height: 60%;

    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .miaoshu {
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .box-word {
      width: 82%;
      font-size: 1.3rem;
      padding-left: 0.3rem;
      line-height: 2.4rem;
      border-right: 1px solid #f8f8f8;
      font-weight: 600;
      text-align: left;
      padding-right: 3rem;
    }
    .detail-icon {
      font-family: "iconfont";
      font-size: 2.3rem;
      color: pink;
      width: 10%;
      text-align: center;
      line-height: 5rem;
    }
  }
}
.price {
  height: 4rem;

  line-height: 4rem;
  padding-left: 1rem;
  border-bottom: 1rem solid #f7f9f8;
  span {
    font-size: 1rem;
    color: #e20957;
  }

  i {
    font-size: 1.6rem;
    color: #e20957;
    font-weight: 600;
  }
  em {
    padding-left: 1.5rem;
    color: #cccccc;
    text-decoration: line-through;
  }
}
.flower {
  height: 9rem;
  div {
    width: 90%;
    margin-left: 1.2rem;
    border-bottom: 1px solid #cdcdcd;
    height: 4.5rem;
    line-height: rem;
    font-size: 1.3rem;
    span {
      display: block;
      float: left;
      height: 3rem;
      width: 4rem;
      text-align: center;
      line-height: 2rem;
      background: #e6618e;
      font-size: 1.3rem;
      color: #ffffff;
      margin-top: 0.5rem;
      margin-right: 1rem;
    }
    i {
      color: pink;
    }
  }
}
.throung {
  height: 0.7rem;
  background: #f6f8f7;
}
.biaozhi {
  height: 3.1rem;

  display: flex;
  direction: row;
  justify-content: space-around;
  font-size: 1.3rem;
  border-bottom: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
  div {
    width: 31%;
    height: 3rem;
    line-height: 3.1rem;
    text-align: center;
    i {
      font-family: "iconfont";
      font-size: 1.3rem;
    }
  }
}
.ww-title {
  height: 2.8rem;
  display: flex;
  flex-direction: row;
  line-height: 2.8rem;
  border-bottom: 1px solid #e0e0e0;
  font-size: 1.3rem;
  justify-content: space-around;
  div {
    width: 45%;
    text-align: center;
  }
  .current {
    color: #ea0955;
    border-bottom: 3px solid #ea0955;
  }
}
.line1 {
  height: 3.6rem;
  display: flex;
  flex-direction: row;
  line-height: 2.8rem;
  font-size: 1.3rem;
  justify-content: space-around;
  .xiao-product {
    width: 30%;
    padding-left: 2rem;
    line-height: 2rem;
  }
  .xiao-product1 {
    width: 70%;
    text-align: left;
    line-height: 2rem;
    color: #9f9f9f;
  }
}
.ww-box1 {
  border-bottom: 1px solid #e0e0e0;
  .more {
    display: block;
    height: 2.4rem;
    width: 50%;
    border-radius: 1rem;
    border: none;
    background: #ffffff;
    color: black;
    border: 2px solid black;
    margin-left: 30%;
    font-size: 1.4rem;
    text-align: center;
    text-decoration: none;
    margin-bottom: 1.5rem;
    line-height: 2.4rem;
  }
}
.ww1 {
  width: 90%;
  margin-left: 1.3rem;
  display: flex;
  flex-direction: row;
  line-height: 2.8rem;
  font-size: 1.3rem;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  div em {
    color: #cccccc;
  }
  div i {
    color: #e6618e;
  }
}
.ww2 {
  width: 90%;
  margin-left: 1.3rem;
  border-bottom: 1px solid #e5e5e5;
  .wwe {
    display: flex;
    flex-direction: row;
    line-height: 2.8rem;
    font-size: 1.3rem;
    justify-content: space-between;
  }
  .wwe div b {
    padding-left: 1.3rem;
    color: #e6618e;
  }

  .wwe div i {
    font-family: "iconfont";
    color: #e6618e;
  }
  .wwe div em {
    font-size: 1.2rem;
    font-weight: 600;
  }
  .wwe div span {
    color: #cccccc;
    font-size: 1.2rem;
  }
  .wwm {
    color: #9c9c9c;
    height: 2rem;
    line-height: 2.3rem;
  }
}
.liulan {
  padding-left: 1.5rem;
  font-size: 1.3rem;
  border-bottom: 1px solid #e5e5e5;
  line-height: 2rem;
  height: 2rem;
}
.ul {
  height: 10rem;
  overflow-y: hidden;
  width: 100%;
  white-space: nowrap;

  .li {
    display: inline-block;
    width: 30%;
    height: 100%;
    img {
      width: 80%;
      height: 7rem;
    }
  }
}
.scorll {
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  font-size: 1.4rem;
  color: #6666;
}
.detail-pic {
  padding: 1.5rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.detail-footer {
  height: 3.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1.3rem;
  div i {
    font-family: "iconfont";
    font-size: 2.5rem !important;
    color: #e6618e;
  }

  #addtocar {
    height: 2.6rem;
    width: 30%;
    background: #ff0056;
    color: #ffffff;
    text-align: center;
    line-height: 2.6rem;
    text-decoration: none;
  }
}

@font-face {
  font-family: "iconfont"; /* project id 1105026 */
  src: url("//at.alicdn.com/t/font_1105026_4qdddlj6axq.eot");
  src: url("//at.alicdn.com/t/font_1105026_4qdddlj6axq.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1105026_4qdddlj6axq.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1105026_4qdddlj6axq.woff") format("woff"),
    url("//at.alicdn.com/t/font_1105026_4qdddlj6axq.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1105026_4qdddlj6axq.svg#iconfont") format("svg");
}
</style>
