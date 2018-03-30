// Step 1
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Step 2
import About from '@/components/About/About.vue'
import Contact from '@/components/Contact/Contact.vue'
const routes = [
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

// Step 3
const router = new VueRouter({
  routes
})

export default router
