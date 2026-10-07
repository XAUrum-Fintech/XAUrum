import { contactEmail, contactFormKey } from '@/data/contactSettings'

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'

export const interestOptions = ['orob Desk', 'orob Sync', 'Both']

function subjectFor(enquiry) {
  return `Website enquiry: ${enquiry.business || enquiry.name}`
}

function bodyLines(enquiry) {
  return [
    `Name: ${enquiry.name}`,
    `Business: ${enquiry.business}`,
    `Work email: ${enquiry.email}`,
    `City: ${enquiry.city}`,
    `Interested in: ${enquiry.interests.join(', ')}`,
    '',
    'How we trade today:',
    enquiry.message,
  ]
}

export function mailtoUrl(enquiry, to = contactEmail) {
  const subject = encodeURIComponent(subjectFor(enquiry))
  const body = encodeURIComponent(bodyLines(enquiry).join('\n'))
  return `mailto:${to}?subject=${subject}&body=${body}`
}

// Delivers a Contact us enquiry as an email to the company inbox.
// With a Web3Forms key it posts straight to Web3Forms, which emails the address registered to that key;
// without one it opens the visitor's mail app with the enquiry pre-filled.
export async function sendEnquiry(enquiry, { key = contactFormKey, fetchImpl = globalThis.fetch, openUrl = (url) => window.location.assign(url) } = {}) {
  if (!key) {
    openUrl(mailtoUrl(enquiry))
    return { delivery: 'mailto' }
  }

  const response = await fetchImpl(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: key,
      subject: subjectFor(enquiry),
      from_name: 'xaurum.in Contact us',
      replyto: enquiry.email,
      name: enquiry.name,
      business: enquiry.business,
      email: enquiry.email,
      city: enquiry.city,
      interested_in: enquiry.interests.join(', '),
      how_they_trade_today: enquiry.message,
      botcheck: '',
    }),
  })
  const result = await response.json().catch(() => ({}))
  if (!response.ok || result.success === false) {
    throw new Error(result.message || `Enquiry was not delivered (HTTP ${response.status})`)
  }
  return { delivery: 'web3forms' }
}
