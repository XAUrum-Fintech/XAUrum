<template>
  <nav class="bg-[var(--surface)]/95 backdrop-blur-sm border-b border-secondary-200/60 fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <RouterLink to="/" class="flex-shrink-0 flex items-center gap-2" data-testid="nav-brand">
          <img src="/logo.svg" alt="" aria-hidden="true" class="w-8 h-8" />
          <span class="text-lg font-semibold text-secondary-900">Xaurum Fintech</span>
        </RouterLink>

        <div class="hidden md:flex items-baseline gap-6">
          <RouterLink to="/orob-desk" class="text-secondary-600 hover:text-primary-600 text-sm font-medium transition-colors">orob Desk</RouterLink>
          <RouterLink to="/orob-sync" class="text-secondary-600 hover:text-primary-600 text-sm font-medium transition-colors">orob Sync</RouterLink>
          <RouterLink to="/company" class="text-secondary-600 hover:text-primary-600 text-sm font-medium transition-colors">Company</RouterLink>
          <RouterLink to="/support" class="text-secondary-600 hover:text-primary-600 text-sm font-medium transition-colors">Support</RouterLink>
        </div>

        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            aria-label="Toggle navigation menu"
            class="inline-flex items-center justify-center p-2 rounded-md text-secondary-600 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div v-show="mobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[var(--surface)] border-t border-secondary-200">
        <RouterLink to="/orob-desk" class="text-secondary-700 hover:text-primary-600 block px-3 py-2 text-base font-medium" @click="mobileMenuOpen = false">orob Desk</RouterLink>
        <RouterLink to="/orob-sync" class="text-secondary-700 hover:text-primary-600 block px-3 py-2 text-base font-medium" @click="mobileMenuOpen = false">orob Sync</RouterLink>
        <RouterLink to="/company" class="text-secondary-700 hover:text-primary-600 block px-3 py-2 text-base font-medium" @click="mobileMenuOpen = false">Company</RouterLink>
        <RouterLink to="/support" class="text-secondary-700 hover:text-primary-600 block px-3 py-2 text-base font-medium" @click="mobileMenuOpen = false">Support</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>
