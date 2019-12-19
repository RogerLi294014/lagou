import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import banner from "./banner"
const router = new VueRouter({
  routes:[
    banner,
  ]
})

export default router
