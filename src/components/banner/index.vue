<template>
   <div class="swiper-container">
        <div  class="swiper-wrapper">
            <div class="swiper-slide"          
            v-for="bannerData in bannerDatas"
            :key="bannerData.id"           
            >
                <router-link :to="{name:bannerData.name}" active-class="active">
                    {{bannerData.title}}
                </router-link>             
             </div>               
        </div>
         <router-view></router-view>    
    </div>   
</template>

<script>
import Swiper from "swiper"
export default {
    data(){
        return{
            bannerDatas:[
                {id:"1",title:"全部",name:"all"},
                {id:"2",title:"演唱会",name:"concert"},
                {id:"3",title:"话剧歌剧",name:"opera"},
                {id:"4",title:"音乐会",name:"music"},
                {id:"5",title:"曲苑杂坛",name:"quYuan"},
                {id:"6",title:"舞蹈芭蕾",name:"dance"},
                {id:"7",title:"体育比赛",name:"sports"},
                {id:"8",title:"儿童亲子",name:"child"},
                {id:"9",title:"展览休闲",name:"relaxation"},
                {id:"10",title:"二次元",name:"cospa"},
                {id:"11",title:"旅游展览",name:"travel"}]
        }
    },
  
    computed:{
    },
    mounted(){
        this.$http.get("/api/sk/more",{
            params:{
              
            }
        }).then(res=>{
            
            this.banners = res.data.data.object_list
            this.$nextTick(()=>{
               var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    slidesPerView: 4,
                    spaceBetween: 50,
                
                });
            })
        })
    }
}
</script>

<style lang="scss">
    .swiper-container {
        width: 100%;
        height: 100%;
      
        .swiper-wrapper{
            position:fixed;
            top:0;
            left:0;
            margin-bottom:.12rem;
            height: 0.55rem;
            width: auto;
            background-color: pink;
            padding-right:2rem;
        }
         .swiper-slide {
            // margin:0 16px;
            height: 0.45rem;
            line-height: 0.45rem;
            text-align: center;
            // font-size: 18px;
            // background: #fff;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
            touch-action: none;
        }
    }
     .active{
            border-bottom: 2px solid red;
        }
  
</style>