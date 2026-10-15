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

  it('shows one card per orob product without launch dates', async () => {
    const { wrapper } = await mountWithRouter(HomePage)
    const cards = wrapper.findAll('[data-testid="product-card"]')
    expect(cards.map((card) => card.find('h3').text())).toEqual(['orob', 'orob Desk', 'orob Sync'])
    expect(cards.map((card) => card.find('a[href^="/"]').attributes('href'))).toEqual(['/orob', '/orob-desk', '/orob-sync'])
    expect(cards.map((card) => card.text()).join(' ')).not.toMatch(/October 2026|November 2026|coming soon/i)
    expect(cards[0].find('a[href="https://apps.apple.com/app/id6768894477"] img').attributes('src')).toBe('/brand/app-store-badge.svg')
    expect(cards[0].find('a[href="https://play.google.com/store/apps/details?id=com.orob.mobile"] img').attributes('src')).toBe('/brand/google-play-badge.png')
    expect(cards[1].find('[data-testid="app-store-badges"]').exists()).toBe(false)
    expect(cards[2].find('[data-testid="app-store-badges"]').exists()).toBe(false)
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
