<template>
  <div
    class="relative grid flex-none place-items-center bg-orob"
    :style="{ width: px(size), height: px(size), borderRadius: px(radius) }"
    aria-hidden="true"
  >
    <svg
      :width="markSize"
      :height="markSize"
      viewBox="136 113 540 540"
      fill="none"
      stroke="#fff"
      stroke-width="22.7"
      stroke-linejoin="round"
      stroke-linecap="round"
      class="block"
    >
      <path d="M170 394L262 422L268 516L152 470Z M170 394L356 351 M262 422L396 386 M268 516L468 451 M346 262L428 244L636 412L660 484L548 522L328 326Z M553 440L636 412 M553 440L548 522 M378 294L553 440" />
    </svg>
    <div
      v-if="badge"
      class="absolute grid place-items-center rounded-full bg-orob-badge text-secondary-900"
      :class="badgeOnDark ? 'border-2 border-secondary-900' : 'border-2 border-white'"
      :style="{ width: px(badgeSize), height: px(badgeSize), right: px(-badgeOffset), bottom: px(-badgeOffset) }"
    >
      <LucideIcon :name="badge" :size="badgeIconSize" :stroke-width="2.5" />
    </div>
  </div>
</template>

<script setup>
import LucideIcon from '@/components/LucideIcon.vue'

// The orob bars drawn white on the orob-teal tile; orob Desk and orob Sync add a corner badge.
defineProps({
  size: { type: Number, default: 48 },
  radius: { type: Number, default: 12 },
  markSize: { type: Number, default: 30 },
  badge: { type: String, default: '' },
  badgeSize: { type: Number, default: 28 },
  badgeIconSize: { type: Number, default: 14 },
  badgeOffset: { type: Number, default: 7 },
  badgeOnDark: { type: Boolean, default: false },
})

const px = (value) => `${value}px`
</script>
