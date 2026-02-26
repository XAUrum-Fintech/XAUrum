<script setup lang="ts">
import { computed, ref } from 'vue'
import type { BillingCycle, PricingTier } from '../data/pricing'
import { pricingTiers } from '../data/pricing'

const billingCycle = ref<BillingCycle>('monthly')

const priceSuffix = computed(() => (billingCycle.value === 'monthly' ? '/month' : '/year'))

const formatPrice = (tier: PricingTier) => {
  const value = billingCycle.value === 'monthly' ? tier.monthlyPrice : tier.annualPrice
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}
</script>

<template>
  <section>
    <div class="pricing-header">
      <h1>Pricing</h1>
      <p class="hero-copy">Choose the plan that matches your stage. Switch between monthly and annual billing.</p>
    </div>

    <div class="billing-toggle" role="group" aria-label="Billing cycle">
      <button
        type="button"
        class="toggle-btn"
        :class="{ active: billingCycle === 'monthly' }"
        :aria-pressed="billingCycle === 'monthly'"
        data-testid="billing-monthly"
        @click="billingCycle = 'monthly'"
      >
        Monthly
      </button>
      <button
        type="button"
        class="toggle-btn"
        :class="{ active: billingCycle === 'annual' }"
        :aria-pressed="billingCycle === 'annual'"
        data-testid="billing-annual"
        @click="billingCycle = 'annual'"
      >
        Annual
      </button>
    </div>

    <div class="pricing-grid">
      <article v-for="tier in pricingTiers" :key="tier.id" class="pricing-card" data-testid="pricing-tier">
        <h2>{{ tier.name }}</h2>
        <p class="price-line">
          <span class="price-value" :data-testid="`price-${tier.id}`">{{ formatPrice(tier) }}</span>
          <span class="price-suffix">{{ priceSuffix }}</span>
        </p>

        <ul>
          <li v-for="feature in tier.features" :key="feature">{{ feature }}</li>
        </ul>

        <button type="button" class="cta-btn">{{ tier.ctaLabel }}</button>
      </article>
    </div>
  </section>
</template>
