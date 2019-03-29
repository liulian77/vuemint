<template>
    <div class="mall">
        <ul class="cate-list">
            <li
            v-for="prod in category"
            :key="prod.id"
             :class="{
              'current': currentId === prod.id
            }"
            @click="switchCategory(prod.id)"
            >{{prod.name}}</li>
        </ul>
        <div class="product-list">
             <router-view/>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      category: [],
      currentId: null
    }
  },
  methods: {
    switchCategory (id) {
      this.currentId = id
      this.$router.push({
        name: 'category',
        params: {
          id
        }
      })
    },
    redirectToCategory () {
      this.$ajax.getCateNav()
        .then(resp => {
          if (resp.data.code === 200) {
            const hasId = Boolean(this.$route.params.id)
            this.category = resp.data.data.list.slice(1)
            this.currentId = hasId
              ? Number(this.$route.params.id)
              : resp.data.data.list[1].id
            this.$nextTick(() => {
              this.$router.push({
                name: 'category',
                params: {
                  id: this.currentId
                }
              })
            })
          }
        })
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (to.path === '/mall') {
      this.redirectToCategory()
    } else {
      next()
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.redirectToCategory()
    })
  }
}
</script>

<style lang="scss" scoped>
 .mall{
    height: 100%;
    display: flex;
    .cate-list{
        width: 7.5rem;
         overflow-x: hidden;
       background-color:#ffeeee;
        font-size: 1.4rem;
        li{
            height: 4.5rem;
            line-height: 4.5rem;
            border-bottom: 1px solid #FFF;
             color: #666;
             text-align: center;
             &.current {
                    border-left:1px solid #ece5e5;
                    background-color:#f8f4f4;
              }
        }
    }
    .product-list{
        flex:1;
        overflow-x: hidden;
    }
 }
</style>
