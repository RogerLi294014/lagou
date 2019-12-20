<template>
  <div class="bannerItem" id="bannerItem">
      <span 
        v-for="nav in navs"
        :key="nav.id"
        :class="{active:type===nav.id}"
        @click="type=nav.id,change()"
      >{{nav.title}}</span>
      
  </div>
  
</template>

<script>
//引入banners
import bBns from "./banners"
export default {
  data(){
    return {
      type:1,
      navs:[
        {id:1,title:"今天"},
        {id:2,title:"明天"},
        {id:3,title:"周一"},
        {id:4,title:"周二"},
        {id:5,title:"周三"},
        {id:6,title:"周四"},
        {id:7,title:"周五"},
      ],
    }
  },
  methods:{
    change(){
      this.$parent.$refs.btn.page=this.type
    }
  },
  components:{
   
  }
}
</script>

<style lang='scss'>
  .bannerItem{
    width:100%;
    display: flex;  
     justify-content: space-between;
     .active{
        color: #000;
      }
      span{
        width: 100%
      }
      // span:last-child{
      //   // margin-right: 0.7rem
      // }
  }
</style>