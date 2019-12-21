<template>
  <div>{{this.$route.params.id}}</div>
</template>

<script>
import axios from "axios"
export default {
  mounted(){
    this.$http.get("/api/sk/more",{      
      
    }).then(res=>{
     
    console.log(this.$route.params.id)
    })
  }
}
</script>

<style>

</style>