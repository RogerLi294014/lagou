import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import state from "./state"
export default new Vuex.Store({
  state,//在组建里免使用共享状态
  mutations: {
    increment(state,navs){
      state.key=navs.type
      state.sum= state.key*state.num
    },
    addnum(state){
      state.num++ 
      state.sum = state.key*state.num;
    },
    jnum(state){
      if(!state.num<=0){
          state.num--;
          state.sum = state.key*state.num;

      }
      
          
},
  },
})
