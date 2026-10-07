import { describe, expect, it } from 'vitest'
import OrobDeskPage from '@/pages/OrobDeskPage.vue'
import OrobPage from '@/pages/OrobPage.vue'
import OrobSyncPage from '@/pages/OrobSyncPage.vue'
import { mountWithRouter } from '@/testing/mountWithRouter'

const pages = [
  { name: 'orob', component: OrobPage, path: '/orob', headline: 'Know the best rate first.', launch: 'Launching mid-October 2026', others: ['/orob-desk', '/orob-sync'] },
  { name: 'orob Desk', component: OrobDeskPage, path: '/orob-desk', headline: 'Your rates. Your brand. Your desk.', launch: 'End of October 2026', others: ['/orob', '/orob-sync'] },
  { name: 'orob Sync', component: OrobSyncPage, path: '/orob-sync', headline: 'Your Tally, in the cloud.', launch: 'November 2026', others: ['/orob', '/orob-desk'] },
]

describe.each(pages)('$name page', ({ name, component, path, headline, launch, others }) => {
  it('shows its headline and launch date', async () => {
    const { wrapper } = await mountWithRouter(component, { path })
    expect(wrapper.find('h1').text()).toBe(headline)
    expect(wrapper.text()).toContain(launch)
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

  it('ends with a contact band that reaches the homepage form and the sales inbox', async () => {
    const { wrapper } = await mountWithRouter(component, { path })
    const band = wrapper.find('section#contact')
    expect(band.find('a[href="/#contact"]').exists()).toBe(true)
    expect(band.find('a[href="mailto:contact@xaurum.in"]').exists()).toBe(true)
  })

  it('labels its illustrative product visual for screen readers', async () => {
    const { wrapper } = await mountWithRouter(component, { path })
    const visual = wrapper.find('header [role="img"]')
    expect(visual.attributes('aria-label')).toMatch(/illustrative/i)
  })
})
