import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'
import { describe, expect, it } from 'vitest'

// Vite copies everything under public/ verbatim into the build output (dist/),
// so checking the public/ source here also verifies what GitHub Pages serves.
const publicDir = join(dirname(fileURLToPath(import.meta.url)), '../public')

const legalPages = [
  { path: 'orob/privacy/index.html', title: 'Privacy Policy' },
  { path: 'orob/terms/index.html', title: 'Consumer Terms' },
  { path: 'orob/delete-account/index.html', title: 'Delete your account' },
  { path: 'orob/support/index.html', title: 'Support' },
]

const grievancePages = [
  'orob/privacy/index.html',
  'orob/terms/index.html',
  'orob/delete-account/index.html',
]

function loadPage(path) {
  const filePath = join(publicDir, path)
  expect(existsSync(filePath)).toBe(true)
  return new JSDOM(readFileSync(filePath, 'utf-8')).window.document
}

describe('legal pages', () => {
  it.each(legalPages)('$path exists and contains its policy title', ({ path, title }) => {
    const document = loadPage(path)
    expect(document.title).toBe(title)
    expect(document.querySelector('header')?.textContent).toContain('Xaurum Fintech')
    expect(document.querySelectorAll('script')).toHaveLength(0)
  })

  it.each(grievancePages)('$path names a grievance contact without a personal name', (path) => {
    const document = loadPage(path)
    const grievanceHeading = [...document.querySelectorAll('h2')].find((heading) => heading.textContent?.trim() === 'Grievances')
    const grievanceCard = grievanceHeading?.nextElementSibling
    expect(grievanceCard?.classList.contains('card')).toBe(true)
    expect(grievanceCard?.textContent).toContain('Grievance Officer')
    expect(grievanceCard?.querySelector('a[href="mailto:support@xaurum.in"]')?.textContent).toBe('support@xaurum.in')
  })

  it.each(legalPages)('$path is marked noindex so it stays unlisted before the orob app launches', ({ path }) => {
    const document = loadPage(path)
    expect(document.querySelector('meta[name="robots"]')?.getAttribute('content')).toBe('noindex')
  })
})
