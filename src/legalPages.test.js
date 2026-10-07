import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'
import { describe, expect, it } from 'vitest'

// Vite copies everything under public/ verbatim into the build output (dist/),
// so checking the public/ source here also verifies what GitHub Pages serves.
const publicDir = join(dirname(fileURLToPath(import.meta.url)), '../public')

const legalPages = [
  { path: 'orob/privacy/index.html', title: 'Privacy Policy moved — orob' },
  { path: 'orob/terms/index.html', title: 'Terms moved — orob' },
  { path: 'orob/delete-account/index.html', title: 'Delete your account — orob' },
  { path: 'orob/support/index.html', title: 'Support — orob' },
]

describe('legal pages', () => {
  it.each(legalPages)('$path exists and contains its policy title', ({ path, title }) => {
    const filePath = join(publicDir, path)
    expect(existsSync(filePath)).toBe(true)

    const html = readFileSync(filePath, 'utf-8')
    expect(html).toContain(`<title>${title}</title>`)
    expect(html).not.toMatch(/<script/i)
  })

  it('delete account names a grievance contact without a personal name', () => {
    for (const path of ['orob/delete-account/index.html']) {
      const html = readFileSync(join(publicDir, path), 'utf-8')
      expect(html).toContain('Grievance Officer')
      expect(html).toContain('support@xaurum.in')
    }
  })

  it.each(legalPages)('$path is marked noindex', ({ path }) => {
    const html = readFileSync(join(publicDir, path), 'utf-8')
    expect(html).toMatch(/<meta\s+name="robots"\s+content="noindex"\s*\/?>/)
  })

  it.each([
    { path: 'orob/privacy/index.html', destination: 'https://orob.app/privacy' },
    { path: 'orob/terms/index.html', destination: 'https://orob.app/terms' },
  ])('$path points to its canonical orob.app page', ({ path, destination }) => {
    const html = readFileSync(join(publicDir, path), 'utf-8')
    const document = new JSDOM(html).window.document

    expect(document.querySelector('link[rel="canonical"]')?.href).toBe(destination)
    expect(document.querySelector('meta[http-equiv="refresh"]')?.content).toBe(`0;url=${destination}`)
    expect(document.querySelector('a')?.href).toBe(destination)
  })
})
