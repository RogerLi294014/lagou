import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import "./stylesheets/main.scss"
Vue.config.productionTip = false

import { Picker } from 'mint-ui';
import { Popup } from 'mint-ui';
Vue.component("mt-picker", Picker);
Vue.component("mt-popup", Popup);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
