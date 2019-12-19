<template>
  <div class="banner">
      <div class="banbox">
        <bItem></bItem>
        
      </div>
      <bBns></bBns>
  </div>
</template>

<script>
import bItem from "./bannerItem"
//引入banners
import bBns from "./banners"
export default {
  components:{
    bItem,bBns

  }
}
</script>

<style lang='scss'>
  .banner{

    margin: 0 0rem 0rem 1rem;
    color: #999;
    background: yellow;
    .banbox{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
</style>