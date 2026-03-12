import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PricingPage from '@/pages/PricingPage.vue'

describe('PricingPage', () => {
  it('renders exactly three pricing tiers', () => {
    const wrapper = mount(PricingPage)
    expect(wrapper.findAll('[data-testid="pricing-tier"]')).toHaveLength(3)
  })

  it('defaults to quarterly pricing', () => {
    const wrapper = mount(PricingPage)

    expect(wrapper.get('[data-testid="billing-quarterly"]').attributes('aria-pressed')).toBe('true')
    expect(wrapper.get('[data-testid="price-lite"]').text()).toContain('5,000')
    expect(wrapper.get('[data-testid="price-plus"]').text()).toContain('15,000')
    expect(wrapper.get('[data-testid="price-max"]').text()).toContain('25,000')
  })

  it('switches all three tiers to annual pricing', async () => {
    const wrapper = mount(PricingPage)
    await wrapper.get('[data-testid="billing-annual"]').trigger('click')

    expect(wrapper.get('[data-testid="billing-annual"]').attributes('aria-pressed')).toBe('true')
    expect(wrapper.get('[data-testid="price-lite"]').text()).toContain('16,000')
    expect(wrapper.get('[data-testid="price-plus"]').text()).toContain('48,000')
    expect(wrapper.get('[data-testid="price-max"]').text()).toContain('80,000')
  })
})
