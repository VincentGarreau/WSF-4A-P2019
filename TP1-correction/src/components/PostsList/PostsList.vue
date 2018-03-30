<template>
  <div class="wrapper">

    <div class="posts-list-filters">
      <select v-model="daysAgo" @change="getPosts()">
        <option v-for="(day, index) in days" :key="index" :value="day">{{ selectDaysLabel(day) }}</option>
      </select>
    </div>

    <ul class="posts-list-stats">
      <li class="posts-list-stats-item" v-for="(stat, index) in stats" :key="index">
        <span>{{ stat.count }}</span>
        <span>{{ stat.label }}</span>
      </li>
    </ul>

    <ul class="posts-list">
      <PostsListItem v-for="(post, index) in posts" :key="index" :post="post"/>
    </ul>

  </div>
</template>

<script>

import axios from 'axios'
import { range } from 'lodash'
import PostsListItem from '../PostsListItem/PostsListItem.vue'

export default {

  components: {
    PostsListItem
  },

  data() {
    return {
      posts: null,
      daysAgo: 0,
      days: range(31),
      stats: {
        posts: {
          count: 0,
          label: 'Posts'
        },
        votes: {
          count: 0,
          label: 'Votes'
        },
        comments: {
          count: 0,
          label: 'Comments'
        },
        makers: {
          count: 0,
          label: 'Makers'
        }
      }
    }
  },

  created() {

    this.getPosts()

  },

  methods: {

    getPosts() {
      axios.get('posts', { params: { days_ago: this.daysAgo } })
        .then((response) => {
          console.warn('response', response)
          this.posts = response.data.posts
          this.countStats()
        })
    },

    selectDaysLabel( day) {
      let label
      if (day === 0) label = 'Today'
      else if (day === 1) label = 'Yesterday'
      else label = `${day} days ago`
      return label
    },

    countStats () {
      this.stats.votes.count = 0
      this.stats.comments.count = 0
      this.stats.makers.count = 0
      this.stats.posts.count = this.posts.length
      return this.posts.forEach(post => {
        this.stats.votes.count += post.votes_count
        this.stats.comments.count += post.comments_count
        this.stats.makers.count += post.makers.length
      })
    }

  }

}

</script>

<style lang="stylus" src="./PostsList.styl" scoped></style>
