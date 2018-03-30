<template>

  <li class="item">
    <a :href="post.redirect_url" target="_blank">
      <figure class="thumb" :style="{ backgroundImage: `url(${post.screenshot_url['300px']})` }"></figure>
      <div class="infos">
        <h2 class="infos-name">{{ post.name }}</h2>
        <span class="votes-count">{{ post.votes_count }} upvotes</span>
        <h3 class="tagline">{{ post.tagline }}</h3>
      </div>
    </a>
  </li>

</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="stylus" src="./PostsListItem.styl" scoped></style>