<template>
  <footer class="bg-white">
    <div class="container-x pt-14 pb-10">
      <div class="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-10">
        <div class="col-span-2 min-w-0">
          <RouterLink to="/" class="flex w-fit">
            <BrandLogo :mark-size="27" :word-size="22" :sub-size="10" />
          </RouterLink>
          <p class="mt-3.5 text-[13px] leading-[1.6] text-[var(--fg-4)]">
            <span class="block" data-testid="footer-legal-name">{{ siteDetails.legalName }}</span>
            <span v-if="siteDetails.cin" class="block" data-testid="footer-cin">CIN {{ siteDetails.cin }}</span>
            <span v-if="siteDetails.registeredAddress" class="block" data-testid="footer-address">Registered address: {{ siteDetails.registeredAddress }}</span>
          </p>
        </div>

        <div class="flex flex-col gap-2.5 text-sm">
          <h2 class="text-xs font-bold tracking-[0.14em] text-[var(--fg-1)]">PRODUCTS</h2>
          <RouterLink v-for="product in products" :key="product.key" :to="product.path" class="text-[var(--fg-3)] transition-colors hover:text-primary-800">{{ product.name }}</RouterLink>
        </div>

        <div class="flex flex-col gap-2.5 text-sm">
          <h2 class="text-xs font-bold tracking-[0.14em] text-[var(--fg-1)]">COMPANY</h2>
          <SectionLink to="/#company" class="text-[var(--fg-3)] transition-colors hover:text-primary-800">About</SectionLink>
          <SectionLink to="/#security" class="text-[var(--fg-3)] transition-colors hover:text-primary-800">Security</SectionLink>
          <RouterLink to="/support" class="text-[var(--fg-3)] transition-colors hover:text-primary-800">Support</RouterLink>
        </div>

        <div class="flex flex-col gap-2.5 text-sm">
          <h2 class="text-xs font-bold tracking-[0.14em] text-[var(--fg-1)]">CONTACT US</h2>
          <a :href="`mailto:${contactEmail}`" class="text-[var(--fg-3)] transition-colors hover:text-primary-800">{{ contactEmail }}</a>
          <a :href="`mailto:${supportEmail}`" class="text-[var(--fg-3)] transition-colors hover:text-primary-800">{{ supportEmail }}</a>
        </div>
      </div>

      <div class="mt-10 border-t border-[var(--border-1)] pt-6 text-[13px] text-[var(--fg-4)]">
        &copy; {{ currentYear }} {{ siteDetails.legalName }}. All rights reserved. {{ note }}
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BrandLogo from '@/components/BrandLogo.vue'
import SectionLink from '@/components/SectionLink.vue'
import { contactEmail, supportEmail } from '@/data/contactSettings'
import { products } from '@/data/products'
import { siteDetails } from '@/data/siteDetails'

const route = useRoute()
const currentYear = new Date().getFullYear()

// The homepage shows benchmark rates; product pages show illustrative ones.
const note = computed(() => route?.meta?.footerNote ?? 'Benchmark rates shown are indicative.')
</script>
