import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import CompanyPage from '@/pages/CompanyPage.vue'
import Footer from '@/components/Footer.vue'
import HomePage from '@/pages/HomePage.vue'
import Navigation from '@/components/Navigation.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import OrobDeskPage from '@/pages/OrobDeskPage.vue'
import OrobSyncPage from '@/pages/OrobSyncPage.vue'
import SupportPage from '@/pages/SupportPage.vue'

// The orob consumer app is not announced publicly until it launches. "orob"
// followed by "Desk" or "Sync" names an already-public product and is fine;
// a bare "orob" would mean the consumer app.
function mentionsOrobApp(text) {
  return /\borob\b(?!\s+(Desk|Sync))/.test(text)
}

const visiblePages = {
  HomePage,
  OrobDeskPage,
  OrobSyncPage,
  CompanyPage,
  SupportPage,
  NotFoundPage,
  Navigation,
  Footer,
}

describe('no orob consumer app mention on visible pages', () => {
  it.each(Object.entries(visiblePages))('%s does not mention the orob app', (_name, component) => {
    const wrapper = mount(component)
    expect(mentionsOrobApp(wrapper.text())).toBe(false)
  })

  it('the home page does not link to an orob product page', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.html()).not.toMatch(/["'](\/orob)["']/)
  })

  it.each([['Navigation', Navigation], ['Footer', Footer], ['HomePage', HomePage]])(
    '%s does not link to the unlisted legal pages',
    (_name, component) => {
      const wrapper = mount(component)
      expect(wrapper.html()).not.toContain('/orob/privacy')
      expect(wrapper.html()).not.toContain('/orob/terms')
      expect(wrapper.html()).not.toContain('/orob/delete-account')
      expect(wrapper.html()).not.toContain('/orob/support')
    }
  )
})
