import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import home from "./home"
import info from "./info"
const router = new VueRouter({
  
  routes:[
    {path:"/",redirect:"/home"},
    home,info
  ]
})

export default router
