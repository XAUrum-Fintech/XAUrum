<template>
  <section id="home" class="pt-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 min-h-screen flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left">
          <div class="inline-flex items-center bg-primary-100 text-primary-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Launching Soon — India's Modern Bullion Platform
          </div>

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-900 mb-6 leading-tight">
            Trade. Hedge.
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
              Deliver.
            </span>
          </h1>

          <p class="text-xl text-secondary-600 mb-8 max-w-2xl">
            OroB is a cloud-native bullion trading platform built for Indian wholesalers and dealers.
            Real-time pricing, unified order &amp; risk management, and multi-tenant architecture — all in one place.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" class="btn-primary text-lg px-8 py-4">
              Request a Demo
            </a>
            <RouterLink to="/pricing" class="btn-outline text-lg px-8 py-4">
              View Pricing
            </RouterLink>
          </div>

          <!-- Value props instead of fake stats -->
          <div class="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-secondary-200">
            <div class="text-center">
              <div class="text-lg font-bold text-primary-600">Real-time</div>
              <div class="text-sm text-secondary-500">Price Streaming</div>
            </div>
            <div class="text-center">
              <div class="text-lg font-bold text-primary-600">Multi-tenant</div>
              <div class="text-sm text-secondary-500">Architecture</div>
            </div>
            <div class="text-center">
              <div class="text-lg font-bold text-primary-600">Cloud-native</div>
              <div class="text-sm text-secondary-500">Infrastructure</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Product Mock -->
        <div class="relative">
          <div class="relative z-10">
            <!-- Main Product Mock -->
            <div class="bg-white rounded-2xl shadow-2xl border border-secondary-100 overflow-hidden">
              <!-- App bar -->
              <div class="bg-secondary-900 px-6 py-3 flex items-center justify-between">
                <div class="flex items-center space-x-3">
                  <img src="/logo.png" alt="OroB" class="w-6 h-6" />
                  <span class="font-semibold text-white text-sm">OroB Dashboard</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span class="text-xs text-green-400">Live</span>
                </div>
              </div>

              <div class="p-6 space-y-4">
                <!-- Price Tiles -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-xl border border-primary-200">
                    <div class="text-xs text-secondary-500 uppercase font-medium">Gold 999 (10g)</div>
                    <div class="text-xl font-bold text-secondary-900 mt-1">&#8377;73,245</div>
                    <div class="flex items-center mt-1">
                      <svg class="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 6.414l-3.293 3.293a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>
                      <span class="text-xs text-green-600 font-medium">+0.42%</span>
                    </div>
                  </div>
                  <div class="bg-gradient-to-br from-secondary-50 to-secondary-100 p-4 rounded-xl border border-secondary-200">
                    <div class="text-xs text-secondary-500 uppercase font-medium">Silver (1kg)</div>
                    <div class="text-xl font-bold text-secondary-900 mt-1">&#8377;89,120</div>
                    <div class="flex items-center mt-1">
                      <svg class="w-3 h-3 text-red-500 mr-1 rotate-180" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 6.414l-3.293 3.293a1 1 0 01-1.414 0z" clip-rule="evenodd"/></svg>
                      <span class="text-xs text-red-600 font-medium">-0.18%</span>
                    </div>
                  </div>
                </div>

                <!-- Order Book Mini -->
                <div class="bg-secondary-50 rounded-xl p-4">
                  <div class="flex justify-between items-center mb-3">
                    <span class="text-sm font-semibold text-secondary-700">Recent Orders</span>
                    <span class="text-xs text-secondary-400">MCX Synced</span>
                  </div>
                  <div class="space-y-2">
                    <div class="flex justify-between items-center text-sm">
                      <span class="text-secondary-600">Gold Bar 10g × 5</span>
                      <span class="font-medium text-green-600">BUY</span>
                    </div>
                    <div class="flex justify-between items-center text-sm">
                      <span class="text-secondary-600">Silver Coin 1oz × 20</span>
                      <span class="font-medium text-red-600">SELL</span>
                    </div>
                    <div class="flex justify-between items-center text-sm">
                      <span class="text-secondary-600">Gold 995 100g × 2</span>
                      <span class="font-medium text-green-600">BUY</span>
                    </div>
                  </div>
                </div>

                <!-- Mini Chart -->
                <div class="h-16 bg-gradient-to-r from-secondary-50 to-primary-50 rounded-xl flex items-end justify-around p-3">
                  <div class="w-3 bg-primary-300 rounded-t" style="height: 35%"></div>
                  <div class="w-3 bg-primary-400 rounded-t" style="height: 55%"></div>
                  <div class="w-3 bg-primary-500 rounded-t" style="height: 75%"></div>
                  <div class="w-3 bg-primary-400 rounded-t" style="height: 60%"></div>
                  <div class="w-3 bg-primary-500 rounded-t" style="height: 85%"></div>
                  <div class="w-3 bg-primary-600 rounded-t" style="height: 70%"></div>
                  <div class="w-3 bg-primary-500 rounded-t" style="height: 90%"></div>
                </div>

                <!-- Placeholder for real screenshot -->
                <p class="text-center text-xs text-secondary-400 italic">Product preview — replace with actual screenshot</p>
              </div>
            </div>
          </div>

          <!-- Background decoration -->
          <div class="absolute top-6 right-6 w-64 h-64 bg-gradient-to-r from-primary-200 to-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
          <div class="absolute bottom-6 left-6 w-64 h-64 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse" style="animation-delay: 2s;"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Hero section component
</script>
