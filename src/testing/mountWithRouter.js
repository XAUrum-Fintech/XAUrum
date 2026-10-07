import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { routes } from '@/router'

// Mounts a component inside the real route table at `path`, so RouterLinks resolve and section links get real hrefs.
export async function mountWithRouter(component, { path = '/', ...options } = {}) {
  const router = createRouter({ history: createMemoryHistory(), routes })
  router.push(path)
  await router.isReady()
  const wrapper = mount(component, {
    ...options,
    global: { ...(options.global || {}), plugins: [router, ...((options.global && options.global.plugins) || [])] },
  })
  return { wrapper, router }
}
