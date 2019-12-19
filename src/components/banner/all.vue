<template>
  <div class="qwer">
    <div class="aaa"
    v-for="data in datas"
    :key="data.id"
  >
      <div class="left">
        <img v-lazy="data.verticalPic" alt="" class="pic">
      </div>
      <div class="right">
        <span>{{data.name}}</span>
        <span>{{data.cityName}}\{{data.showTime}}\{{data.venueName}}</span>
        <span>￥{{data.priceStr}}</span>
      </div>
  </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      datas:[]
    }
  },
  created(){
    this.$http.get("/api/sk/more",{      
    }).then(res=>{
      this.datas=res.data.data.object_list
    })
  }
}
</script>

<style lang="scss">
  .qwer{
    margin-top:0.55rem;
  }
  .aaa{
    background-color: white;
    height:1.2rem;
    margin:0.2rem 0;
    display: flex;
    // justify-content: center;
    .left{
      background-color: white;
      height:1.2rem;
      margin-left: 0.12rem;
  
      .pic{
        height:100%;     
      }
    }
    .right{
      background-color: white;
      height:1.2rem;
      width:2.37rem;
      margin-left: 0.12rem;
      display: flex;
      flex-flow: column;
      span:nth-of-type(1){
        font-size: .15667rem;
        color: #111;
        font-weight: 700;
      }
      span:nth-of-type(2){
        margin-top:0.06rem;
        font-size: .12rem;
        color: #aaa;
      }
       span:nth-of-type(3){
          margin-top:.26rem;
          font-size: .1373rem;
          color: #ff1268;
       }
      
    }
  }
</style>