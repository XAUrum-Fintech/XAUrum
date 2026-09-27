import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/pages/HomePage.vue')
const OrobPage = () => import('@/pages/OrobPage.vue')
const OrobDeskPage = () => import('@/pages/OrobDeskPage.vue')
const OrobSyncPage = () => import('@/pages/OrobSyncPage.vue')
const CompanyPage = () => import('@/pages/CompanyPage.vue')
const SupportPage = () => import('@/pages/SupportPage.vue')
const NotFoundPage = () => import('@/pages/NotFoundPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        title: 'Xaurum Fintech',
        description: 'Xaurum Fintech builds software for India\'s bullion trade: orob, orob Desk and orob Sync.',
      },
    },
    {
      path: '/orob',
      name: 'orob',
      component: OrobPage,
      meta: {
        title: 'orob — compare bullion prices | Xaurum Fintech',
        description: 'orob is a free app to compare live gold and silver prices across bullions.',
      },
    },
    {
      path: '/orob-desk',
      name: 'orob-desk',
      component: OrobDeskPage,
      meta: {
        title: 'orob Desk — stream your own prices | Xaurum Fintech',
        description: 'orob Desk is a hosted live-rate platform for bullions who want to stream their own prices to their customers.',
      },
    },
    {
      path: '/orob-sync',
      name: 'orob-sync',
      component: OrobSyncPage,
      meta: {
        title: 'orob Sync — keep your books in sync | Xaurum Fintech',
        description: 'orob Sync keeps your business\'s accounting books in sync automatically.',
      },
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyPage,
      meta: {
        title: 'Company | Xaurum Fintech',
        description: 'About Xaurum Fintech Private Limited and how to reach us.',
      },
    },
    {
      path: '/support',
      name: 'support',
      component: SupportPage,
      meta: {
        title: 'Support | Xaurum Fintech',
        description: 'Get help with orob, orob Desk or orob Sync.',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
      meta: {
        title: 'Page not found | Xaurum Fintech',
        description: 'The page you are looking for could not be found.',
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
