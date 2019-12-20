<template>
  <div class="listC">
      <h3 class="close">X</h3>
      <div class="session">
          <h3 class="cp">场次</h3>
          <span class="t">场次时间均为演出当地时间</span>
      </div>
     <button class="Radio">2020-02-29 周六  19:00</button>
      
      <div class="select">
          <h3 class="cp">票档</h3>
          <div class="btnbox">
                <button 
                    v-for="nav in navs"                
                    :key="nav.id"
                    :class="{active:type===nav.id}"
                     @click="type=nav.id"
                >{{nav.type}}</button>
                
                <button class="last">1299元</button>
          </div>
         
      </div>
      <div class="hint"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            type:1,
            navs:[
                {id:1,type:"399元"},
                {id:2,type:"599元"},
                {id:3,type:"799元"},
                {id:4,type:"999元"},
                {id:5,type:"1299元"},
            ]
        }
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
            height: 3.5rem;
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
    }
</style>