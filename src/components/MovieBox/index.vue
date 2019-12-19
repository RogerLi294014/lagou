<template>
  <div class="movie-box">
      <h3 class="more">更多演出</h3>
      <MovieTiitle></MovieTiitle>
      <MovieItem></MovieItem>
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

<style>
  .more{
    font-weight: 550;
    color: #000;
    margin:0 0 1rem 1rem;
    display: inline-block;
  }
</style>