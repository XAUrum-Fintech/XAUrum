<script setup>
import { computed, ref } from 'vue'
import { pricingTiers } from '@/data/pricing'

const billingCycle = ref('monthly')

const priceSuffix = computed(() => (billingCycle.value === 'monthly' ? '/month' : '/year'))

const formatPrice = (tier) => {
  const value = billingCycle.value === 'monthly' ? tier.monthlyPrice : tier.annualPrice
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}
</script>

<template>
  <main class="pt-20 pb-20 bg-gradient-to-br from-primary-50 to-secondary-50 min-h-screen">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pricing</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose a plan that fits your team. Toggle billing to compare monthly and annual pricing.
        </p>
      </div>

      <div class="flex justify-center mb-10">
        <div class="inline-flex rounded-xl border border-gray-200 bg-white p-1 shadow-sm" role="group" aria-label="Billing cycle">
          <button
            type="button"
            data-testid="billing-monthly"
            class="px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors"
            :class="billingCycle === 'monthly' ? 'bg-primary-600 text-white' : 'text-gray-700 hover:bg-gray-100'"
            :aria-pressed="billingCycle === 'monthly'"
            @click="billingCycle = 'monthly'"
          >
            Monthly
          </button>
          <button
            type="button"
            data-testid="billing-annual"
            class="px-5 py-2.5 text-sm font-semibold rounded-lg transition-colors"
            :class="billingCycle === 'annual' ? 'bg-primary-600 text-white' : 'text-gray-700 hover:bg-gray-100'"
            :aria-pressed="billingCycle === 'annual'"
            @click="billingCycle = 'annual'"
          >
            Annual
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          v-for="tier in pricingTiers"
          :key="tier.id"
          class="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col"
          data-testid="pricing-tier"
        >
          <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ tier.name }}</h2>

          <p class="mb-6 flex items-end gap-2">
            <span class="text-4xl font-extrabold text-gray-900" :data-testid="`price-${tier.id}`">{{ formatPrice(tier) }}</span>
            <span class="text-sm text-gray-500">{{ priceSuffix }}</span>
          </p>

          <ul class="space-y-3 text-sm text-gray-700 mb-8">
            <li v-for="feature in tier.features" :key="feature" class="flex items-start gap-2">
              <span class="text-primary-600 mt-0.5">•</span>
              <span>{{ feature }}</span>
            </li>
          </ul>

          <button type="button" class="btn-primary mt-auto w-full">{{ tier.ctaLabel }}</button>
        </article>
      </div>
    </section>
  </main>
</template>
