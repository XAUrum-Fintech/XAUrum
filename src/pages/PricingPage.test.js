import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PricingPage from '@/pages/PricingPage.vue'

describe('PricingPage', () => {
  it('renders exactly three plans', () => {
    const wrapper = mount(PricingPage)
    expect(wrapper.findAll('[data-testid="pricing-tier"]')).toHaveLength(3)
  })

  it('shows a contact-for-pricing message for every plan', () => {
    const wrapper = mount(PricingPage)
    const messages = wrapper.findAll('[data-testid^="pricing-contact-"]')

    expect(messages).toHaveLength(3)
    messages.forEach((message) => {
      expect(message.text()).toBe('Contact us for pricing')
    })
  })

  it('does not render subscription amounts or billing controls', () => {
    const wrapper = mount(PricingPage)

    expect(wrapper.find('[data-testid="billing-quarterly"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="billing-annual"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid^="price-"]').exists()).toBe(false)
    expect(wrapper.text()).not.toMatch(/₹|per quarter|per year/i)
  })
})
