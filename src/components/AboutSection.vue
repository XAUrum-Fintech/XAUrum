<template>
  <section id="about" class="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-secondary-900 mb-4">
          About Xaurum Fintech
        </h2>
        <p class="text-xl text-secondary-600 max-w-3xl mx-auto">
          We're building the technology backbone for India's bullion industry — replacing
          fragmented legacy systems with modern, reliable software.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Left Content -->
        <div>
          <h3 class="text-3xl font-bold text-secondary-900 mb-6">
            Our Mission
          </h3>

          <p class="text-lg text-secondary-600 mb-6">
            India's bullion market — with 400-500 organised bullion houses and thousands of regional
            sub-dealers — still relies on outdated desktop software and fragmented workflows.
            Xaurum Fintech was founded to change that.
          </p>

          <p class="text-lg text-secondary-600 mb-8">
            With OroB, we bring real-time resilient streaming data, a unified order and risk
            management system, and an extensible integration surface that legacy tools simply cannot match.
          </p>

          <!-- Key Values -->
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-secondary-900 mb-1">Built for Bullion</h4>
                <p class="text-secondary-600">Purpose-built for Indian bullion dealers — not generic trading software retrofitted for precious metals.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-secondary-900 mb-1">Cloud-Native &amp; Secure</h4>
                <p class="text-secondary-600">Row-level security, JWT auth, complete data isolation per tenant — enterprise-grade from day one.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-4 mt-1">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-secondary-900 mb-1">Integration Ready</h4>
                <p class="text-secondary-600">Designed to plug into Tally/SAP, banking APIs, logistics partners, and WhatsApp/SMS for alerts.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content -->
        <div class="relative">
          <div class="bg-white rounded-2xl shadow-2xl p-8">
            <!-- Company Info -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">2024</div>
                <div class="text-sm text-secondary-600">Founded</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">Coimbatore</div>
                <div class="text-sm text-secondary-600">Headquarters</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">Go + Vue</div>
                <div class="text-sm text-secondary-600">Tech Stack</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 mb-2">India</div>
                <div class="text-sm text-secondary-600">Target Market</div>
              </div>
            </div>

            <!-- Team -->
            <div class="border-t pt-6">
              <h4 class="font-semibold text-secondary-900 mb-4 text-center">Our Team</h4>
              <div class="flex justify-center space-x-3">
                <div class="w-11 h-11 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <span class="text-white font-semibold text-sm">HR</span>
                </div>
                <div class="w-11 h-11 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-full flex items-center justify-center">
                  <span class="text-white font-semibold text-sm">HN</span>
                </div>
                <div class="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                  <span class="text-white font-semibold text-sm">RK</span>
                </div>
                <div class="w-11 h-11 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center">
                  <span class="text-white font-semibold text-sm">RN</span>
                </div>
              </div>
              <p class="text-center text-sm text-secondary-500 mt-3">
                <RouterLink to="/team" class="text-primary-600 hover:text-primary-700 font-medium">Meet the team →</RouterLink>
              </p>
            </div>
          </div>

          <!-- Background decoration -->
          <div class="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-primary-200 to-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
        </div>
      </div>

      <!-- Technology Stack -->
      <div class="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-secondary-900 mb-4">
            Built with Modern Technology
          </h3>
          <p class="text-lg text-secondary-600 max-w-2xl mx-auto">
            Performant, secure, and scalable — designed for the demands of real-time bullion trading.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span class="font-bold text-primary-700">Vue</span>
            </div>
            <span class="text-sm text-secondary-600">Vue.js 3</span>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span class="font-bold text-primary-700">Go</span>
            </div>
            <span class="text-sm text-secondary-600">Golang</span>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span class="font-bold text-primary-700">PG</span>
            </div>
            <span class="text-sm text-secondary-600">PostgreSQL</span>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span class="font-bold text-primary-700">SB</span>
            </div>
            <span class="text-sm text-secondary-600">Supabase</span>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span class="font-bold text-primary-700">FL</span>
            </div>
            <span class="text-sm text-secondary-600">Flutter</span>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span class="font-bold text-primary-700">AWS</span>
            </div>
            <span class="text-sm text-secondary-600">Cloud</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// About section component
</script>
