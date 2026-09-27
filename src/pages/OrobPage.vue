<template>
  <main class="pt-24 pb-20">
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
      <p class="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-3">Free consumer app</p>
      <h1 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">orob</h1>
      <p class="text-lg text-secondary-600 max-w-2xl mx-auto">
        Compare live gold and silver prices across bullions, all in one screen. Free to use.
      </p>
      <p class="text-sm text-secondary-500 max-w-xl mx-auto mt-4">
        Prices shown in the app are for comparison only. Always verify the final price with the bullion before you buy.
      </p>
    </section>

    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <figure v-for="shot in screenshots" :key="shot.src" class="text-center">
          <div class="rounded-2xl overflow-hidden border border-secondary-200 shadow-sm">
            <img :src="shot.src" :alt="shot.alt" class="w-full h-auto" loading="lazy" />
          </div>
          <figcaption class="mt-3 text-sm font-medium text-secondary-700">{{ shot.label }}</figcaption>
        </figure>
      </div>
    </section>

    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="card p-6">
          <h2 class="font-semibold text-secondary-900 mb-2">Compare</h2>
          <p class="text-secondary-600 text-sm">See live prices from every bullion you watch, grouped clearly so you can compare like for like.</p>
        </div>
        <div class="card p-6">
          <h2 class="font-semibold text-secondary-900 mb-2">Market news</h2>
          <p class="text-secondary-600 text-sm">Follow gold and silver market news relevant to your trade.</p>
        </div>
        <div class="card p-6">
          <h2 class="font-semibold text-secondary-900 mb-2">Calculators</h2>
          <p class="text-secondary-600 text-sm">Currency, spot parity and TDS calculators built for the bullion trade.</p>
        </div>
        <div class="card p-6">
          <h2 class="font-semibold text-secondary-900 mb-2">Alerts</h2>
          <p class="text-secondary-600 text-sm">Get notified when the market opens and at the end of each trading day.</p>
        </div>
      </div>
    </section>

    <section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-xl font-semibold text-secondary-900 mb-3">Legal</h2>
      <div class="flex flex-wrap justify-center gap-4 text-sm">
        <a href="/orob/privacy/" class="text-primary-600 hover:text-primary-700 font-medium">Privacy policy</a>
        <a href="/orob/terms/" class="text-primary-600 hover:text-primary-700 font-medium">Terms</a>
        <a href="/orob/delete-account/" class="text-primary-600 hover:text-primary-700 font-medium">Delete your account</a>
        <a href="/orob/support/" class="text-primary-600 hover:text-primary-700 font-medium">Support</a>
      </div>
    </section>
  </main>
</template>

<script setup>
const screenshots = [
  { src: '/screenshots/orob-compare.png', alt: 'orob Compare screen showing live gold and silver prices grouped by bullion', label: 'Compare' },
  { src: '/screenshots/orob-market.png', alt: 'orob Market screen showing gold and silver news', label: 'Market news' },
  { src: '/screenshots/orob-calc.png', alt: 'orob Calc screen showing the currency calculator', label: 'Calc' },
  { src: '/screenshots/orob-alerts.png', alt: 'orob Alerts screen showing market open and daily summary notifications', label: 'Alerts' },
]
</script>
