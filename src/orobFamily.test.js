import { afterEach, describe, expect, it, vi } from 'vitest'
import Footer from '@/components/Footer.vue'
import Navigation from '@/components/Navigation.vue'
import CompanyPage from '@/pages/CompanyPage.vue'
import HomePage from '@/pages/HomePage.vue'
import SupportPage from '@/pages/SupportPage.vue'
import { routes } from '@/router'
import { mountWithRouter } from '@/testing/mountWithRouter'

describe('the orob consumer app', () => {
  it('is shown by default: card and page route', async () => {
    const { wrapper: home } = await mountWithRouter(HomePage)
    expect(home.findAll('[data-testid="product-card"] h3').map((h) => h.text())).toContain('orob')
    expect(routes.some((route) => route.path === '/orob')).toBe(true)
  })

  it('is named alongside orob Desk and orob Sync on the company and support pages', async () => {
    const { wrapper: company } = await mountWithRouter(CompanyPage)
    expect(company.text()).toContain("India's bullion trade — orob, orob Desk and orob Sync.")
    const { wrapper: support } = await mountWithRouter(SupportPage)
    expect(support.text()).toContain('Need help with orob, orob Desk or orob Sync?')
    expect(routes.find((route) => route.path === '/support').meta.description).toBe('Get help with orob, orob Desk or orob Sync.')
  })
})

describe('the footer PRODUCTS column', () => {
  it('lists orob Desk and orob Sync only, as designed', async () => {
    const { wrapper } = await mountWithRouter(Footer)
    const column = wrapper.findAll('footer h2').find((h) => h.text() === 'PRODUCTS').element.parentElement
    expect([...column.querySelectorAll('a')].map((a) => [a.textContent, a.getAttribute('href')])).toEqual([
      ['orob Desk', '/orob-desk'],
      ['orob Sync', '/orob-sync'],
    ])
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
    const { default: HiddenCompany } = await import('@/pages/CompanyPage.vue')
    const { default: HiddenSupport } = await import('@/pages/SupportPage.vue')
    const { mountWithRouter: mountHidden } = await import('@/testing/mountWithRouter')
    return { hiddenRoutes, products, HiddenHome, HiddenCompany, HiddenSupport, mountHidden }
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

  it('falls back to naming only orob Desk and orob Sync on the company and support pages', async () => {
    const { hiddenRoutes, HiddenCompany, HiddenSupport, mountHidden } = await loadHidden()
    const { wrapper: company } = await mountHidden(HiddenCompany)
    expect(company.text()).toContain("India's bullion trade — orob Desk and orob Sync.")
    const { wrapper: support } = await mountHidden(HiddenSupport)
    expect(support.text()).toContain('Need help with orob Desk or orob Sync?')
    expect(hiddenRoutes.find((route) => route.path === '/support').meta.description).toBe('Get help with orob Desk or orob Sync.')
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
