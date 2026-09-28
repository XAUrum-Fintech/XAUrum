import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Footer from '@/components/Footer.vue'
import CompanyPage from '@/pages/CompanyPage.vue'

// One shared mock object, hoisted above the imports and mutated before each mount,
// so the components always read these values (no module resets or dynamic imports).
const details = vi.hoisted(() => ({
  legalName: 'Xaurum Fintech Private Limited',
  cin: '',
  registeredAddress: '',
}))

vi.mock('@/data/siteDetails', () => ({ siteDetails: details }))

function mountWithDetails(values) {
  Object.assign(details, { cin: '', registeredAddress: '' }, values)
  return { footer: mount(Footer), company: mount(CompanyPage) }
}

describe('company identity details', () => {
  beforeEach(() => {
    Object.assign(details, { cin: '', registeredAddress: '' })
  })

  it('hides the CIN and address lines while no value is configured', () => {
    const { footer, company } = mountWithDetails({})

    for (const wrapper of [footer, company]) {
      expect(wrapper.find('[data-testid="footer-cin"]').exists()).toBe(false)
      expect(wrapper.find('[data-testid="footer-address"]').exists()).toBe(false)
      expect(wrapper.find('[data-testid="company-cin"]').exists()).toBe(false)
      expect(wrapper.find('[data-testid="company-address"]').exists()).toBe(false)
      expect(wrapper.text()).not.toMatch(/CIN|Registered address|TODO/)
    }
    expect(footer.text()).toContain('Xaurum Fintech Private Limited')
    expect(company.find('[data-testid="company-legal-name"]').text()).toBe('Xaurum Fintech Private Limited')
  })

  it('shows the CIN and address once values are configured', () => {
    const { footer, company } = mountWithDetails({
      cin: 'U00000XX0000PTC000000',
      registeredAddress: '1 Example Road, Example City 000000',
    })

    expect(footer.find('[data-testid="footer-cin"]').text()).toContain('U00000XX0000PTC000000')
    expect(footer.find('[data-testid="footer-address"]').text()).toContain('1 Example Road')
    expect(company.find('[data-testid="company-cin"]').text()).toBe('U00000XX0000PTC000000')
    expect(company.find('[data-testid="company-address"]').text()).toBe('1 Example Road, Example City 000000')
  })
})
