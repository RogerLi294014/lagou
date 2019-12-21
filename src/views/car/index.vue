<template>
<div>
  <img v-if="!datas" src="../../assets/loading.gif" alt="">
  <div v-else class="car">
    
     <div class="head">
        <div class="box1">
            <h3>{{datas[0].name}}</h3>
            <p>广州|广州海信沙亚公园亚运看台</p>
        </div>
        <div class="box2">
            <h3>{{datas[0].showTime}}</h3>
            <p>￥1280.00票档 x 1张</p>
        </div>
        <div class="box3">
            <i class="fa fa-exclamation-circle"></i><span>不支持退</span>
            <i class="fa fa-check-circle-o"></i><span>可开发票</span>
        </div>
     </div>
     <div class="cont">
          <div class="c1">
            <span class="s1">实名观演人 </span>
            <span class="s2"> 仅需选择一位; 入场需要携带对应证件</span>
            <button>新增</button>
          </div>
          <div class="c2">
              <p class="p1">配送方式</p>
              <p class="p2">快递</p>
              <span class="s1">新增收货地址</span><span class="s2">></span>
          </div>
          <div class="c3">
            <p  class="p1">支付方式</p>
            <div class="b">
                 <img src="https://gw.alicdn.com/tfs/TB1_bcpdStYBeNjSspkXXbU8VXa-64-64.png" alt="">
                <span class="s1">支付宝</span>
                <i class="fa fa-dot-circle-o" aria-hidden="true"></i>
            </div>
          </div>
     </div>
     <div class="foot">
       <div class="box1">
          <img src="https://gw.alicdn.com/tfs/TB1aHeZlW61gK0jSZFlXXXDKFXa-200-200.png_36x36q90_.webp" alt="">
          <span class="s1">同意</span>
          <span class="s2">《大麦网订票服务条款》</span>

       </div>
        <div class="ft">
            
          <div class="price">￥999</div>
          <a href="https://www.alipay.com/" class="bt">提交订单</a>

          <!-- <router-view></router-view> -->

      
        </div>
     </div>
  </div>
  </div>
</template>

<script>
export default {
      data(){
        return{
          datas:[],
          num:[]
        }
      },
      created(){
        this.$http.get(`/api/sk/more`,{      
      
        }).then(res=>{
        // console.log(res.data.data.object_list)
        // console.log(this.$route.params.id)
        for(var i = 0;i<res.data.data.object_list.length-1;i++){
            if(res.data.data.object_list[i].id ==this.$route.params.id){
            this.datas.push(res.data.data.object_list[i])
            // console.log(this.datas)
            
            }
           
            
        }
         this.num=JSON.parse(localStorage.good)
            console.log(this.num)
        })
    },
    methods:{
      
    }
    

}
</script>

<style lang="scss">
  .car{
    width: 100%;
    .head{
      height: 2.2rem;
      position: absolute;
      width: 100%;
      background-color: rgb(222, 63, 100);
      overflow: hidden;
      color: #fff;
      .box1,.box2,.box3{
        width: 90%;
        height: 0.5rem;
        margin:0.1rem 0.2rem 0.2rem 0.2rem;
      }
      .box1{
        border-bottom: 0.01rem solid rgb(228, 101, 131);;
        height: 0.7rem;
        h3{
          font-weight: 550;
          font-size: 0.17rem;
        }
      }
      .box2{
        border-bottom: 0.01rem solid rgb(228, 101, 131);;
        height: 0.66rem;
      }
      .box3{
        height: 0.1rem;
        line-height: 0.05rem;
        margin-top:0.0rem;
        font-size: 0.12rem;
        span{
          display: inline-block;
          width:0.7rem;
          // margin-left: 0.2rem;
        }
      }
    }
    .cont{
      height: 4.55rem;
      background: #fff;
      width: 100%;
      border-radius: 0.12rem 0.12rem 0 0;
      position: absolute;
      z-index: 2;
      top: 2.1rem;
      .c1{
        width: 90%;
        height: 0.5rem;
        margin:0.1rem 0.2rem 0.2rem 0.2rem;
        border-bottom: .5px solid #e8e8e8;
        border-top: .5px solid #e8e8e8;
        font-size: 0.12rem;
        line-height: 0.4rem;
        button{
          margin-left: 0.15rem;
          background-color: rgb(255, 40, 105);
          box-shadow: rgb(255, 40, 105) 0px 0px 0px 1px;
          border-radius: 0.12rem;
          border: 0;
          color: #fff;
          width: 0.5rem;
        }
        .s2{
          color: rgb(255, 53, 122);
        }
        .s3{
          text-align: right;
        }
      }
      .c2{
        width: 90%;
        margin:0 0 0 0.2rem;
        height: 1rem;
        color: #000;
        font-size: 0.12rem;
        border-bottom: .5px solid #e8e8e8;
        .p2{
          font-size: 0.16rem;
          margin: 0.12rem 0;
        }
        .s1{
          color: rgb(255, 53, 122);
        }
        .s2{
          text-align: right;
          width: 2.5rem;
          display: inline-block;
          color: #999;
        }
      }
      .c3{
        width: 90%;
        margin:0 0 0 0.2rem;
        height: 1rem;
        color: #000;
        font-size: 0.12rem;
        img{
          width: 0.25rem;
          height: 0.25rem;float: left;
        }
        .p1{
          margin: 0.14rem 0;
        }
        .s1{
          display: inline-block;
          width: 2.6rem;
          height: 1.2rem;
          margin-left: 0.2rem

        }
        i{
          font-size: 0.15rem;
          color: rgb(255, 53, 122);
          font-weight:400;
        }
      }
    }
    .foot{
      .box1{
        width: 92%;
        height: 0.8rem;
        position: absolute;
        z-index: 11;
        margin-left: 0.12rem;
        top:5.85rem;
        img{
          width: 0.14rem;
          height: 0.14rem;
          float: left;
          margin-top: 0.02rem;
          margin-right: 0.12rem;
        }
        .s1{
           color: rgb(156, 156, 165);
           font-size: 0.12rem;

        }
        .s2{
          color: rgb(48, 174, 255);
          font-size: 0.12rem;
        }
        .myCheck{
          color:  #ff2d79;
        }
        
      }
      .ft{
            width: 92%;
            position: absolute;
            z-index: 11;
            top: 5.7rem;
            display: flex;
            margin-left: 0.12rem;
            justify-content: space-between;
            .price{
                width: 0.8rem;
                height: 0.5rem;
                float: left;
                font-size: 0.20rem;
                margin:0.32rem 0.12rem 0 0 ;
                line-height: 0.5rem;
                color: #ff2d79;
            }
            .bt{
                width: 1rem;
                height: 0.4rem;
                margin:0.32rem 0.12rem 0 0 ;
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
  }
</style>