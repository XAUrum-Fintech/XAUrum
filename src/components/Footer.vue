<template>
  <footer class="bg-secondary-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <img src="/logo.svg" alt="" aria-hidden="true" class="w-8 h-8" />
            <span class="text-lg font-semibold">Xaurum Fintech</span>
          </div>

          <p class="text-secondary-300 mb-4 max-w-md text-sm" data-testid="footer-legal-name">
            {{ siteDetails.legalName }}
          </p>
          <p v-if="siteDetails.cin" class="text-secondary-400 text-sm mb-1" data-testid="footer-cin">
            CIN: {{ siteDetails.cin }}
          </p>
          <p v-if="siteDetails.registeredAddress" class="text-secondary-400 text-sm mb-6" data-testid="footer-address">
            Registered address: {{ siteDetails.registeredAddress }}
          </p>

          <div class="space-y-2 text-secondary-300 text-sm">
            <div>
              General &amp; business enquiries:
              <a href="mailto:contact@xaurum.in" class="hover:text-primary-300 transition-colors">contact@xaurum.in</a>
            </div>
            <div>
              App support &amp; account help:
              <a href="mailto:support@xaurum.in" class="hover:text-primary-300 transition-colors">support@xaurum.in</a>
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-secondary-200 mb-4">Products</h3>
          <ul class="space-y-3 text-sm">
            <li><RouterLink to="/orob-desk" class="text-secondary-300 hover:text-primary-300 transition-colors">orob Desk</RouterLink></li>
            <li><RouterLink to="/orob-sync" class="text-secondary-300 hover:text-primary-300 transition-colors">orob Sync</RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-secondary-200 mb-4">Company</h3>
          <ul class="space-y-3 text-sm">
            <li><RouterLink to="/company" class="text-secondary-300 hover:text-primary-300 transition-colors">About &amp; contact</RouterLink></li>
            <li><RouterLink to="/support" class="text-secondary-300 hover:text-primary-300 transition-colors">Support</RouterLink></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-secondary-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-secondary-400 text-sm">
            &copy; {{ currentYear }} Xaurum Fintech Private Limited. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { siteDetails } from '@/data/siteDetails'

const currentYear = computed(() => new Date().getFullYear())
</script>
