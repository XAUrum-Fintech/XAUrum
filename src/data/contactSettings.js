// Where Contact us enquiries go. contactEmail is the one recipient address: it is shown on the page and used by the mailto fallback.
// contactFormKey is the Web3Forms access key for that address (public by design); while it is empty, the form opens a pre-filled email instead of sending directly.
export const contactEmail = (import.meta.env.VITE_CONTACT_EMAIL || 'contact@xaurum.in').trim()
export const contactFormKey = (import.meta.env.VITE_CONTACT_FORM_KEY || '').trim()
export const supportEmail = 'support@xaurum.in'
