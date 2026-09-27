import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import HomePage from '@/pages/HomePage.vue'

describe('HomePage', () => {
  it('states plainly what Xaurum Fintech does', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.find('[data-testid="home-tagline"]').text()).toBe(
      "Xaurum Fintech builds software for India's bullion trade."
    )
  })

  it('shows one card per product', () => {
    const wrapper = mount(HomePage)
    const cards = wrapper.findAll('[data-testid="product-card"]')
    expect(cards).toHaveLength(3)
    const text = wrapper.text()
    expect(text).toContain('orob')
    expect(text).toContain('orob Desk')
    expect(text).toContain('orob Sync')
  })
})
