// Company identity details. The CIN is public company information, so it defaults here; the env var overrides it. Leave a value empty and its line is hidden site-wide.
export const siteDetails = {
  legalName: 'Xaurum Fintech Private Limited',
  cin: (import.meta.env.VITE_COMPANY_CIN || 'U62010TZ2026PTC037387').trim(),
  registeredAddress: (import.meta.env.VITE_COMPANY_ADDRESS || '').trim(),
}
