<template>
    <div class="titlebox">
        <div class="title">
            <span 
                v-for="nav in navs"
                :key="nav.id"
                :class="{active:type===nav.id}"
                @click="type=nav.id"
            >
            {{nav.type}}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            type:1,
            navs:[
                {id:1,type:"全部分类▼"},
                {id:2,type:"全部时间▼"},
                {id:3,type:"推荐排序▼"},
                {id:4,type:"距离最近"}

            ]
        }
    }
}
</script>

<style lang="scss">
    .titlebox{
        width: 100%;
        height: 0.62rem;
        // background: yellowgreen;
        display: flex;
        position: relative;
        .title{
            display: flex;
            margin: 0 0.12rem;
            width: 100%;
            height: 0.62rem;
            line-height: 0.62rem;
            justify-content: space-between;
            position: relative;
            // background: rosybrown;
            color: #aaa;
            .active{
                color:#ff1268
            }
        }
    }
</style>