import { createRouter, createWebHistory } from 'vue-router'
import { productNameList } from '@/data/products'
import { showConsumerApp } from '@/data/siteFlags'

const HomePage = () => import('@/pages/HomePage.vue')
const OrobPage = () => import('@/pages/OrobPage.vue')
const OrobDeskPage = () => import('@/pages/OrobDeskPage.vue')
const OrobSyncPage = () => import('@/pages/OrobSyncPage.vue')
const CompanyPage = () => import('@/pages/CompanyPage.vue')
const SupportPage = () => import('@/pages/SupportPage.vue')
const NotFoundPage = () => import('@/pages/NotFoundPage.vue')

const productFooterNote = 'Rates shown are illustrative.'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Xaurum Fintech',
      description: 'The orob family from Xaurum Fintech: live rate discovery for jewellers, branded trading platforms for bullions, and cloud accounting that keeps your books in sync.',
    },
  },
  ...(showConsumerApp
    ? [
        {
          path: '/orob',
          name: 'orob',
          component: OrobPage,
          meta: {
            title: 'orob · Xaurum Fintech',
            description: 'One app to compare live gold and silver rates across bullions, with short market-mover updates that explain why prices moved.',
            footerNote: productFooterNote,
          },
        },
      ]
    : []),
  {
    path: '/orob-desk',
    name: 'orob-desk',
    component: OrobDeskPage,
    meta: {
      title: 'orob Desk · Xaurum Fintech',
      description: "A trading platform on the web and in a dedicated app, under your bullion's name. Stream your rates, take customer orders and manage your book.",
      footerNote: productFooterNote,
    },
  },
  {
    path: '/orob-sync',
    name: 'orob-sync',
    component: OrobSyncPage,
    meta: {
      title: 'orob Sync · Xaurum Fintech',
      description: 'orob Sync connects the Tally Prime books you already keep to the cloud and keeps them in sync, so your accounts team never keys an entry in twice.',
      footerNote: productFooterNote,
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
      description: `Get help with ${productNameList('or')}.`,
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
]

function prefersReducedMotion() {
  return typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Section links ("/#contact") scroll to their section; on a first load or a page change the section
// only exists once the lazily loaded page has rendered, so wait a moment before scrolling.
export function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }
  if (!to.hash) {
    return { top: 0 }
  }
  const samePage = from.matched.length > 0 && to.path === from.path
  const target = { el: to.hash, behavior: samePage && !prefersReducedMotion() ? 'smooth' : 'auto' }
  if (samePage) {
    return target
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(target), 300)
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior,
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
