<template>
  <main class="pt-24 pb-20">
    <section class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
      <h1 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">Company</h1>
      <p class="text-lg text-secondary-600">
        Xaurum Fintech builds software for India's bullion trade — orob Desk and orob Sync.
      </p>
    </section>

    <section class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div class="card p-8">
        <h2 class="font-semibold text-secondary-900 mb-4">Legal identity</h2>
        <dl class="space-y-3 text-sm">
          <div>
            <dt class="text-secondary-500">Legal name</dt>
            <dd class="text-secondary-900 font-medium" data-testid="company-legal-name">{{ siteDetails.legalName }}</dd>
          </div>
          <div v-if="siteDetails.cin">
            <dt class="text-secondary-500">CIN</dt>
            <dd class="text-secondary-900 font-medium" data-testid="company-cin">{{ siteDetails.cin }}</dd>
          </div>
          <div v-if="siteDetails.registeredAddress">
            <dt class="text-secondary-500">Registered address</dt>
            <dd class="text-secondary-900 font-medium" data-testid="company-address">{{ siteDetails.registeredAddress }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div class="card p-8">
        <h2 class="font-semibold text-secondary-900 mb-4">Contact</h2>
        <p class="text-secondary-600 text-sm mb-2">
          General &amp; business enquiries:
          <a href="mailto:contact@xaurum.in" class="text-primary-600 font-medium hover:text-primary-700">contact@xaurum.in</a>
        </p>
        <p class="text-secondary-600 text-sm">
          App support &amp; account help:
          <a href="mailto:support@xaurum.in" class="text-primary-600 font-medium hover:text-primary-700">support@xaurum.in</a>
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { siteDetails } from '@/data/siteDetails'
</script>
