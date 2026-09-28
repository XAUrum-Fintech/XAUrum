<template>
  <main class="pt-24 pb-20">
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
      <p class="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-3">For bullions</p>
      <h1 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">orob Desk</h1>
      <p class="text-lg text-secondary-600 max-w-2xl mx-auto">
        A hosted live-rate platform for bullions who want to stream their own prices to their customers.
      </p>
    </section>

    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div class="card p-10 flex items-center justify-center gap-8" data-testid="orob-desk-illustration">
        <div class="flex flex-col items-center gap-2">
          <div class="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 text-2xl font-semibold">₪</div>
          <span class="text-xs text-secondary-500">Your prices</span>
        </div>
        <span class="text-secondary-300 text-2xl">→</span>
        <div class="flex flex-col items-center gap-2">
          <div class="w-16 h-16 rounded-2xl bg-primary-600 flex items-center justify-center text-white text-2xl font-semibold">D</div>
          <span class="text-xs text-secondary-500">orob Desk</span>
        </div>
        <span class="text-secondary-300 text-2xl">→</span>
        <div class="flex flex-col items-center gap-2">
          <div class="w-16 h-16 rounded-2xl bg-secondary-100 flex items-center justify-center text-secondary-600 text-2xl font-semibold">C</div>
          <span class="text-xs text-secondary-500">Your customers</span>
        </div>
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card p-6">
          <h2 class="font-semibold text-secondary-900 mb-2">Live rates</h2>
          <p class="text-secondary-600 text-sm">Stream your own prices to your customers in real time.</p>
        </div>
        <div class="card p-6">
          <h2 class="font-semibold text-secondary-900 mb-2">Hosted for you</h2>
          <p class="text-secondary-600 text-sm">We host it, so there's nothing for your team to run or maintain.</p>
        </div>
        <div class="card p-6">
          <h2 class="font-semibold text-secondary-900 mb-2">Your customers</h2>
          <p class="text-secondary-600 text-sm">Customers see your rates on a page that's yours, kept up to date automatically.</p>
        </div>
      </div>
      <p class="text-sm text-secondary-500 text-center mt-8">
        The product is being redesigned to match this design system. Screens shown here will follow.
      </p>
    </section>

    <ContactBand
      heading="Interested in orob Desk?"
      description="Tell us about your business and we'll get back to you."
      email="contact@xaurum.in"
    />
  </main>
</template>

<script setup>
import ContactBand from '@/components/ContactBand.vue'
</script>
