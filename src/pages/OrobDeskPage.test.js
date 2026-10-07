import { describe, expect, it } from 'vitest'
import OrobDeskPage from '@/pages/OrobDeskPage.vue'
import { mountWithRouter } from '@/testing/mountWithRouter'

describe('OrobDeskPage', () => {
  it('never uses the word "dealer"', async () => {
    const { wrapper } = await mountWithRouter(OrobDeskPage, { path: '/orob-desk' })
    expect(wrapper.text().toLowerCase()).not.toContain('dealer')
  })

  it('does not show product screenshots', async () => {
    const { wrapper } = await mountWithRouter(OrobDeskPage, { path: '/orob-desk' })
    expect(wrapper.find('img[src*="screenshot"]').exists()).toBe(false)
  })

  it('links contact to contact@xaurum.in', async () => {
    const { wrapper } = await mountWithRouter(OrobDeskPage, { path: '/orob-desk' })
    expect(wrapper.find('a[href="mailto:contact@xaurum.in"]').exists()).toBe(true)
  })

  it('has no plan tiers or prices for the platform itself', async () => {
    const { wrapper } = await mountWithRouter(OrobDeskPage, { path: '/orob-desk' })
    expect(wrapper.text()).not.toMatch(/per month|plan|pricing|tier/i)
  })
})
