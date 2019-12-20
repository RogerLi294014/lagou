<template>
    <div :class="['titlebox',{fixedTop:isFixed}]">
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
            isFixed:false,
            type:1,
            navs:[
                {id:1,type:"全部分类▼"},
                {id:2,type:"全部时间▼"},
                {id:3,type:"推荐排序▼"},
                {id:4,type:"距离最近"}

            ]
        }
    },
    created(){
        window.addEventListener("scroll",e=>{
            let sTop = document.documentElement.scrollTop||document.body.scrollTop;
            console.log(sTop)
            if(sTop>=300){
                this.isFixed = true
            }else{
                 this.isFixed = false
            }
        })
    },
     methods:{
        change(){
            this.$parent.$refs.mtm.isFixed=this.isFixed
    }
  },
}
</script>

<style lang="scss">
    .titlebox{
        width: 100%;
        height: 0.6rem;
        background: #fff;
        display: flex;
        position: relative;
        &.fixedTop{
            position: fixed;
            top: 0.5rem;
            left: 0;
            width: 100%;
            z-index: 3;
        }
        .title{
            display: flex;
            margin: 0 0.12rem;
            width: 100%;
            height: 0.6rem;
            line-height: 0.6rem;
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