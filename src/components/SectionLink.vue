<template>
  <a :href="href" @click="onClick"><slot /></a>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// A link to a page section such as "/#contact" or "#contact". When the section is on the current
// page it scrolls there even if the URL already carries that hash, which a plain RouterLink would ignore.
const props = defineProps({
  to: { type: String, required: true },
})

const router = useRouter()
const route = useRoute()

const target = computed(() => {
  const [path, hash = ''] = props.to.split('#')
  return { path: path || route?.path || '/', hash: hash ? `#${hash}` : '' }
})

const href = computed(() => (router ? router.resolve(target.value).href : props.to))

function prefersReducedMotion() {
  return typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function onClick(event) {
  if (!router || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return
  }
  event.preventDefault()
  const { path, hash } = target.value
  if (path === route.path && hash && hash === route.hash) {
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
    return
  }
  // The router's scrollBehavior scrolls to the hash once the page has rendered.
  router.push({ path, hash })
}
</script>
