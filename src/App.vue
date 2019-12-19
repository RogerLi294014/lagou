<template>
  <div id="app">
    app!
    <banner></banner>
    <MovieBox></MovieBox>
    <!-- 显示组件 -->
  </div>
</template>

<style lang="scss">

</style>

<script>
//近期演出
import banner from "./components/banner"
//更多演出
import MovieBox from "./components/MovieBox"
export default {
  components:{
    banner,MovieBox
  }
}
</script>
