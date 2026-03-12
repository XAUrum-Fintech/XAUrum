import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '@/pages/AboutPage.vue'
import HomePage from '@/pages/HomePage.vue'
import PricingPage from '@/pages/PricingPage.vue'
import TeamPage from '@/pages/TeamPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Xaurum Fintech — OroB Bullion Trading Platform',
        description: 'OroB by Xaurum Fintech — a modern, cloud-native bullion trading platform for Indian bullion wholesalers and dealers. Real-time pricing, order management, and risk controls.',
      },
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingPage,
      meta: {
        title: 'Pricing — OroB Lite, Plus & Max Plans | Xaurum Fintech',
        description: 'Choose the right OroB plan for your bullion business. Lite, Plus, and Max subscriptions with quarterly and annual billing. GST additional.',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: {
        title: 'About Us — Xaurum Fintech Pvt Ltd',
        description: 'Xaurum Fintech is building the technology backbone for India\'s bullion industry — replacing fragmented legacy systems with modern, reliable software.',
      },
    },
    {
      path: '/team',
      name: 'team',
      component: TeamPage,
      meta: {
        title: 'Our Team — Xaurum Fintech',
        description: 'Meet the team behind Xaurum Fintech and OroB — experts in technology, finance, and the Indian bullion industry.',
      },
    },
  ],
})

router.beforeEach((to) => {
  const { title, description } = to.meta
  if (title) {
    document.title = title
  }
  const descTag = document.querySelector('meta[name="description"]')
  if (descTag && description) {
    descTag.setAttribute('content', description)
  }
})

export default router
