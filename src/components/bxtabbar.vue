<template>
  <div class="bxtabbar">

    <router-link
    v-for='tab in tabs'
    :key="tab.path"
     class="bxtabbaritem"
     active-class='current'
     tag="li"
     :to="tab.path">
     <div class="bx-cart" v-if="tab.path==='/cart' && cartTotalCount!=0">
       {{cartTotalCount|num}}
     </div>

      <i v-html="tab.icon"></i>

      <span>{{tab.title}}</span>

    </router-link>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: {
    tabs: Array
  },
  computed: {
    ...mapGetters([
      'cartTotalCount'
    ])
  }
}
</script>

<style lang='scss' scoped>
html{
font-size: 62.5%;
}
.bx-cart{
  position: absolute;
  right: 0;
  top: -1rem;
  background-color: red;
  padding:0 3px;
  height: 2rem;
  font-size: 1.5rem;;
  line-height: 2rem;
  color: white;
  border-radius: 9px;
  min-width: 2rem;;
}
.bx {
  &tabbar {
    height: 5rem;
    display: flex;
    border: 1px solid #dedede;
    list-style: none;
    &item {
      position: relative;
        &.current{
          background-color: #f7e7e7;
          color:  #e28080;
        }
      flex: 1;
      text-align: center;
      & > span {
        display: block;
        font-size: 1.5rem;
        line-height: 1.5rem;
      }
      &>i{
          font-family: 'bxfont';
          font-size:3rem;
          line-height: 3rem
      }
    }
  }
}
</style>
