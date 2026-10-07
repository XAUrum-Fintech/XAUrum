import { describe, expect, it } from 'vitest'
import HomePage from '@/pages/HomePage.vue'
import { mountWithRouter } from '@/testing/mountWithRouter'

describe('HomePage', () => {
  it('leads with the orob family headline and sub', async () => {
    const { wrapper } = await mountWithRouter(HomePage)
    expect(wrapper.find('h1').text()).toBe('Know the best rate first.Your brand. Your desk.')
    expect(wrapper.find('[data-testid="home-tagline"]').text()).toBe(
      'The orob family from Xaurum Fintech: live rate discovery for jewellers, branded trading platforms for bullions, and cloud accounting that keeps your books in sync.'
    )
  })

  it('shows one card per orob product, each with its launch date and a link to its page', async () => {
    const { wrapper } = await mountWithRouter(HomePage)
    const cards = wrapper.findAll('[data-testid="product-card"]')
    expect(cards.map((card) => card.find('h3').text())).toEqual(['orob', 'orob Desk', 'orob Sync'])
    expect(cards.map((card) => card.find('a').attributes('href'))).toEqual(['/orob', '/orob-desk', '/orob-sync'])
    expect(cards[0].text()).toContain('Mid-October 2026')
    expect(cards[1].text()).toContain('End of October 2026')
    expect(cards[2].text()).toContain('November 2026')
    for (const card of cards) {
      expect(card.text()).toContain('AI')
    }
  })

  it('has the sections the navigation scrolls to', async () => {
    const { wrapper } = await mountWithRouter(HomePage)
    for (const id of ['products', 'company', 'security', 'contact']) {
      expect(wrapper.find(`section#${id}`).exists()).toBe(true)
    }
  })

  it('points both hero calls to action at sections on the page', async () => {
    const { wrapper } = await mountWithRouter(HomePage)
    const hrefs = wrapper.findAll('header a').map((link) => link.attributes('href'))
    expect(hrefs).toContain('/#contact')
    expect(hrefs).toContain('/#products')
  })

  it('never lists a price tier', async () => {
    const { wrapper } = await mountWithRouter(HomePage)
    expect(wrapper.text()).not.toMatch(/per month|\/mo\b|pricing/i)
  })
})
