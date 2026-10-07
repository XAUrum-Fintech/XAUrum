<template>
  <div class="container-x relative pt-2">
    <nav aria-label="orob products" class="inline-flex gap-1 rounded-xl border border-white/8 bg-white/6 p-1 text-[13px] font-semibold">
      <template v-for="product in products" :key="product.key">
        <span v-if="product.key === current" class="rounded-lg bg-white/12 px-3.5 py-[7px] text-white" aria-current="page">{{ product.name }}</span>
        <RouterLink v-else :to="product.path" class="rounded-lg px-3.5 py-[7px] text-secondary-300 transition-colors hover:text-white">{{ product.name }}</RouterLink>
      </template>
    </nav>
  </div>
</template>

<script setup>
import { products } from '@/data/products'

defineProps({
  current: { type: String, required: true },
})
</script>
