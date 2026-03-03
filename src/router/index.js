import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '@/pages/AboutPage.vue'
import HomePage from '@/pages/HomePage.vue'
import PricingPage from '@/pages/PricingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/pricing', name: 'pricing', component: PricingPage },
    { path: '/about', name: 'about', component: AboutPage },
  ],
})

export default router
