import Vue from 'vue'
import VueRouter from 'vue-router'
import list from "./list"
import into from "./into"
Vue.use(VueRouter)


const router = new VueRouter({
  routes:[
    list,into
  ]
})

export default router
