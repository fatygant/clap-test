import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/LandingView.vue'
import Catalog from '../views/CatalogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    }
  ]
})

export default router
