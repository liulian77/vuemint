<template>
    <div class="search">
        <i class="iconfont icon-fanhui" onclick="window.history.go(-1)"></i>
        <mt-search
            v-model="value"
            cancel-text="搜索"
            placeholder="搜索">
        </mt-search>
    </div>
</template>
<script>

export default {

}
</script>

<style>
.search{
    position: relative;
}
.mint-searchbar-inner{
    margin-left: 1.8rem;
}
.mint-searchbar-cancel{
    font-size: 1.8rem;
}
.icon-fanhui{
    position: absolute;
    height: 1rem;
    z-index: 9999;
    top:1.3rem;
    left: 0.3rem;
    font-size: 2rem;
    color: rgb(133, 129, 129);
}
</style>
