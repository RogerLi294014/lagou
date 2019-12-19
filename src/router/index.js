import Vue from 'vue'
import VueRouter from 'vue-router'
import list from "./list"

Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    list
  ]
})

export default router
