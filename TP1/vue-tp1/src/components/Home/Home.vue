<!-- HTML -->
<template>
  <div>

    <div class="app-header">
      <h1 class="app-title">ProductHunt</h1>
      <p class="app-tagline">The best new products, every day</p>
    </div>

    <PostsList/>

  </div>
</template>

<!-- JS -->
<script>

// Import du composant PollsList
import PostsList from '../PostsList/PostsList.vue'

export default {
  components: {
    PostsList
  }
}

</script>

<!-- CSS -->
<style lang="stylus" src="./Home.styl" scoped></style>
