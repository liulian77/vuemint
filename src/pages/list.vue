<template>
    <div class="list">
        <div class="header">
           <div class="head">
                <i class="iconfont icon-fanhui"></i>
                <span>时尚套装</span>
           </div>
            <div class="select">
                <p><i class="iconfont icon-duihuan"></i>价格</p>
                <p class="midp"><i class="iconfont icon-duihuan"></i>销量</p>
                <p><i class="iconfont icon-webicon20"></i>筛选</p>
            </div>
        </div>
        <div class="list-body">
           <ul>
              <router-link
                tag="li"
                class="list-li"
                to="detail"
                  v-for="curr in products" :key="curr.id">
                     <img :src="curr.image" alt="">
                    <p class="title-li">{{curr.title}}</p>
                    <div class="price-li"><span class="price">￥{{curr.price.toFixed(2)}}</span>
                    <span class="marked-price">￥{{(curr.price+50).toFixed(2)}}</span>
                    <i class="iconfont icon-gouwuche"
                     @click.stop="addToCart({
                        id: curr.id,
                        title: curr.title,
                        price: curr.price
                      })"
                    ></i>
                    </div>
              </router-link>
           </ul>
        </div>
        <div class="list-foot">
          <router-view/>
        </div>
    </div>
</template>

<script>
import {
  mapMutations
} from 'vuex'
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    ...mapMutations([
      'addToCart'
    ])
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$ajax.getList(to.params.id)
        .then(resp => {
          console.log(resp)
          if (resp.data.code === 200) {
            vm.products = resp.data.data.items.list
            console.log(vm.products)
          }
        })
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.$ajax.getList(this.$route.params.id)
      .then(resp => {
        if (resp.data.code === 200) {
          this.products = resp.data.data.items.list
        }
      })
    next()
  }
}
</script>

<style lang="scss" scoped>
.list{
     height: 100%;
  display: flex;
  flex-direction: column;
    .header{
       .head{
           height: 4rem;
           line-height: 4rem;
           border-bottom: 1px solid #dedede;
           position: relative;
           font-size: 1.8rem;
          text-align: center;
           i{
               position: absolute;
               left:0;
               font-size: 2.5rem;
           }
       }
       .select{
         border-bottom:  1px solid #dedede;
           font-size: 1.5rem;
           p{
               text-align: center;
               height: 3.5rem;
               line-height: 3.5rem;
               display: inline-block;
                width: 32.2%;
           }
           .midp{
                border-right: 1px solid #dedede;
                 border-left: 1px solid #dedede;
           }
            .icon-webicon20{
                    font-size: 1.9rem;
            }
       }
    }
    .list-body{
      background-color:  #f1ecec;
      flex: 1;
      overflow-x: hidden;
      ul{
         display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
        font-size: 1.5rem;
         .list-li{
           margin-bottom: 0.5rem;
           background-color:  #fff;
           width: 49.5%;
          text-align: center;
        img{
          margin-top: 0.5rem;
           width: 95%;
           height: 78%;
           max-width: 100%
        }
        .title-li{
           width: 95%;
            margin-top: 0.3rem;
            margin-bottom: 0.3rem;
            margin-left: 0.5rem;
           white-space: nowrap;
           overflow: hidden;
            text-overflow: ellipsis
        }
        .price-li{
          text-align: left;
          margin-bottom: 5%;
          .price{
             font-size: 1.8rem;
          }
          .marked-price{
            color: #999;
            text-decoration: line-through;
            display: inline-block;
            margin-right: 10%
          }
        }
        i{
          float: right;
           font-size: 2.5rem;
            color: #FF2266;
        }
      }
      }
    }
}
</style>
