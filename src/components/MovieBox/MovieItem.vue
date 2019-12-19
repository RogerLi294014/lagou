<template>
  <div class="movie-item">
      <div 
        class="list"
        v-for="movie in movies"
        :key="movie.id"
        >
          <img width="95" height="120" :src="movie.verticalPic" alt="">
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
            movies:null
        }
    },
    created(){
        this.$http.get("/api/sk/more ").then(res=>{
          
            this.movies = res.data.data.object_list
           console.log(this.movies)
        })
    }
}
</script>

<style lang="scss">
    .movie-item{
        background: #eee;
        .list{
            width: 100%;
            height:7.5rem ;
            background: pink;
            margin: 1rem 0;
        .right{
            width: 15rem;
            height: 7.5rem;
            float: left;
            margin-left: 0.9rem;
                h3{
                font-size: 1rem;
                color: #000;
                font-weight: 550
                }
                .title{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin: .2rem;
                    font-size: 0.75rem;
                }
                .price{
                    color: #ff1268;
                    margin-top: 2.3rem;
                }
        }
        img{
            margin-left: 1.1rem;
            float: left;
            border-radius: .3rem
            }
        }
    }
    
</style>