import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
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

describe('legal pages', () => {
  it.each(legalPages)('$path exists and contains its policy title', ({ path, title }) => {
    const filePath = join(publicDir, path)
    expect(existsSync(filePath)).toBe(true)

    const html = readFileSync(filePath, 'utf-8')
    expect(html).toContain(title)
    expect(html).toContain('Xaurum Fintech')
    expect(html).not.toMatch(/<script/i)
  })

  it('privacy and terms name a grievance contact without a personal name', () => {
    for (const path of ['orob/privacy/index.html', 'orob/terms/index.html']) {
      const html = readFileSync(join(publicDir, path), 'utf-8')
      expect(html).toContain('Grievance Officer')
      expect(html).toContain('support@xaurum.in')
    }
  })

  it.each(legalPages)('$path is marked noindex so it stays unlisted before the orob app launches', ({ path }) => {
    const html = readFileSync(join(publicDir, path), 'utf-8')
    expect(html).toMatch(/<meta\s+name="robots"\s+content="noindex"\s*\/?>/)
  })
})
