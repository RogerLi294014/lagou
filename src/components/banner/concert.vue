<template>
  <div class="qwer">
    <div class="aaa"
    v-for="data in datas"
    :key="data.id"
    @click="select"
  
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
  <aside v-if="flag"><img src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2630003391,450194471&fm=26&gp=0.jpg" alt=""></aside>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return{
      datas:[],
      flag:false
    }
  },
  methods:{
    select(){
        // console.log(11)
    }
  },
  mounted(){
    this.$http.get("/api/sk/more",{      
      
    }).then(res=>{
       for(var i = 0;i<res.data.data.object_list.length-1;i++){
        //  console.log(res.data.data.object_list[i].categoryName)
         if(res.data.data.object_list[i].categoryName == "演唱会"){
           this.datas.push(res.data.data.object_list[i])
          
          }
         
       }
      if(this.datas.length == 0){
        this.flag = true
        console.log(111)
        } 
    
    })
  }
}
</script>

<style lang="scss">
aside{
  img{
      position: fixed;;
      width:100%;
      top:1.5rem;
  }

}
  .qwer{
     margin-top:0.6rem;
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