<template>
    <div class="sing-detail">
         <img v-if="!datas" src="../../assets/loading.gif" alt="">
        <div v-else class="main">
            <!-- 遮罩，点击时候出现 -->
           <div class="zhezhao" v-if="isshow"></div>
            <div class="content">
                <div class="top">
                    <div class="bg-pic">
                        <img :src="datas.verticalPic" alt="">
                    </div>
                    <div class="top-main">
                        <div class="sl-pic">
                            <img :src="datas.verticalPic" alt="">
                        </div>
                        <div class="top-title">
                            <p>{{datas.name}}</p>
                        </div>
                        <div class="top-two">
                            <p class="one">总票代</p>
                            <p class="two">流行</p>
                        </div>
                    </div>
                    <div class="circle">
                        <p class="money">{{datas.priceStr}}</p>
                    </div>
                </div>
                <div class="silver">
                    <div class="content">
                     <mt-cell id="info" title="本产品为预售产品，正式开票后将第一时间为您配票" label="重要通知：不支持退;不支持选座;快递票" is-link to="">
                </mt-cell>
                    <mt-cell :title="datas.showTime" is-link @click="isshow=!isshow">
                </mt-cell>
                   <mt-cell :title="datas.venueName" :label="datas.venueCity">
                </mt-cell>
                 <div class="block">
                        <mt-cell title="360元超值演出红包" is-link @click="isshow=!isshow"></mt-cell>
                    </div>
                    </div>
                   
                    <mt-cell class="actor" title="演职人员" :label="datas.actores">
 
                    </mt-cell>
                    <div class="intro">
                        <p>演出介绍</p>
                        <div>
                                202020 当我们谈论爱情 
                                When we talk about love 

                                「情歌天后-梁静茹-情歌本格派」 
                                20th Anniversary The world tour 

                                你和谁擦肩而过
                                你和谁又重逢相会

                                「梁静茹 X 梁静茹20周年世界巡回演唱会」 

                                在爱里 幸福与遗憾，热恋与失去， 
                                在情歌里 当我们谈论爱情，拾获爱情
                                202020 当我们谈论爱情 
                                When we talk about love 

                                「情歌天后-梁静茹-情歌本格派」 
                                20th Anniversary The world tour 

                                你和谁擦肩而过
                                你和谁又重逢相会

                                「梁静茹 X 梁静茹20周年世界巡回演唱会」 

                                在爱里 幸福与遗憾，热恋与失去， 
                                在情歌里 当我们谈论爱情，拾获爱情
                                202020 当我们谈论爱情 
                                When we talk about love 

                                「情歌天后-梁静茹-情歌本格派」 
                                20th Anniversary The world tour 

                                你和谁擦肩而过
                                你和谁又重逢相会

                                「梁静茹 X 梁静茹20周年世界巡回演唱会」 

                                在爱里 幸福与遗憾，热恋与失去， 
                                在情歌里 当我们谈论爱情，拾获爱情
                        </div>
                        <p>购票须知</p>
                        <i>限购规则</i>
                        <div>
                            每笔订单最多购买6张、每个用户最多购买6张
                        </div>
                        <i>我购买后是否可以退换票？</i>
                        <div>
                            票品为有价证券，非普通商品，其背后承载的文化服务具有时效性、稀缺性等特征，不支持退换。如您购票后无法正常观看，还请自行处理
                        </div>
                        <i>入场规则</i>
                        <div>
                            须携带纸质门票验票入场。
                        </div>
                    </div>
                    <div class="recommendation">
                        <p>为你推荐</p>
                         <div :class="['movie-item',{fiexd:isFixed}]"
                          v-infinite-scroll="loadMore"
                          infinite-scroll-disabled="loading"
                          infinite-scroll-distance="10"
                          @click="reload"
                            >
                         <router-link
                         tag="div"
                           :to="'/info/'+movie.id"
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
      </router-link>
  </div>
                    </div>
                </div>
                
                
            </div>
            <div class="bottom">
                <router-link tag="div" to="/"><p class="fa fa-home"></p>
                <p>大麦首页</p></router-link>
                <div><p class="fa fa-heart"></p>
                <p>想看</p></div>
                <div><p class="fa fa-list-alt"></p>
                <p>我的订单</p></div>
                <div class="button"><button @click="isshow=!isshow" >立即预订</button></div>
            </div>
            <div>

            </div>
            
           <listC class="listc" v-if="isshow" :show="show"></listC>
        </div>
    </div>
