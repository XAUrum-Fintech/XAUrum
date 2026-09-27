import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import OrobDeskPage from '@/pages/OrobDeskPage.vue'

describe('OrobDeskPage', () => {
  it('never uses the word "dealer"', () => {
    const wrapper = mount(OrobDeskPage)
    expect(wrapper.text().toLowerCase()).not.toContain('dealer')
  })

  it('does not show product screenshots', () => {
    const wrapper = mount(OrobDeskPage)
    expect(wrapper.find('img[src*="screenshot"]').exists()).toBe(false)
  })

  it('links contact to contact@xaurum.in', () => {
    const wrapper = mount(OrobDeskPage)
    expect(wrapper.find('a[href="mailto:contact@xaurum.in"]').exists()).toBe(true)
  })
})
