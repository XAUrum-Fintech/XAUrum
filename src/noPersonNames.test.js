import { readFileSync, readdirSync, statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..')

// Individuals previously named on the site. The site must never name a person.
const personNames = [
  'Hariharan Ragunathan',
  'Hariprasad Nagaraj',
  'Radhakrishnan C',
  'Reghunathan EP',
]

function collectFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry === '.git' || entry === 'dist') continue
    const full = join(dir, entry)
    const stats = statSync(full)
    if (stats.isDirectory()) {
      collectFiles(full, files)
    } else if (/\.(vue|html)$/.test(entry)) {
      files.push(full)
    }
  }
  return files
}

describe('no person names on the site', () => {
  it('does not mention any individual by name in src/ or public/', () => {
    const files = [
      ...collectFiles(join(repoRoot, 'src')),
      ...collectFiles(join(repoRoot, 'public')),
    ]

    for (const file of files) {
      const contents = readFileSync(file, 'utf-8')
      for (const name of personNames) {
        expect(contents, `${file} should not mention "${name}"`).not.toContain(name)
      }
    }
  })

  it('does not list a personal phone number', () => {
    const files = [
      ...collectFiles(join(repoRoot, 'src')),
      ...collectFiles(join(repoRoot, 'public')),
    ]

    for (const file of files) {
      const contents = readFileSync(file, 'utf-8')
      expect(contents, `${file} should not contain a tel: link`).not.toMatch(/tel:/)
    }
  })
})
