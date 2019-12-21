<template>
  <div class="swiper-container banners" id="banners">
    <div class="swiper-wrapper">
        <router-link 
        tag="div"
            class="swiper-slide"
            v-for = "banner in banners"
            :key="banner.zmid"
            :to="'/info/'+banner.id"
            >
            <img class="bimg" :src="banner.verticalPic" alt="">
            <p class="title">{{banner.name}}</p>
            <p>￥{{banner.priceLow}}起</p>
        </router-link>
    </div>
  </div>
</template>

<script>//安装axios
import swiper from "swiper"
export default {
    data(){
        return {
            banners:[],
            page:1
        }
    },
    created(){
        this.$http.get("/api/sk/home/list",{
            params:{
                page:this.page
            }
        }).then(res=>{
           this.banners = res.data.data.object_list
           
           this.$nextTick(()=>{
               new swiper('.swiper-container', {
                    slidesPerView: 3,
                    spaceBetween: 125,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    });
           })

        })
    },
 watch: {
        page:function(){
        this.$http.get("/api/sk/home/list",{
            params:{
                page:this.page
            }
        }).then(res=>{
           this.banners = res.data.data.object_list
          
           this.$nextTick(()=>{
               new swiper('.swiper-container', {
                    slidesPerView: 3,
                    spaceBetween: 125,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    });
           })
           //实例化swiper
           
        })
    }
        }

}
</script>

<style lang="scss">
    .swiper-slide{
        width: 100%;
        height: 3.1rem;
        background-size: contain;
        display: inline-block;
        width: 4rem;
        flex-direction: column;
        margin-top: 0.2rem;
        color:#000;
        .title{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 0.12rem 0 0.02rem;
            width:1.5rem;
            font-size: 0.14rem;
            font-weight: 550;
        }
        p{
            width: 4rem;
        }
        .bimg{
            background-repeat: no-repeat;
            display: inline-block;
            width: 1.5rem;
            height: 2.2rem;
            border-radius: .05rem;
        }
    }
    
</style>