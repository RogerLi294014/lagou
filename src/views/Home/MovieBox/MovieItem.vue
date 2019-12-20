<template>
  <div class="movie-item"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >
      <div 
        v-lazy="movie"
        class="list"
        v-for="movie in movies"
        :key="movie.id"
        >
          <img width="100" height="130" :src="movie.verticalPic" alt="">
          <div class="right">
            <h3>{{movie.name}}</h3>
            <div class="title">
                {{movie.logicAddress}}{{movie.showTime}}/{{movie.venueName}}
            </div>
            <div class="price">￥399-1299</div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            movies:null,
            hasMore:true//代表有更多数据
        }
    },
    created(){
        
    },
    methods:{
        loadMore(){
            console.log(1111112222233333)
            this.getMovies()
        },
        getMovies(){
            this.$http.get("/api/sk/more ").then(res=>{
          
                this.movies = res.data.data.object_list
            console.log(this.movies)
            })
        }
    }
}
</script>

<style lang="scss">
    .movie-item{
        // background: #eee;
        .list{
            width: 100%;
            height:1.3rem ;
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