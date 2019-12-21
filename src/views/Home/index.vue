
<template>
   <div class="home">
       <mainpage></mainpage>
       <banner></banner>
       <moviebox></moviebox>
   </div>
</template>

<script>
import banner from "./banner"
import moviebox from "./MovieBox"
import mainpage from "./mainpage"
export default {
    components:{
        banner,
        moviebox,
        mainpage
    }
}
</script>

<style>

</style>