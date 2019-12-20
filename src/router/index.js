import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import login from "./login"
import home from "./home"
import mine from "./mine"
const router = new VueRouter({
    routes:[
      login,home,mine
    ]
})

export default router
