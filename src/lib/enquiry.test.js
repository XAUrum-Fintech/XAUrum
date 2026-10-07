import { describe, expect, it, vi } from 'vitest'
import { WEB3FORMS_ENDPOINT, mailtoUrl, sendEnquiry } from '@/lib/enquiry'

const enquiry = {
  name: 'A Buyer',
  business: 'Example Bullion',
  email: 'buyer@example.com',
  city: 'Coimbatore',
  interests: ['orob Desk', 'orob Sync'],
  message: 'Phone orders & a rate sheet',
}

describe('sendEnquiry', () => {
  it('opens a pre-filled email to the configured inbox when no form key is set', async () => {
    const openUrl = vi.fn()
    const fetchImpl = vi.fn()
    const result = await sendEnquiry(enquiry, { key: '', openUrl, fetchImpl })

    expect(result.delivery).toBe('mailto')
    expect(fetchImpl).not.toHaveBeenCalled()
    const url = openUrl.mock.calls[0][0]
    expect(url.startsWith('mailto:contact@xaurum.in?')).toBe(true)
    const body = decodeURIComponent(url.split('body=')[1])
    expect(body).toContain('Business: Example Bullion')
    expect(body).toContain('Interested in: orob Desk, orob Sync')
    expect(body).toContain('Phone orders & a rate sheet')
  })

  it('posts the enquiry to Web3Forms when a form key is set', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: true, status: 200, json: async () => ({ success: true }) })
    const result = await sendEnquiry(enquiry, { key: 'test-key', fetchImpl, openUrl: vi.fn() })

    expect(result.delivery).toBe('web3forms')
    const [endpoint, request] = fetchImpl.mock.calls[0]
    expect(endpoint).toBe(WEB3FORMS_ENDPOINT)
    expect(request.method).toBe('POST')
    const payload = JSON.parse(request.body)
    expect(payload).toMatchObject({
      access_key: 'test-key',
      name: 'A Buyer',
      business: 'Example Bullion',
      email: 'buyer@example.com',
      replyto: 'buyer@example.com',
      interested_in: 'orob Desk, orob Sync',
      botcheck: '',
    })
  })

  it('reports a failed delivery', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({ ok: false, status: 400, json: async () => ({ success: false, message: 'Invalid key' }) })
    await expect(sendEnquiry(enquiry, { key: 'bad', fetchImpl })).rejects.toThrow('Invalid key')
  })
})

describe('mailtoUrl', () => {
  it('encodes the subject with the business name', () => {
    expect(mailtoUrl(enquiry, 'sales@example.com')).toContain('mailto:sales@example.com?subject=Website%20enquiry%3A%20Example%20Bullion')
  })
})
