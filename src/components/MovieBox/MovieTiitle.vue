<template>
    <div class="titlebox">
        <div class="title">
            <span>全部分类</span>
            <span>全部时间</span>
            <span>推荐排序</span>
            <span>距离最近</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .titlebox{
        width: 100%;
        height: 2rem;
        background: yellowgreen;
        display: flex;
        .title{
            display: flex;
            margin: 0 1rem;
            width: 100%;
            height: 2rem;
            justify-content: space-between;
        }
    }
</style>