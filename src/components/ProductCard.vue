<template>
  <RouterLink :to="to" class="card p-8 flex flex-col hover:border-primary-300 transition-colors" data-testid="product-card">
    <p class="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-2">{{ eyebrow }}</p>
    <h3 class="text-2xl font-semibold text-secondary-900 mb-3">{{ name }}</h3>
    <p class="text-secondary-600 flex-1">{{ description }}</p>
    <span class="mt-6 text-sm font-semibold text-primary-600">Learn more →</span>
  </RouterLink>
</template>

<script setup>
defineProps({
  to: { type: String, required: true },
  eyebrow: { type: String, default: '' },
  name: { type: String, required: true },
  description: { type: String, required: true },
})
</script>
