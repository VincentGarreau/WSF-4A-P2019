import Vue from 'vue'
import Vuex from 'vuex'

import store from './store'
import router from './router'

import App from './App.vue'

Vue.use(Vuex)

const app = new Vue({
  router,
  store,
  ...App
}).$mount('#app')
