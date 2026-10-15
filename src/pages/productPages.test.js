import { describe, expect, it } from 'vitest'
import OrobDeskPage from '@/pages/OrobDeskPage.vue'
import OrobPage from '@/pages/OrobPage.vue'
import OrobSyncPage from '@/pages/OrobSyncPage.vue'
import { mountWithRouter } from '@/testing/mountWithRouter'

const pages = [
  { name: 'orob', component: OrobPage, path: '/orob', headline: 'Know the best rate first.', others: ['/orob-desk', '/orob-sync'] },
  { name: 'orob Desk', component: OrobDeskPage, path: '/orob-desk', headline: 'Your rates. Your brand. Your desk.', others: ['/orob', '/orob-sync'] },
  { name: 'orob Sync', component: OrobSyncPage, path: '/orob-sync', headline: 'Your Tally, in the cloud.', others: ['/orob', '/orob-desk'] },
]

describe.each(pages)('$name page', ({ name, component, path, headline, others }) => {
  it('shows its headline without a launch date or coming-soon wording', async () => {
    const { wrapper } = await mountWithRouter(component, { path })
    expect(wrapper.find('h1').text()).toBe(headline)
    expect(wrapper.text()).not.toMatch(/October 2026|November 2026|coming soon|launches in/i)
  })

  it('marks itself as the current product in the switcher', async () => {
    const { wrapper } = await mountWithRouter(component, { path })
    const current = wrapper.find('nav[aria-label="orob products"] [aria-current="page"]')
    expect(current.text()).toBe(name)
  })

  it('links to the other two products in the family band', async () => {
    const { wrapper } = await mountWithRouter(component, { path })
    const family = wrapper.find('section[aria-labelledby="family-heading"]')
    expect(family.findAll('a').map((link) => link.attributes('href'))).toEqual(others)
  })

  it('ends with the right action for its product', async () => {
    const { wrapper } = await mountWithRouter(component, { path })
    if (path === '/orob') {
      expect(wrapper.find('section[aria-labelledby="orob-download-heading"] [data-testid="app-store-badges"]').exists()).toBe(true)
    } else {
      const band = wrapper.find('section#contact')
      expect(band.find('a[href="/#contact"]').exists()).toBe(true)
      expect(band.find('a[href="mailto:contact@xaurum.in"]').exists()).toBe(true)
    }
  })

  it('labels its illustrative product visual for screen readers', async () => {
    const { wrapper } = await mountWithRouter(component, { path })
    const visual = wrapper.find('header [role="img"]')
    expect(visual.attributes('aria-label')).toMatch(/illustrative/i)
  })
})

it('links orob store badges from its product page', async () => {
  const { wrapper } = await mountWithRouter(OrobPage, { path: '/orob' })
  expect(wrapper.findAll('[data-testid="app-store-badges"]')).toHaveLength(2)
  expect(wrapper.find('a[href="https://apps.apple.com/app/id6768894477"] img').exists()).toBe(true)
  expect(wrapper.find('a[href="https://play.google.com/store/apps/details?id=com.orob.mobile"] img').exists()).toBe(true)
})
