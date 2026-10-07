<template>
  <section class="border-t border-[var(--border-1)] bg-[var(--bg-2)]" aria-labelledby="family-heading">
    <div class="container-x py-16">
      <h2 id="family-heading" class="eyebrow text-[var(--fg-4)]">ALSO IN THE <span class="tracking-[0.02em]">orob</span> FAMILY</h2>
      <div class="mt-5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5">
        <RouterLink
          v-for="product in others"
          :key="product.key"
          :to="product.path"
          class="flex items-center gap-[18px] rounded-2xl border border-[var(--border-1)] bg-white px-6 py-[22px] text-[var(--fg-1)] transition-all duration-300 hover:border-secondary-300 hover:shadow-lg"
        >
          <ProductTile :size="44" :radius="11" :mark-size="markSize" :badge="product.badge" :badge-size="26" :badge-icon-size="12" :badge-offset="badgeOffset" />
          <span class="min-w-0 flex-1">
            <span class="block text-[17px] font-bold">{{ product.name }}</span>
            <span class="mt-0.5 block text-sm text-[var(--fg-3)]">{{ product.tagline }}</span>
          </span>
          <span class="font-bold" aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import ProductTile from '@/components/ProductTile.vue'
import { products } from '@/data/products'

const props = defineProps({
  current: { type: String, required: true },
  markSize: { type: Number, default: 27 },
  badgeOffset: { type: Number, default: 7 },
})

const others = computed(() => products.filter((product) => product.key !== props.current))
</script>
