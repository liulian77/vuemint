<template>
    <div class="productlist">
        <ul>
            <router-link
            tag="li"
            class="productlist-li"
            :to="{
                name:'list',
                params:{
                    id:curr.url.split('=').pop()
                }
            }"
            @click.stop="changeTiltle({
              id:curr.id,
              title: curr.title
                      })"
             v-for="curr in products" :key="curr.id"
             >
                <img :src="curr.imageUrl" alt="">
                <p>{{curr.title}}</p>
            </router-link>
        </ul>
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
      'changeTiltle'
    ])
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$ajax.getProducts(to.params.id)
        .then(resp => {
          if (resp.data.code === 200) {
            vm.products = resp.data.data.categories.filter(item => item.title !== '本周上新')
          }
        })
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.$nextTick(() => {
      this.$ajax.getProducts(this.$route.params.id)
        .then(resp => {
          console.log(this.index)
          if (resp.data.code === 200) {
            this.products = resp.data.data.categories.filter(item => item.title !== '本周上新')
          }
        })
    })
    next()
  }
}
</script>
<style lang="scss" scoped>
.productlist{
    ul{
        display: flex;
        flex-wrap:wrap;
        font-size: 1.5rem;
        .productlist-li{
            width: 50%;
            text-align: center;
            img{
                width: 90%;
                max-width: 100%
            }
        }
    }
}
</style>
