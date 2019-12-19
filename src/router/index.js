import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import login from "./login"
import home from "./home"
const router = new VueRouter({
    routes:[
      login,home
    ]
})

export default router
