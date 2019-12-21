<template>
    <div class="mine">
        <div class="head">
            <p>{{$route.params.id}}</p>
        </div>
        <div class="top">
            <li v-for="li in top" class="topLi"
            :key="li.id"
            >{{li.title}}
                <span>›</span>
            </li>
            
        </div>
        <div class="middle">
            <li class="topLi">我的关注</li>
        </div>
        <div class="bottom">
            <li v-for="li in bottom" class="topLi"
            :key="li.id"
            >{{li.title}}</li>
        </div>
        <div class="logOut">退出登录</div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            top:[{icon:"",title:"会员中心",id:1},{title:"我的订单",id:2},{title:"优惠券",id:3},{title:"我的票",id:4}],
            bottom:[{title:"收货地址",id:1},{title:"常用观演人",id:2},{title:"实名认证",id:3},{title:"意见反馈",id:4},{title:"客服电话",id:5}]
        }
    }
}
</script>

<style lang="scss">
.mine{
    background: #e7e7e7;
}
.head{
    top:0;
    position: fixed;
    width:100%;
    height: .8rem;
    background: #ff1268;
    p{
        text-align: center;
        color:#fff;
        line-height: .8rem;
    }
}

.top,.middle{
    margin-top:.1rem;
    padding-left: .1rem;
    background: #fff;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    li:last-child{
        border-bottom:0;
    }
    span{
        flex:1;
    }
}
.middle{
    margin-bottom:.1rem;
}
.top{
    margin-top:.8rem;
}
.bottom{
    background: #fff;
    padding-left: .1rem;
}

.topLi{
        padding-left: .1rem;
        display: flex;
        border-bottom: 1px solid #e7e7e7;
        height:.55rem;
        line-height:.55rem;
        text-align: right;
        padding-right:12px;
        background: #fff;
}
.logOut{
    display: block;
    width: 100%;
    height: 0.5rem;
    line-height: .5rem;
    text-align: center;
    border: 1px solid #e7e7e7;
    background-color: #fff;
    font-size: .15rem;
    color: #666;
    margin-top:.1rem;
}
</style>