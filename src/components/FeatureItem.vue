<template>
  <div class="flex flex-col gap-2.5 border-t border-[var(--border-1)] pt-[22px]">
    <LucideIcon :name="icon" class="text-primary-600" />
    <h3 class="flex items-center gap-2 text-[17px] font-bold">
      <AiTag v-if="ai" />{{ title }}
    </h3>
    <p class="text-sm leading-[1.6] text-[var(--fg-3)]">{{ body }}</p>
  </div>
</template>

<script setup>
import AiTag from '@/components/AiTag.vue'
import LucideIcon from '@/components/LucideIcon.vue'

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  ai: { type: Boolean, default: false },
})
</script>
