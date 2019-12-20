import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import home from "./home"
import info from "./info"
import car from "./car"
const router = new VueRouter({
  
  routes:[
    {path:"/",redirect:"/home"},
    home,info,car
  ]
})

export default router
