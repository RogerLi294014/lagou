<template>
    <div class="sing-detail">
        <div class="main">
            <!-- 遮罩，点击时候出现 -->
            <div class="zhezhao"></div>
            <div class="content">
                <div class="top">
                    <div class="bg-pic">
                        <img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN01Ezm12J2GdSDgGLvXd_!!2251059038.jpg_400x400" alt="">
                    </div>
                    <div class="top-main">
                        <div class="sl-pic">
                            <img src="https://img.alicdn.com/bao/uploaded/https://img.alicdn.com/imgextra/i2/2251059038/O1CN01Ezm12J2GdSDgGLvXd_!!2251059038.jpg_400x400" alt="">
                        </div>
                        <div class="top-title">
                            <p>【广州】202020当我们谈论爱情-梁静茹世界巡回演唱会广州站</p>
                        </div>
                        <div class="top-two">
                            <p class="one">总票代</p>
                            <p class="two">流行</p>
                        </div>
                    </div>
                    <div class="circle">
                        <p class="money">￥399-￥1299</p>
                    </div>
                </div>
                <div>
                    
                </div>
                 <mt-cell id="info" title="本产品为预售产品，正式开票后将第一时间为您配票" label="重要通知：不支持退;不支持选座;快递票" is-link to="">
                </mt-cell>
                    <mt-cell title="上海站 2020.02.29 周六 19:00" is-link to="">
                </mt-cell>
                   <mt-cell title="南宁市 | 广西体育中西体育场" label="广西壮族自治区南宁市良庆区">
                </mt-cell>
                
            </div>
            
           <listC class="listc"></listC>
        </div>
    </div>
</template>

<script>
import listC from "./listC"

export default {
    components:{
        listC
    },
    
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
}   

    .main{
        //遮罩，点击时候出现
        .zhezhao{
            width: 100%;
            height: 5rem;
            position: absolute;
            z-index: 5;
            background: #000;
            opacity: 0.4;
        }
        width: 100%;
        .content{
            width: 100%;
            height: auto;
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
        .listC{
            position: absolute;
            top: 1.4rem;
            z-index: 10;
            
        }
    }
    #info .mint-cell-text{
        font-size: 0.13rem
    }

</style>




