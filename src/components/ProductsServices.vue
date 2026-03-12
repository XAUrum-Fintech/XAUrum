<template>
  <section id="products" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-secondary-900 mb-4">
          Why OroB?
        </h2>
        <p class="text-xl text-secondary-600 max-w-3xl mx-auto">
          India's bullion trade still runs on fragmented legacy software. OroB replaces outdated desktop
          tools with a unified, cloud-native platform designed for how dealers actually work.
        </p>
      </div>

      <!-- Core Capabilities -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <!-- Real-time Pricing -->
        <div class="bg-white border border-secondary-200 rounded-xl p-8 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
          <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-secondary-900 mb-3">Live Price Streaming</h3>
          <p class="text-secondary-600">
            Real-time MCX futures and international spot prices (LBMA/COMEX) with dealer-specific markups
            and sub-second price tile updates.
          </p>
        </div>

        <!-- Order Management -->
        <div class="bg-white border border-secondary-200 rounded-xl p-8 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
          <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-secondary-900 mb-3">Unified Order Management</h3>
          <p class="text-secondary-600">
            Market, Limit, Stop, and Bracket orders with flexible routing, bucket-or-route workflows,
            and complete audit trails.
          </p>
        </div>

        <!-- Risk Management -->
        <div class="bg-white border border-secondary-200 rounded-xl p-8 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
          <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-secondary-900 mb-3">Risk &amp; Margin Controls</h3>
          <p class="text-secondary-600">
            Real-time exposure checks, net position tracking, configurable credit limits, automated
            margin calls, and hedging triggers.
          </p>
        </div>

        <!-- Multi-tenant -->
        <div class="bg-white border border-secondary-200 rounded-xl p-8 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
          <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-secondary-900 mb-3">Multi-Tenant Platform</h3>
          <p class="text-secondary-600">
            Complete data isolation with row-level security. Each dealer gets their own branded
            workspace with custom domain, markup profiles, and customer groups.
          </p>
        </div>

        <!-- Customer & Back Office -->
        <div class="bg-white border border-secondary-200 rounded-xl p-8 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
          <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-secondary-900 mb-3">Customer &amp; Back Office</h3>
          <p class="text-secondary-600">
            Hierarchical customer management, role-based access, invoicing, receipts, delivery tracking,
            and ledger with payment reconciliation.
          </p>
        </div>

        <!-- Mobile & Web -->
        <div class="bg-white border border-secondary-200 rounded-xl p-8 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
          <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-secondary-900 mb-3">Web + Mobile Apps</h3>
          <p class="text-secondary-600">
            Responsive web dashboard plus mobile-optimised PWA. Dedicated mobile apps for
            dealers and their customers with real-time notifications.
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center">
        <div class="inline-flex flex-col sm:flex-row gap-4">
          <a href="#contact" class="btn-primary text-lg px-8 py-4">
            Request a Demo
          </a>
          <RouterLink to="/pricing" class="btn-outline text-lg px-8 py-4">
            See Pricing Plans
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Products and Services component
</script>
