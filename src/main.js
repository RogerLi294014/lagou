import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import '../modules/rem'
import "./style/main.scss"
import "swiper/css/swiper.min.css"
import { Swipe, SwipeItem } from 'mint-ui';
import { Lazyload } from 'mint-ui';

Vue.use(Lazyload);
Vue.component("mt-swipe", Swipe);
Vue.component("mt-swipe-item", SwipeItem);
Vue.prototype.$http = axios; 
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
