import { afterEach, describe, expect, it, vi } from 'vitest'
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue'
import HomePage from '@/pages/HomePage.vue'
import { routes } from '@/router'
import { mountWithRouter } from '@/testing/mountWithRouter'

describe('the orob consumer app', () => {
  it('is shown by default: card, page route and footer link', async () => {
    const { wrapper: home } = await mountWithRouter(HomePage)
    expect(home.findAll('[data-testid="product-card"] h3').map((h) => h.text())).toContain('orob')
    expect(routes.some((route) => route.path === '/orob')).toBe(true)

    const { wrapper: footer } = await mountWithRouter(Footer)
    expect(footer.find('a[href="/orob"]').text()).toBe('orob')
  })
})

describe('hiding the orob consumer app with VITE_SHOW_CONSUMER_APP=false', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  async function loadHidden() {
    vi.stubEnv('VITE_SHOW_CONSUMER_APP', 'false')
    vi.resetModules()
    const { routes: hiddenRoutes } = await import('@/router')
    const { products } = await import('@/data/products')
    const { default: HiddenHome } = await import('@/pages/HomePage.vue')
    const { mountWithRouter: mountHidden } = await import('@/testing/mountWithRouter')
    return { hiddenRoutes, products, HiddenHome, mountHidden }
  }

  it('drops the orob card, its AI card and its route', async () => {
    const { hiddenRoutes, products, HiddenHome, mountHidden } = await loadHidden()
    expect(products.map((product) => product.name)).toEqual(['orob Desk', 'orob Sync'])
    expect(hiddenRoutes.some((route) => route.path === '/orob')).toBe(false)

    const { wrapper } = await mountHidden(HiddenHome)
    expect(wrapper.findAll('[data-testid="product-card"]')).toHaveLength(2)
    expect(wrapper.text()).not.toContain('Market-mover updates')
    expect(wrapper.find('a[href="/orob"]').exists()).toBe(false)
  })
})

describe('unlisted orob legal pages', () => {
  it.each([['Navigation', Navigation], ['Footer', Footer], ['HomePage', HomePage]])(
    '%s does not link to them',
    async (_name, component) => {
      const { wrapper } = await mountWithRouter(component)
      for (const path of ['/orob/privacy', '/orob/terms', '/orob/delete-account', '/orob/support']) {
        expect(wrapper.html()).not.toContain(path)
      }
    }
  )
})
