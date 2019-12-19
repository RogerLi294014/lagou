import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component:() => import('../views/home')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
