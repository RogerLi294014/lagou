<template>
  <div class="banner">
      <h3>近期演出</h3>
      <h4>演出日历></h4>
      <div class="banbox">
        <bItem  ref="item"></bItem>
      </div>
      <bBns ref="btn"></bBns>
  </div>
</template>

<script>
import bItem from "./bannerItem"
//引入banners
import bBns from "./banners"
export default {
 
  components:{
    bItem,bBns

  },
}
</script>

<style lang='scss'>
  .banner{
    h3{
      font-weight: 550;
      color: #000;
      margin-bottom: 0.15rem;
      display: inline-block;
    }
    h4{
      float: right;
      margin: 0.02rem 0.1rem 0 0;
    }
    margin: 0 0rem 0rem 0.15rem;
    color: #999;
    // background: yellow;
    .banbox{
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap
    }
  }
</style>