<template>
  <footer class="bg-secondary-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="md:col-span-2">
          <div class="flex items-center mb-6">
            <img src="/logo.png" alt="Xaurum Fintech" class="w-10 h-10" />
            <span class="ml-3 text-2xl font-bold">Xaurum <span class="text-primary-400">Fintech</span></span>
          </div>

          <p class="text-secondary-300 mb-4 max-w-md">
            Modernizing India's bullion trade with OroB — a cloud-native platform for real-time pricing,
            order management, and risk controls.
          </p>

          <!-- Contact Info -->
          <div class="space-y-2 text-secondary-300 text-sm mb-6">
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:contact@xaurum.in" class="hover:text-primary-400 transition-colors">contact@xaurum.in</a>
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 mr-2 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <a href="tel:+91875010921" class="hover:text-primary-400 transition-colors">+91 87501 0921</a>
            </div>
            <div class="flex items-start">
              <svg class="w-4 h-4 mr-2 mt-0.5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>Xaurum Fintech Pvt Ltd, 161, Kalidas Road, Ramnagar, Coimbatore 641009</span>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Quick Links</h3>
          <ul class="space-y-3">
            <li><RouterLink to="/" class="text-secondary-300 hover:text-primary-400 transition-colors">Home</RouterLink></li>
            <li><RouterLink to="/pricing" class="text-secondary-300 hover:text-primary-400 transition-colors">Pricing</RouterLink></li>
            <li><RouterLink to="/about" class="text-secondary-300 hover:text-primary-400 transition-colors">About</RouterLink></li>
            <li><RouterLink to="/team" class="text-secondary-300 hover:text-primary-400 transition-colors">Team</RouterLink></li>
            <li><a href="/#contact" class="text-secondary-300 hover:text-primary-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- OroB Plans -->
        <div>
          <h3 class="text-lg font-semibold mb-6">OroB Plans</h3>
          <ul class="space-y-3">
            <li><RouterLink to="/pricing" class="text-secondary-300 hover:text-primary-400 transition-colors">Lite</RouterLink></li>
            <li><RouterLink to="/pricing" class="text-secondary-300 hover:text-primary-400 transition-colors">Plus</RouterLink></li>
            <li><RouterLink to="/pricing" class="text-secondary-300 hover:text-primary-400 transition-colors">Max</RouterLink></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-secondary-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="text-secondary-400 text-sm mb-4 md:mb-0">
            &copy; {{ currentYear }} Xaurum Fintech Pvt Ltd. All rights reserved.
          </div>

          <div class="flex space-x-6 text-sm">
            <a href="#" class="text-secondary-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="text-secondary-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
