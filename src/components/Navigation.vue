<template>
  <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <div class="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">X</span>
            </div>
            <span class="ml-3 text-2xl font-bold text-gray-900">Xaurum Fintech</span>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <RouterLink to="/" class="text-gray-900 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">Home</RouterLink>
            <RouterLink to="/pricing" class="text-gray-900 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">Pricing</RouterLink>
            <RouterLink to="/about" class="text-gray-900 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">About</RouterLink>
            <a href="/#contact" class="text-gray-900 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors">Contact</a>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <a href="/#contact" class="btn-primary">
            Get Started
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="mobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
        <RouterLink to="/" class="text-gray-900 hover:text-primary-500 block px-3 py-2 text-base font-medium" @click="mobileMenuOpen = false">Home</RouterLink>
        <RouterLink to="/pricing" class="text-gray-900 hover:text-primary-500 block px-3 py-2 text-base font-medium" @click="mobileMenuOpen = false">Pricing</RouterLink>
        <RouterLink to="/about" class="text-gray-900 hover:text-primary-500 block px-3 py-2 text-base font-medium" @click="mobileMenuOpen = false">About</RouterLink>
        <a href="/#contact" class="text-gray-900 hover:text-primary-500 block px-3 py-2 text-base font-medium" @click="mobileMenuOpen = false">Contact</a>
        <div class="px-3 py-2">
          <a href="/#contact" class="btn-primary w-full text-center block">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>
