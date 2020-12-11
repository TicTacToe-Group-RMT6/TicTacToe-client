import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: '',
    username: '',
    players: [],
    room: '',
    rooms: []
  },
  mutations: {
    SOCKET_test (state, payload) {
      state.test = payload
    },
    SOCKET_connect (state) {
      console.log('Connect')
    },
    SOCKET_giveUsername (state, username) {
      state.username = username
      state.players.push(username)
      console.log(state.username, '<<< username')
      console.log(state.players, '<<<< players')
    },
    SOCKET_addplayers (state, otherusername) {
      console.log('addplayers')
      state.players.push(otherusername)
    },
    SOCKET_updateCurrRoom (state, payload) {
      console.log('update curr room')
      console.log(payload, '<<<< payload')
      state.room = payload
      console.log(state.room)
      router.push({ name: 'About' })
    },
    SOCKET_isFull (state, room) {
      state.rooms.forEach(room => {
        room.isFull = true
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
