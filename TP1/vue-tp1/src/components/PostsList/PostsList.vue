<!-- HTML -->
<template>
  <div class="wrapper">

    <div class="posts-list-filters">
    </div>

    <ul class="posts-list-stats">
    </ul>

    <ul class="posts-list">
    </ul>

  </div>
</template>

<!-- JS -->
<script>

// Import de certaines librairies nécessaires dans ce composant
import axios from 'axios'
import { range } from 'lodash'

// Import du composant PostsListItem
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
    getPosts () {
      // Utilisez axios pour récupérer les posts de l'API ProductHunt
      // Variable à modifier : this.posts
      console.log('getPosts...')
    },

    countStats () {
      // Appeler cette méthode pour calculer les stats à chaque fois qu'on récupère les posts
      console.log('countStats...')
    },

    selectDaysLabel (day) {
      // Retourne "Today", "Yesterday", ou "X days ago" en fonction de "day"
      let label
      if (day === 0) label = 'Today'
      else if (day === 1) label = 'Yesterday'
      else label = `${day} days ago`
      return label
    }
  }

}

</script>

<!-- CSS -->
<style lang="stylus" src="./PostsList.styl" scoped></style>
