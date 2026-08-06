<script setup>
import { plans } from '@/data/pricing'
</script>

<template>
  <main class="pt-20 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 min-h-screen">
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">OroB Plans</h1>
        <p class="text-lg text-secondary-600 max-w-2xl mx-auto">
          Choose the plan that fits your bullion business. Contact us to discuss your needs and
          receive personalised pricing.
        </p>
      </div>

      <!-- Plan Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article
          v-for="tier in plans"
          :key="tier.id"
          class="rounded-2xl border shadow-sm p-8 flex flex-col relative"
          :class="tier.popular
            ? 'bg-white border-primary-300 shadow-lg ring-2 ring-primary-200'
            : 'bg-white border-secondary-200'"
          data-testid="pricing-tier"
        >
          <!-- Popular badge -->
          <div v-if="tier.popular" class="absolute -top-4 left-1/2 -translate-x-1/2">
            <span class="bg-primary-600 text-white text-sm font-semibold px-4 py-1 rounded-full">Most Popular</span>
          </div>

          <h2 class="text-2xl font-bold text-secondary-900 mb-2">{{ tier.name }}</h2>

          <p class="mb-6 text-lg font-semibold text-primary-700" :data-testid="`pricing-contact-${tier.id}`">
            Contact us for pricing
          </p>

          <ul class="space-y-3 text-sm text-secondary-700 mb-8 flex-1">
            <li v-for="feature in tier.features" :key="feature" class="flex items-start gap-2">
              <svg v-if="!feature.startsWith('Everything')" class="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              <span v-if="feature.startsWith('Everything')" class="text-primary-600 font-semibold">{{ feature }}</span>
              <span v-else>{{ feature }}</span>
            </li>
          </ul>

          <a
            href="/#contact"
            class="w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
            :class="tier.popular
              ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg'
              : 'border-2 border-primary-600 text-primary-700 hover:bg-primary-600 hover:text-white'"
          >
            {{ tier.ctaLabel }}
          </a>
        </article>
      </div>

      <!-- FAQ-like note -->
      <div class="mt-16 text-center">
        <div class="inline-block bg-white rounded-xl border border-secondary-200 p-6 max-w-2xl">
          <h3 class="font-semibold text-secondary-900 mb-2">Need a custom plan?</h3>
          <p class="text-secondary-600 text-sm mb-4">
            For large bullion houses with specific requirements, we can tailor a plan to your exact needs
            including dedicated support, custom integrations, and SLA guarantees.
          </p>
          <a href="/#contact" class="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
            Contact us to discuss your requirements →
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
