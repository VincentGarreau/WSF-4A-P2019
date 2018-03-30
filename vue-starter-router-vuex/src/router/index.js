import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '@/components/About/About.vue'
import Contact from '@/components/Contact/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
})

export default router
