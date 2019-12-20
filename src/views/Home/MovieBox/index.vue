<template>
  <div class="movie-box">
      <h3 class="more">更多演出</h3>
      <MovieTiitle></MovieTiitle>
      <MovieItem></MovieItem>
      <div class="sj">没有更多数据了。。。</div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem"
import MovieTiitle from "./MovieTiitle"
export default {
  components:{
    MovieItem,MovieTiitle
  }
}
</script>

<style lang="scss">
  .more{
    font-weight: 550;
    color: #000;
    margin:0.02rem 0 0.1rem 0.12rem;
    display: inline-block;
  }
  .sj{
    text-align: center;
    height: 1rem;
    line-height: 1rem;
  }
</style>