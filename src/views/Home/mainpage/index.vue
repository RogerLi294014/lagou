<template>
    <div class="home">
        <div class="homeHeader">
            <div class="country">
                <i class="iconfont couIcon">&#xe61e;</i>
                <i>全国</i>
            </div>
            <van-search placeholder="搜索明星、演出比赛、场馆" v-model="value" background="#f5f5f5"/>
            <i class="iconfont search">&#xe64d;</i>
            <router-link class="iconfont mine" to="/login">&#xe603;</router-link>
        </div>
        <div class="imgBox">
            <img src="//img.alicdn.com/tfs/TB1DQVikkL0gK0jSZFAXXcA9pXa-960-360.jpg_q60.jpg_.webp" alt="">
        </div>
        <ul class="damaiList clear">
            <router-link
            tag="li"
            to="/list"
            v-for="msg in msgList"
            :key="msg.id">
                <img :src="msg.imgSrc" alt="">
                <p>{{msg.title}}</p>
            </router-link>
        </ul>
        <div class="middleImg">
            <img src="//img.alicdn.com/tps/i4/TB1wLq8p7L0gK0jSZFAwu3A9pXa.png_q60.jpg_.webp" alt="">
        </div>
    </div>
</template>

<script>
import "@/stylesheets/iconfont/iconfont.css"
export default {
    data(){
        return{
            value:'',
            msgList:[
                {id:1,title:'演唱会',imgSrc:'//img.alicdn.com/tps/i4/TB1egGnRCzqK1RjSZFpwu1kSXXa.png_q80.jpg_.webp'},
                {id:2,title:'歌剧话剧',imgSrc:'//img.alicdn.com/tps/i4/TB1XNKjRrvpK1RjSZPiwu2mwXXa.png_q80.jpg_.webp'},
                {id:3,title:'音乐会',imgSrc:'//img.alicdn.com/tps/i4/TB1LgakRxTpK1RjSZFKwu12wXXa.png_q80.jpg_.webp'},
                {id:4,title:'体育',imgSrc:'//img.alicdn.com/tps/i4/TB1iHqlRpYqK1RjSZLewu2XppXa.png_q80.jpg_.webp'},
                {id:5,title:'曲苑杂坛',imgSrc:'//img.alicdn.com/tps/i4/TB1gzigRrPpK1RjSZFFwu15PpXa.png_q80.jpg_.webp'},
                {id:6,title:'亲子',imgSrc:'//img.alicdn.com/tps/i4/TB17wecRzDpK1RjSZFrwu178VXa.png_q80.jpg_.webp'},
                {id:7,title:'展览休闲',imgSrc:'//img.alicdn.com/tps/i4/TB1Zw8MRCzqK1RjSZPcwu2TepXa.png_q80.jpg_.webp'},
                {id:8,title:'境外',imgSrc:'//img.alicdn.com/tps/i4/TB1pLiuRwHqK1RjSZFkwu0.WFXa.png_q80.jpg_.webp'},
            ]
        }
    },
    methods:{

    }
}
</script>

<style lang="scss">
.weekday{
    justify-content: space-between;
    margin: 0 .24rem .32rem;
    color: #999;
    font-size: .13rem;
    display: flex;
}
.performTitle{
    display: flex;
    justify-content: space-between;
    margin: .165rem .12rem .12rem;
    font-size: .16rem;
    font-weight: 700;
    color:#000;
    span:nth-child(2){
        font-size: .12rem;
        color: #999;
        font-weight: 400;
    }
}
    .homeHeader{
        height: 0.5rem;
        background: #f5f5f5;
        display: flex;
        line-height:0.5rem;
        position: relative;
        position: fixed;
            top: 0;
            left: 0;
            z-index: 30;
        .country{
            font-size: 0.05rem;
            margin: 0 .12rem;
            color: #222;
            
            i:nth-child(2){
                font-size: .12rem;
                
            }
            .couIcon{
                margin-right:.05rem;
            }
        }
        .search{
            margin-right: .12rem;
            color: #888;
            font-size: .2rem;
            position:absolute;
            left:0.7rem;
        }
        input{
            align-items: center;
            height: .3rem;
            border-radius: .2rem;
            background: #fff;
            color: #999;
            border:none;
            padding-left:45px;
            width:2.5rem;
            font-size: .15rem;
        }
        
        .mine{
            font-size: .2rem;
            margin: 0 .2rem 0 .16rem;
        }
    }
    .imgBox{
        width: 100%;
        height: 1.4rem;
        overflow: hidden;
        margin-top: 0.5rem;
        img{
            width:100%;
        }
    }

.damaiList{
    background: #fff;
    padding: .15rem 0 .12rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    li{
        float:left;
        display: block;
        width: 25%;
        margin-bottom: .1rem;
        text-align: center;
        img{
            width: .32rem;
            height: .32rem;
            margin: 0 auto;
            display: block;
            background-size: auto 100%;
            background-position: center;
            background-repeat: no-repeat;
        }
        p{
            padding-top: .04rem;
            font-size: .12rem;
            color: #222;
        }
    }
    
}
.middleImg{
    img{
        display: block;
        width: 100%;
        height: 1.2rem;
    }
    
}
</style>