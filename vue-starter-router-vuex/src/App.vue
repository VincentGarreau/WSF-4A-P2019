<!-- HTML -->
<template>
<div>
  <!-- VueRouter -->
  <ul>
    <li>
      <router-link :to="{ path: '/' }">Home</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'contact' }">Contact</router-link>
    </li>
  </ul>
  <router-view></router-view>

  <!-- Vuex -->
  <button @click="setIncrement(Math.random() * 100)">Click</button>
  <span>{{ count }}</span>
</div>
</template>

<!-- Javascript -->
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  methods: {
    ...mapActions([
      'setIncrement'
    ])
  }
}
</script>

<!-- Style -->
<style lang="stylus" src="./App.styl"/>
