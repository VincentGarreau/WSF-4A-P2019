import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count (state) {
      return state.count
    }
  },
  mutations: {
    increment (state, value) {
      state.count = value
    }
  },
  actions: {
    setIncrement ({ commit }, value) {
      commit('increment', value)
    },
  }
})
