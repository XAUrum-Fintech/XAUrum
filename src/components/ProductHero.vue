<template>
  <header class="relative overflow-hidden bg-secondary-900 text-white">
    <div class="pointer-events-none absolute top-[120px] right-[-120px] size-[560px] rounded-full bg-primary-600 opacity-[0.14] blur-[140px]" aria-hidden="true" />
    <Navigation products-active contact-to="#contact" />
    <ProductSwitcher :current="product.key" />

    <div class="container-x relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-x-16 gap-y-14 pt-11 pb-20">
      <div>
        <div class="flex items-center gap-4">
          <ProductTile :size="56" :radius="14" :mark-size="markSize" :badge="product.badge" :badge-size="30" badge-on-dark />
          <div>
            <p class="eyebrow text-secondary-400"><span class="tracking-[0.02em]">{{ product.name }}</span> · {{ eyebrow }}</p>
            <p class="mt-1 text-[13px] font-semibold text-primary-300">{{ launchLabel }}</p>
          </div>
        </div>
        <h1 class="mt-[26px] text-[clamp(36px,4.6vw,54px)] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance text-white">
          <slot name="title" />
        </h1>
        <p class="mt-[18px] max-w-[34rem] text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-pretty text-secondary-400">
          <slot name="sub" />
        </p>
        <div class="mt-7 flex flex-wrap gap-3">
          <slot name="ctas" />
        </div>
      </div>
      <slot name="visual" />
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import Navigation from '@/components/Navigation.vue'
import ProductSwitcher from '@/components/ProductSwitcher.vue'
import ProductTile from '@/components/ProductTile.vue'
import { productByKey } from '@/data/products'

// The dark hero shared by the three product pages: nav, product switcher, then copy on the left and the product visual on the right.
const props = defineProps({
  productKey: { type: String, required: true },
  eyebrow: { type: String, required: true },
  launchLabel: { type: String, required: true },
  markSize: { type: Number, default: 35 },
})

const product = computed(() => productByKey(props.productKey))
</script>
