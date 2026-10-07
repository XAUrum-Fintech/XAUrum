<template>
  <span class="flex items-center gap-2.5">
    <svg
      :width="markSize"
      :height="markSize"
      viewBox="13 13 38 38"
      fill="none"
      class="block flex-none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient :id="gradientId" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stop-color="#b45309" />
          <stop offset=".5" stop-color="#f59e0b" />
          <stop offset="1" stop-color="#fcd34d" />
        </linearGradient>
      </defs>
      <path d="M18 18L46 46" :stroke="ink" stroke-width="4" stroke-linecap="square" />
      <path d="M18 46L25 35L28 38L36 27L39 30L46 18" :stroke="knockout" stroke-width="12" stroke-linejoin="round" />
      <path d="M18 46L25 35L28 38L36 27L39 30L46 18" :stroke="`url(#${gradientId})`" stroke-width="4" stroke-linecap="square" stroke-linejoin="round" />
      <path d="M37 18H46V27" :stroke="`url(#${gradientId})`" stroke-width="4" stroke-linecap="square" />
    </svg>
    <span class="flex items-baseline gap-[7px] leading-none">
      <span class="font-bold tracking-[-0.035em]" :style="{ fontSize: `${wordSize}px`, color: ink }">xaurum</span> <span class="font-semibold tracking-[0.02em] text-primary-600" :style="{ fontSize: `${subSize}px` }">fintech</span>
    </span>
  </span>
</template>

<script setup>
import { computed, useId } from 'vue'

// The "Ticker X" lockup, built in HTML so the wordmark stays live text.
// On dark backgrounds the ink stroke is white and the knockout matches the slate-900 background.
const props = defineProps({
  onDark: { type: Boolean, default: false },
  markSize: { type: Number, default: 30 },
  wordSize: { type: Number, default: 24 },
  subSize: { type: Number, default: 11 },
})

const gradientId = `xaurum-gold-${useId()}`
const ink = computed(() => (props.onDark ? '#fff' : '#0f172a'))
const knockout = computed(() => (props.onDark ? '#0f172a' : '#fff'))
</script>
