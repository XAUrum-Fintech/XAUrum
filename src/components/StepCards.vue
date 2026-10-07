<template>
  <section :id="id || undefined" class="container-x py-24" :aria-labelledby="`${headingId}`">
    <p class="eyebrow text-primary-700">{{ eyebrow }}</p>
    <h2 :id="headingId" class="mt-3.5 text-[clamp(30px,3.4vw,40px)] leading-[1.15] font-bold tracking-[-0.025em] text-balance">{{ heading }}</h2>
    <ol class="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-6">
      <li v-for="(step, index) in steps" :key="step.title" class="rounded-2xl border border-[var(--border-1)] bg-[var(--bg-2)] p-7">
        <div class="font-num text-sm font-semibold text-primary-700" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</div>
        <h3 class="mt-3.5 text-[19px] font-bold">{{ step.title }}</h3>
        <p class="mt-2 text-[15px] leading-[1.6] text-[var(--fg-3)]">{{ step.body }}</p>
      </li>
    </ol>
  </section>
</template>

<script setup>
import { useId } from 'vue'

// Numbered "How it works" / "Going live" cards on the product pages.
defineProps({
  id: { type: String, default: '' },
  eyebrow: { type: String, required: true },
  heading: { type: String, required: true },
  steps: { type: Array, required: true },
})

const headingId = `steps-${useId()}`
</script>
