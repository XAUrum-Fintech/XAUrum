<template>
  <main class="pt-24 pb-20">
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
      <h1 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">Xaurum Fintech</h1>
      <p class="text-lg text-secondary-600 max-w-2xl mx-auto" data-testid="home-tagline">
        Xaurum Fintech builds software for India's bullion trade.
      </p>
    </section>

    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProductCard
          to="/orob"
          eyebrow="Free consumer app"
          name="orob"
          description="Compare live gold and silver prices across bullions, all in one screen."
        />
        <ProductCard
          to="/orob-desk"
          eyebrow="For bullions"
          name="orob Desk"
          description="A hosted live-rate platform for bullions who want to stream their own prices to their customers."
        />
        <ProductCard
          to="/orob-sync"
          eyebrow="For bullions"
          name="orob Sync"
          description="Keeps your business's accounting books in sync automatically."
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
</script>
