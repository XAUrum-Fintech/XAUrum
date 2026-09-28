import { mount } from '@vue/test-utils'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, describe, expect, it, vi } from 'vitest'

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..')

async function mountWithDetails(details) {
  vi.resetModules()
  vi.doMock('@/data/siteDetails', () => ({
    siteDetails: { legalName: 'Xaurum Fintech Private Limited', ...details },
  }))
  const [{ default: Footer }, { default: CompanyPage }] = await Promise.all([
    import('@/components/Footer.vue'),
    import('@/pages/CompanyPage.vue'),
  ])
  return { footer: mount(Footer), company: mount(CompanyPage) }
}

function collectSources(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      collectSources(full, files)
    } else if (/\.(vue|html)$/.test(entry)) {
      files.push(full)
    }
  }
  return files
}

describe('company identity details', () => {
  afterEach(() => {
    vi.doUnmock('@/data/siteDetails')
    vi.resetModules()
  })

  it('hides the CIN and address lines while no value is configured', async () => {
    const { footer, company } = await mountWithDetails({ cin: '', registeredAddress: '' })

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

  it('shows the CIN and address once values are configured', async () => {
    const { footer, company } = await mountWithDetails({
      cin: 'U00000XX0000PTC000000',
      registeredAddress: '1 Example Road, Example City 000000',
    })

    expect(footer.find('[data-testid="footer-cin"]').text()).toContain('U00000XX0000PTC000000')
    expect(footer.find('[data-testid="footer-address"]').text()).toContain('1 Example Road')
    expect(company.find('[data-testid="company-cin"]').text()).toBe('U00000XX0000PTC000000')
    expect(company.find('[data-testid="company-address"]').text()).toBe('1 Example Road, Example City 000000')
  })

  it('leaves no TODO placeholder text in the public sources', () => {
    const files = [
      ...collectSources(join(repoRoot, 'src')),
      ...collectSources(join(repoRoot, 'public')),
    ]
    for (const file of files) {
      expect(readFileSync(file, 'utf-8'), `${file} should not contain TODO text`).not.toMatch(/TODO/)
    }
  })
})
