<template>
  <div class="listC">
      <h3 class="close">X</h3>
      <div class="session">
          <h3 class="cp">场次</h3>
          <span class="t">场次时间均为演出当地时间</span>
      </div>
     <button class="Radio">{{this.datas[0]}}</button>
      
      <div class="select">
          <h3 class="cp">票档</h3>
          <div class="btnbox">
                <button 
                    v-for="nav in navs"                
                    :key="nav.id"
                    :class="{active:type===nav.id}"
                     @click="type=nav.id,get(nav.type)"
                >{{nav.type}}元</button>
                
                <button class="last">1299元</button>
          </div>
         
      </div>
      <div class="hint">
          <h3>购买数量</h3>
          <span class="num">
              <button @click="jnum,localStorage" >-</button>
              <span>{{num}}</span>
              <button @click="addnum,localStorage">+</button>
          </span>
      </div>
      <div class="ft">
          <div class="price">￥{{onesum}}</div>
          <router-link tag="div" @click="localStorage" :to="'/car/'+this.$route.params.id" class="bt" >确定</router-link>
          <!-- <router-view></router-view> -->
    <!-- :to="'/car/'+this.$route.params.id" -->
      </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            key:399,
            type:1,
            navs:[
                {id:1,type:"399"},
                {id:2,type:"599"},
                {id:3,type:"799"},
                {id:4,type:"999"},
                {id:5,type:"1299"},
            ],
            datas:[],
            num:1,
            onesum:399,
            nab:[
            ]
        }
    },
    methods:{
       get(type){
           this.key=type
                  //    console.log(this.key)
        this.onesum = this.key*this.num;
       },
        addnum(){
                this.num++ 
                this.onesum = this.key*this.num;
        },
        jnum(){
                if(!this.num<=0){
                    this.num--;
                    this.onesum = this.key*this.num;

                }
                
                    
        },
      localStorage(){
        //   console.log(this.key)
        //   console.log(this.num)
        //   console.log(this.onesum)
          var a=this.key,
              b=this.num,
              c=this.onesum
         var obj={a,b,c}
         console.log(obj)
         localStorage.setItem("good",JSON.stringify(obj))
      }
        
    },
   /*  watch:{
            onesum:{
                immediate:true,
                handler(val){
                    this.onesum = this.key*this.num;
                    console.log(this.key)
                    console.log(this.num)
                    console.log(this.onesum);
                },
                deep:true
            },
        deep:true
    }, */
    created(){
        this.$http.get(`/api/sk/more`,{      
      
        }).then(res=>{
        // console.log(res.data.data.object_list)
        // console.log(this.$route.params.id)
        for(var i = 0;i<res.data.data.object_list.length-1;i++){
            if(res.data.data.object_list[i].id ==this.$route.params.id){
            this.datas.push(res.data.data.object_list[i].showTime)
            // console.log(this.datas)

            }
            
        }
        })
    }
}
</script>
    
<style lang="scss">
    .listC{
        width: 100%;
        height:5.2rem;
        background: #ffff;
        border-radius: 0.16rem;
        overflow: hidden;
        h3{
            color: #000;
            font-weight: 600;
            float: left;
        }
        .close{
            color: #aaa;
            font-size: 0.14rem;
            float: right;
            margin:0.1rem 0.2rem;
        }
        .Radio{
            width: 1.8rem;
            height: 0.5rem;
            background: rgba(255,45,121,.1);
            color: #ff2d79;
            border:0;
            margin-left: 0.14rem;
            border-radius: 0.03rem;
        }
        .session{
            width: 100%;
            height: 0.4rem;
            margin: 0.5rem 0.14rem 0;
            .t{
                margin:0.02rem 0 0 0.05rem;
                line-height: 0.25rem;
                font-size: 0.13rem;
            }
        }
        .select{
            height: 2.5rem;
            margin:  0.31rem 0.14rem 0;
            .btnbox{
                width: 100%;
                float: left;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .active{
                    background: rgba(255,45,121,.1);
                    color: #ff2d79;
                }
                button{
                    width: 1.1rem;
                    height: 0.47rem;
                    margin: 0rem 0 0.1rem;
                    border-radius: 0.03rem;
                    background-color: #f6f6f6;
                    color:#000;
                    border:0;
                }
                .last{
                    visibility: hidden;
                }

            }
            .cp{
                margin: 0.12rem 0;
            }
        }
        .hint{
            width: 100%;
            margin: 0.12rem;
            .num{
                width: 1rem;
                float: right;
                button{
                    width: 0.2rem;
                    height: 0.2rem;
                    background-color: #f5f5f5;
                    color: #666;
                    border: 0
                }
                span{
                    display: inline-block;
                    width: 0.3rem;
                    height: 0.2rem;
                    text-align: center
                }
            }
        }
        .ft{
            width: 100%;
            height: 0.8rem;
            margin-top: 0.5rem;
            // background: yellow;
            display: flex;
            justify-content: space-between;
            .price{
                width: 0.8rem;
                height: 0.5rem;
                float: left;
                font-size: 0.20rem;
                line-height: 0.5rem;
                color: #ff2d79;
            }
            .bt{
                width: 1.5rem;
                height: 0.42rem;
                margin-right: 0.12rem;
                border-radius: 0.2rem 0.2rem 0.2rem 0;
                background-image: linear-gradient(90deg,#ff3299 1%,#ff4a72);
                color: #fff;
                font-size: 0.15rem;
                text-align: center;
                line-height: 0.42rem;
                border: 0;
            }
        }
    }
</style>