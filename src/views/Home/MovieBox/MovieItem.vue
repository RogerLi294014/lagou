<template>
  <div>
      <!-- <img v-if="!movies" src="@/assets/loading.gif" alt=""> -->
  <div :class="['movie-item',{fiexd:isFixed}]"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >
      <router-link
      tag="div"
        v-lazy="movie"
        class="list"
        v-for="movie in movies"
        :key="movie.id"
        :to="'/info/'+movie.id"
        >
          <img width="100" height="130" :src="movie.verticalPic" alt="">
          <div class="right">
            <h3>{{movie.name}}</h3>
            <div class="title">
                {{movie.logicAddress}}{{movie.showTime}}/{{movie.venueName}}
            </div>
            <div class="price">￥399-1299</div>

          </div>
      </router-link>
  </div>
  </div>
</template>

<script>
import { watch } from 'fs'
export default {
    data(){
        return{
            movies:null,
            hasMore:true,//代表有更多数据
            isFixed:false
        }
    },
    created(){
        
    },
    methods:{
        loadMore(){
            
            this.getMovies()
        },
        getMovies(){
            this.$http.get("/api/sk/more ").then(res=>{
          
                this.movies = res.data.data.object_list
            
            })
        }
    },
    watch:{
        isFixed:function(){
              window.addEventListener("scroll",e=>{
                let sTop = document.documentElement.scrollTop||document.body.scrollTop;
               
              
                this.isFixed = this.isFixed
               
            })
        }
    }
}
</script>

<style lang="scss">
    .movie-item{
        // background: #eee;
        &.fixedBox{
            margin-top: 1.1rem;     
        }
        .list{
            width: 100%;
            height:1.3rem;
            // background: pink;
            margin: 0.17rem 0;
        .right{
            width: 2.3rem;
            height: 1.3rem;
            float: left;
            margin-left: 0.15rem;
                h3{
                font-size: 0.16rem;
                color: #000;
                font-weight: 550 
                }
                .title{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin: .04rem;
                    font-size: 0.12rem;
                }
                .price{
                    color: #ff1268;
                    margin-top: 0.45rem;
                }
        }
        img{
            margin-left: 0.12rem;
            float: left;
            }
        }
    }
    
</style>