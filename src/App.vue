<template>
  <div id="app">
    app!
    <banner></banner>
    <!-- 显示组件 -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss">

</style>

<script>
import banner from "./components/banner/banner"
export default {
  components:{
    banner
  }
}
</script>
