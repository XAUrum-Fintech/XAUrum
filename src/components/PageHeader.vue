<template>
  <header class="relative overflow-hidden bg-secondary-900 text-white">
    <div class="pointer-events-none absolute top-[120px] right-[-120px] size-[560px] rounded-full bg-primary-600 opacity-[0.14] blur-[140px]" aria-hidden="true" />
    <Navigation />
    <div class="container-x relative pt-11 pb-20">
      <h1 class="text-[clamp(36px,4.6vw,54px)] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance text-white">{{ title }}</h1>
      <p v-if="$slots.default" class="mt-[18px] max-w-[34rem] text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-pretty text-secondary-400"><slot /></p>
    </div>
  </header>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue'

// The dark page header for pages outside the designed set (Company, Support, Not found), matching the product-page heroes.
defineProps({
  title: { type: String, required: true },
})
</script>
