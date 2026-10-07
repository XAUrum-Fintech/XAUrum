<template>
  <span class="flex items-center font-bold tracking-[0.12em] text-up" :class="small ? 'gap-[5px] text-[10px]' : 'gap-1.5 text-[11px]'">
    <span class="size-1.5 rounded-full bg-live motion-safe:animate-live" />{{ label }}
  </span>
</template>

<script setup>
// The pulsing green "LIVE" marker used on the illustrative product screens.
defineProps({
  label: { type: String, default: 'LIVE' },
  small: { type: Boolean, default: false },
})
</script>
