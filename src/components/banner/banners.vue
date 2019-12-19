<template>
  <div class="swiper-container banners" id="banners">
    <div class="swiper-wrapper">
        <div 
            class="swiper-slide"
            v-for = "banner in banners"
            :key="banner.zmid"
            >
            <img class="bimg" :src="banner.verticalPic" alt="">
            <p class="title">{{banner.name}}</p>
            <p>￥{{banner.priceLow}}起</p>
        </div>
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
           console.log(this.page)
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
           console.log(this.page)
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
        height: 7.37333rem;
        background-size: contain;
        display: inline-block;
        width: 7rem;
        height: 20rem;
        flex-direction: column;
        margin-top: 1.5rem;
        color:#000;
        .title{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 1rem 0 0.2rem;
            width: 9.3rem;
            font-size: 0.9rem;
            font-weight: 550;
        }
        p{
            width: 9.3rem;
        }
        .bimg{
            background-repeat: no-repeat;
            display: inline-block;
            width: 9.3rem;
            height: 13rem;
            border-radius: .25rem;
        }
    }
    
</style>