<template>
  <section class="bg-secondary-900 text-white" :aria-labelledby="headingId">
    <div class="container-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-start gap-x-[72px] gap-y-12 py-20">
      <div>
        <p class="flex items-center gap-2.5">
          <AiTag translucent />
          <span class="eyebrow text-primary-400">{{ eyebrow }}</span>
        </p>
        <h2 :id="headingId" class="mt-3.5 text-[clamp(28px,3vw,36px)] leading-[1.15] font-bold tracking-[-0.025em] text-balance text-white">{{ heading }}</h2>
        <p class="mt-4 max-w-[30rem] text-base leading-[1.6] text-secondary-400">{{ lede }}</p>
      </div>
      <ol class="flex flex-col">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="grid grid-cols-[40px_1fr] gap-4 border-t border-white/10 py-5 last:border-b"
        >
          <span class="font-num font-semibold text-primary-400" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
          <div>
            <h3 class="text-[17px] font-bold">{{ step.title }}</h3>
            <p class="mt-1.5 text-sm leading-[1.6] text-secondary-300">{{ step.body }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { useId } from 'vue'
import AiTag from '@/components/AiTag.vue'

// The dark AI band on the orob Desk and orob Sync pages: heading on the left, three numbered steps on the right.
defineProps({
  eyebrow: { type: String, required: true },
  heading: { type: String, required: true },
  lede: { type: String, required: true },
  steps: { type: Array, required: true },
})

const headingId = `ai-${useId()}`
</script>
