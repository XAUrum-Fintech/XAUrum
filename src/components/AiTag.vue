<template>
  <span
    class="flex-none rounded-[5px] px-1.5 py-0.5 text-[10px] font-extrabold leading-[1.3] tracking-[0.08em] text-primary-300"
    :class="translucent ? 'bg-white/8' : 'bg-secondary-900'"
  >AI</span>
</template>

<script setup>
defineProps({
  // Translucent white on dark bands; solid slate-900 everywhere else.
  translucent: { type: Boolean, default: false },
})
</script>
