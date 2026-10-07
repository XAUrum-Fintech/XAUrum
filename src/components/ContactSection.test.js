import { flushPromises, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import ContactSection from '@/components/ContactSection.vue'

const { sendEnquiry } = vi.hoisted(() => ({ sendEnquiry: vi.fn() }))
vi.mock('@/lib/enquiry', async (importOriginal) => ({ ...(await importOriginal()), sendEnquiry }))

function fill(wrapper, values = {}) {
  const filled = { name: 'A Buyer', business: 'Example Bullion', email: 'buyer@example.com', city: 'Madurai', ...values }
  for (const [field, value] of Object.entries(filled)) {
    wrapper.find(`input[name="${field}"]`).setValue(value)
  }
  return filled
}

describe('ContactSection', () => {
  beforeEach(() => {
    sendEnquiry.mockReset()
    sendEnquiry.mockResolvedValue({ delivery: 'web3forms' })
  })

  it('preselects orob Desk', () => {
    const wrapper = mount(ContactSection, { attachTo: document.body })
    const checked = wrapper.findAll('input[name="interests"]').filter((box) => box.element.checked)
    expect(checked.map((box) => box.element.value)).toEqual(['orob Desk'])
    wrapper.unmount()
  })

  it('does not send until name, business and a valid work email are filled in', async () => {
    const wrapper = mount(ContactSection, { attachTo: document.body })
    fill(wrapper, { email: 'not-an-email' })
    await wrapper.find('form').trigger('submit')
    expect(sendEnquiry).not.toHaveBeenCalled()

    wrapper.find('input[name="email"]').setValue('buyer@example.com')
    wrapper.find('input[name="business"]').setValue('')
    await wrapper.find('form').trigger('submit')
    expect(sendEnquiry).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  it('requires at least one interest', async () => {
    const wrapper = mount(ContactSection, { attachTo: document.body })
    fill(wrapper)
    await wrapper.find('input[value="orob Desk"]').setValue(false)
    await wrapper.find('form').trigger('submit')
    expect(sendEnquiry).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  it('sends the enquiry and shows the thank-you card, which can start over', async () => {
    const wrapper = mount(ContactSection, { attachTo: document.body })
    fill(wrapper)
    await wrapper.find('input[value="Both"]').setValue(true)
    await wrapper.find('textarea').setValue('Phone orders')
    await wrapper.find('form').trigger('submit')
    await flushPromises()

    expect(sendEnquiry).toHaveBeenCalledWith({
      name: 'A Buyer',
      business: 'Example Bullion',
      email: 'buyer@example.com',
      city: 'Madurai',
      interests: ['orob Desk', 'Both'],
      message: 'Phone orders',
    })
    const thanks = wrapper.find('[data-testid="contact-success"]')
    expect(thanks.text()).toContain('Thank you.')
    expect(thanks.text()).toContain('Our team will reply from contact@xaurum.in.')
    expect(thanks.text()).not.toContain('Press Send')

    await thanks.find('button').trigger('click')
    await flushPromises()
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('input[name="name"]').element.value).toBe('')
    wrapper.unmount()
  })

  it('asks the visitor to press Send when the enquiry was handed to their email app', async () => {
    sendEnquiry.mockResolvedValue({ delivery: 'mailto' })
    const wrapper = mount(ContactSection, { attachTo: document.body })
    fill(wrapper)
    await wrapper.find('form').trigger('submit')
    await flushPromises()

    const thanks = wrapper.find('[data-testid="contact-success"]')
    expect(thanks.text()).toContain('Your email app should open with your message. Press Send to reach us at contact@xaurum.in.')
    expect(thanks.text()).not.toContain('Thank you.')
    expect(thanks.text()).not.toContain('Our team will reply')
    wrapper.unmount()
  })

  it('treats a filled spam trap as sent without delivering anything', async () => {
    const wrapper = mount(ContactSection, { attachTo: document.body })
    fill(wrapper)
    await wrapper.find('input[name="website"]').setValue('http://spam.example')
    await wrapper.find('form').trigger('submit')
    await flushPromises()
    expect(sendEnquiry).not.toHaveBeenCalled()
    expect(wrapper.find('[data-testid="contact-success"]').exists()).toBe(true)
    wrapper.unmount()
  })

  it('shows an error with the inbox address when delivery fails', async () => {
    sendEnquiry.mockRejectedValue(new Error('network down'))
    const wrapper = mount(ContactSection, { attachTo: document.body })
    fill(wrapper)
    await wrapper.find('form').trigger('submit')
    await flushPromises()
    const error = wrapper.find('[data-testid="contact-error"]')
    expect(error.attributes('role')).toBe('alert')
    expect(error.find('a').attributes('href')).toBe('mailto:contact@xaurum.in')
    expect(wrapper.find('[data-testid="contact-success"]').exists()).toBe(false)
    wrapper.unmount()
  })
})
