import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Projects from '@/pages/Projects.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import { AOS } from 'aos'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach(() => {
  AOS.refresh()
})


export default router