</template>

<script>
import listC from "./listC"
export default {
    components:{
        listC
    },
     data(){
        return{
            movies:null,
            hasMore:true,//代表有更多数据
            isFixed:false,
            isshow:false,
            datas:null
        }
    },
    created(){
        console.log(this.$route.params.id)
        this.$http.get(`/api/sk/movie_detail/${this.$route.params.id}`).then(res=>{
          
                this.datas = res.data
            
        })
    },
    methods:{
        loadMore(){
            
            this.getMovies()
        },
        show(){
           
                this.isshow=false
            },
        getMovies(){
            this.$http.get("/api/sk/more ").then(res=>{
          
                this.movies = res.data.data.object_list
            
            })
        },
        reload(){
            
           location.reload()
        }
    }
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
}   

    .main{
        //遮罩，点击时候出现
        height: 100%;
        position: scroll;
        margin-bottom: 0.8rem;
        .zhezhao{
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 5;
            background: #000;
            opacity: 0.4;
            
        }
        width: 100%;
        .content{
            width: 100%;
            height: 100%;
            
            .top{
                width: 100%;
                height: 1.51rem;
                position: relative;
                .bg-pic{
                    width: 100%;
                    height: 1.51rem;
                    overflow: hidden;
                    background-color: rgba(0,0,0,.4);
                    position: relative;
                    img{
                        width: 100%;
                        filter: saturate(.6) brightness(.9) blur(.33333rem) contrast(.9);
                    }
                }
                .top-main{
                    position: absolute;
                    top: 0;
                    margin: 0.14rem 0.21rem 0; 
                    display: flex;
                    .sl-pic{
                        z-index: 2;
                        img{
                            width: 0.98rem;
                            height: 1.37rem;
                            border: 0 solid #000;
                            border-radius: .16rem;
                        }
                    }
                    .top-title{
                        p{
                            font-size: 0.14rem;
                            font-family: PingFangSC-Medium;
                            color:#fff;
                            margin-bottom: .13333rem;
                        }
                    }
                    .top-two{
                        display: flex;
                        position: absolute;
                        left: 1rem;
                        top: 0.5rem;
                        p{
                            display: inline-block;
                             height: .18rem;
                             line-height: .18rem;
                             color: #fff;
                             font-size: .1rem;
                             border-radius: .13rem;
                             padding: 0 .08rem;
                             margin-right: .04rem;
                            border: 1px solid #fff
                        } 
                    }
                }
                .circle{
                    position: absolute;
                    top: 1.11rem;
                    width: 100%;
                    height: 0.4rem;
                    background-color:#fff;
                    border-radius: .14rem .14rem 0 0;
                    padding-top: 0.1rem;
                    .money{
                        position: absolute;
                        left: 1.3rem;
                        font-size: .16rem;
                        font-weight: 500;
                        color:#ff2869;
                    }
                }
            }
            
        }
        .actor{
            .mint-cell-label{
            color: #ff1268;
            font-size: 0.15rem;
            margin: 0.1rem;
            }
           

        }
        .listC{
            position: fixed;
            top: 1.4rem;
            z-index: 10;
            left: 0;
            
        }
    }
    .intro{
        background: white;
        margin: 0 0.1rem;
        p{
            font-weight: bolder;
            font-size: 0.15rem;

        }
        i{
            font-size: 0.13rem;
            font-weight: 600;
        }
    }
    #info .mint-cell-text{
        font-size: 0.13rem
    }
    .block{
        padding: 0.2rem 0;
        background:silver;
    }
    .silver{
        
        width: 100%;
        height: auto;
    }
    .bottom{
        width: 100%;
        height: 0.8rem;
        background: white;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        div{
            width: 15%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .button{
            width: 55%;
            button{
                background: #ff2869;
                width: 100%;
                    height: 0.6rem;
                    display: flex;
                    flex-direction: row;
                    color: #fff;
                    font-size: 0.21rem;
                    align-items: center;
                    justify-content: center;
                    border-radius: .29rem .29rem .29rem .025rem;
                    background-image: linear-gradient(90deg,#ff3299 1%,#ff4a72);
                    border:none;
            }
        }
    }
    .recommendation{
        p{
            font-size: 0.18rem;
            font-weight: bolder;
        }
    }
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




