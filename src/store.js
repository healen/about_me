import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rightShow:false
  },
  mutations: {
    CHANGE_RIGHT_SHOW(state,bool){
      state.rightShow = bool
    }

  },
  actions: {

  }
})
