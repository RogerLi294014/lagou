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
      margin-bottom: 1rem;
      display: inline-block;
    }
    h4{
      float: right;
      margin-top: 0.2rem;
    }
    margin: 0 0rem 0rem 1.1rem;
    color: #999;
    background: yellow;
    .banbox{
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap
    }
  }
</style>