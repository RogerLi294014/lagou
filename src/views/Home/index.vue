<template>
    <div class="home">
        <div class="homeHeader">
            <div class="country">
                <i class="iconfont couIcon">&#xe61e;</i>
                <i>全国</i>
            </div>
            <van-search placeholder="搜索明星、演出比赛、场馆" v-model="value" background="#f5f5f5"/>
            <i class="iconfont search">&#xe64d;</i>
            <i class="iconfont mine">&#xe603;</i>
        </div>
        <div class="imgBox">
            <img src="//img.alicdn.com/tfs/TB1DQVikkL0gK0jSZFAXXcA9pXa-960-360.jpg_q60.jpg_.webp" alt="">
        </div>
        <ul class="damaiList">
            <li
            v-for="msg in msgList"
            :key="msg.id">
                <img :src="msg.imgSrc" alt="">
                <p>{{msg.title}}</p>
            </li>
        </ul>
        
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
    .homeHeader{
        height: 1.33333rem;
        background: #f5f5f5;
        display: flex;
        line-height:1.33333rem;
        position: relative;
        .country{
            font-size: .42667rem;
            margin: 0 .48rem;
            color: #222;
            i:nth-child(2){
                font-size: .42667rem;
                
            }
            .couIcon{
                margin-right:.1rem;
            }
        }
        .search{
            margin-right: .24rem;
            color: #888;
            font-size: .4rem;
            position:absolute;
            left:2.6rem;
        }
        input{
            align-items: center;
            height: .72rem;
            border-radius: .4rem;
            background: #fff;
            color: #999;
            border:none;
            padding-left:36px;
            width:6rem;
            font-size: .37333rem;
        }
        
        .mine{
            font-size: .64rem;
            margin: 0 .48rem 0 .32rem;
        }
    }
    .imgBox{
        width: 100%;
        height: 3.73333rem;
        overflow: hidden;
        img{
            width:100%;
        }
    }

.damaiList{
    background: #fff;
    padding: .48rem 0 .24rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    li{
        float:left;
        display: block;
        width: 25%;
        margin-bottom: .4rem;
        text-align: center;
        img{
            width: .85333rem;
            height: .85333rem;
            margin: 0 auto;
            display: block;
            background-size: auto 100%;
            background-position: center;
            background-repeat: no-repeat;
        }
        p{
            padding-top: .08rem;
            font-size: .32rem;
            color: #222;
        }
    }
    
}
</style>