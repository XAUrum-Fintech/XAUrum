<template>
  <PageHeader title="Company">
    Xaurum Fintech builds software for India's bullion trade — {{ productNameList('and') }}.
  </PageHeader>

  <main class="container-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-6 py-24">
    <section class="rounded-2xl border border-[var(--border-1)] bg-[var(--bg-2)] p-8" aria-labelledby="legal-identity-heading">
      <h2 id="legal-identity-heading" class="text-[19px] font-bold">Legal identity</h2>
      <dl class="mt-4 space-y-3 text-sm">
        <div>
          <dt class="text-[var(--fg-4)]">Legal name</dt>
          <dd class="font-semibold text-[var(--fg-1)]" data-testid="company-legal-name">{{ siteDetails.legalName }}</dd>
        </div>
        <div v-if="siteDetails.cin">
          <dt class="text-[var(--fg-4)]">CIN</dt>
          <dd class="font-num font-semibold text-[var(--fg-1)]" data-testid="company-cin">{{ siteDetails.cin }}</dd>
        </div>
        <div v-if="siteDetails.registeredAddress">
          <dt class="text-[var(--fg-4)]">Registered address</dt>
          <dd class="font-semibold text-[var(--fg-1)]" data-testid="company-address">{{ siteDetails.registeredAddress }}</dd>
        </div>
      </dl>
    </section>

    <section class="rounded-2xl border border-[var(--border-1)] bg-[var(--bg-2)] p-8" aria-labelledby="company-contact-heading">
      <h2 id="company-contact-heading" class="text-[19px] font-bold">Contact</h2>
      <p class="mt-4 text-sm text-[var(--fg-3)]">
        General &amp; business enquiries:
        <a :href="`mailto:${contactEmail}`" class="font-semibold text-primary-700 hover:text-primary-800">{{ contactEmail }}</a>
      </p>
      <p class="mt-2 text-sm text-[var(--fg-3)]">
        App support &amp; account help:
        <a :href="`mailto:${supportEmail}`" class="font-semibold text-primary-700 hover:text-primary-800">{{ supportEmail }}</a>
      </p>
    </section>
  </main>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import { contactEmail, supportEmail } from '@/data/contactSettings'
import { productNameList } from '@/data/products'
import { siteDetails } from '@/data/siteDetails'
</script>
