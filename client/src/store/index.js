import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: ''
  },
  mutations: {
    SOCKET_test (state, payload) {
      state.test = payload
    },
    SOCKET_connect (state) {
      console.log('Connect')
    }
  },
  actions: {
  },
  modules: {
  }
})
