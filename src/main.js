import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入main.scss文件
import "./stylesheets/main.scss"
//轮播图
import "swiper/css/swiper.min.css"
//引入swiper.min.css文件
Vue.config.productionTip = false
//引入axios可以进行异步请求
import axios from "axios"
//引入res
import "./modules/rem"
//引入图片懒加载
import { Lazyload,InfiniteScroll,Cell,Navbar, TabItem,Swipe, SwipeItem} from 'mint-ui';
import { Picker } from 'mint-ui';
import { Popup } from 'mint-ui';
import { Search } from 'vant';
import { Panel } from 'vant';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component("mt-swipe", Swipe);
Vue.component("mt-swipe-item", SwipeItem);
Vue.use(Search);
Vue.use(Panel);
Vue.component("mt-picker", Picker);
Vue.component("mt-popup", Popup);

//无限滚动
Vue.use(InfiniteScroll);
//懒加载
Vue.use(Lazyload);
//行间
Vue.component("mt-cell",Cell);

Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
