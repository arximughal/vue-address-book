import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactForm from '../components/ContactForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/add-contact',
    name: 'ContactForm',
    component: ContactForm,
    props: route => ({ query: route.query.q })
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
