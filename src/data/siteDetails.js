// Company identity details. Leave a value empty and its line is hidden site-wide.
export const siteDetails = {
  legalName: 'Xaurum Fintech Private Limited',
  cin: (import.meta.env.VITE_COMPANY_CIN || '').trim(),
  registeredAddress: (import.meta.env.VITE_COMPANY_ADDRESS || '').trim(),
}
