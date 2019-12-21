import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import home from "./home"
import info from "./info"
import car from "./car"
import login from './login'
import mine from './mine'
import list from './list'

const router = new VueRouter({
  
  routes:[
    
    {path:"/",redirect:"/home"},
    home,info,car,login,mine,list,
    // {path:"/404",component:()=>import("@/views/notfound")},
    // {path:"*",redirect:"/404"}
  ]
  
      
      
      
})

export default router
