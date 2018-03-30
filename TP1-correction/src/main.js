// On importe Vue
import Vue from 'vue'

// On importe axios
import axios from 'axios'

// On importe le composant Home
import Home from './components/Home/Home.vue'

// On configure axios
axios.defaults.baseURL = 'https://api.producthunt.com/v1/'
axios.defaults.headers.common.Authorization = 'Bearer fb8e81d5b45c4699322db540324059bfe9bccb124435fe25bdb4aea39e9dfe8f'

require('./assets/css/main.styl')

// On initialise l'application
new Vue({
  el: '#app',
  render: h => h(Home)
})
