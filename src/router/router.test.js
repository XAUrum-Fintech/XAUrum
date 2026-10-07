import { describe, expect, it, vi } from 'vitest'
import { routes, scrollBehavior } from '@/router'

const page = (path, hash = '') => ({ path, hash, matched: [{}] })

describe('routes', () => {
  it('serves each product page and keeps the existing pages', () => {
    const paths = routes.map((route) => route.path)
    expect(paths).toEqual(expect.arrayContaining(['/', '/orob', '/orob-desk', '/orob-sync', '/company', '/support']))
  })

  it('gives every route a title and description', () => {
    for (const route of routes) {
      expect(route.meta.title, route.path).toBeTruthy()
      expect(route.meta.description, route.path).toBeTruthy()
    }
  })
})

describe('scrollBehavior', () => {
  it('restores the saved position on back and forward', () => {
    expect(scrollBehavior(page('/'), page('/orob'), { left: 0, top: 420 })).toEqual({ left: 0, top: 420 })
  })

  it('starts a new page at the top', () => {
    expect(scrollBehavior(page('/orob-desk'), page('/'), null)).toEqual({ top: 0 })
  })

  it('scrolls smoothly to a section on the same page', () => {
    expect(scrollBehavior(page('/', '#contact'), page('/'), null)).toEqual({ el: '#contact', behavior: 'smooth' })
  })

  it('waits for the next page to render before jumping to its section', async () => {
    vi.useFakeTimers()
    const pending = scrollBehavior(page('/', '#contact'), page('/orob-desk'), null)
    vi.advanceTimersByTime(300)
    await expect(pending).resolves.toEqual({ el: '#contact', behavior: 'auto' })
    vi.useRealTimers()
  })
})
