import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PricingPage from './PricingPage.vue'

describe('PricingPage', () => {
  it('defaults to monthly prices', () => {
    const wrapper = mount(PricingPage)

    expect(wrapper.get('[data-testid="billing-monthly"]').attributes('aria-pressed')).toBe('true')
    expect(wrapper.get('[data-testid="price-basic"]').text()).toContain('$29')
    expect(wrapper.get('[data-testid="price-pro"]').text()).toContain('$79')
    expect(wrapper.get('[data-testid="price-enterprise"]').text()).toContain('$199')
  })

  it('switches to annual prices for all tiers', async () => {
    const wrapper = mount(PricingPage)

    await wrapper.get('[data-testid="billing-annual"]').trigger('click')

    expect(wrapper.get('[data-testid="billing-annual"]').attributes('aria-pressed')).toBe('true')
    expect(wrapper.get('[data-testid="price-basic"]').text()).toContain('$290')
    expect(wrapper.get('[data-testid="price-pro"]').text()).toContain('$790')
    expect(wrapper.get('[data-testid="price-enterprise"]').text()).toContain('$1,990')
  })

  it('renders exactly three pricing tiers', () => {
    const wrapper = mount(PricingPage)
    expect(wrapper.findAll('[data-testid="pricing-tier"]')).toHaveLength(3)
  })
})
