import { afterEach, describe, expect, it, vi } from 'vitest'

async function loadDetails() {
  vi.resetModules()
  return (await import('@/data/siteDetails')).siteDetails
}

describe('siteDetails defaults', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('defaults to the company CIN with no registered address', async () => {
    vi.stubEnv('VITE_COMPANY_CIN', '')
    vi.stubEnv('VITE_COMPANY_ADDRESS', '')
    const details = await loadDetails()

    expect(details.cin).toBe('U62010TZ2026PTC037387')
    expect(details.registeredAddress).toBe('')
  })

  it('lets the environment override the CIN', async () => {
    vi.stubEnv('VITE_COMPANY_CIN', 'U00000XX0000PTC000000')
    const details = await loadDetails()

    expect(details.cin).toBe('U00000XX0000PTC000000')
  })
})
