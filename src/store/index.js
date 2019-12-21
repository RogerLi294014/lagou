import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import state from "./state"
export default new Vuex.Store({
  state,//在组建里免使用共享状态
  mutations: {
    increment(state){
      state.num++
    }
  },
})
