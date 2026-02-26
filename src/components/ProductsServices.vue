<template>
  <section id="products" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Our Products & Services
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Innovative financial technology solutions designed to transform how businesses and individuals 
          interact with digital finance and precious metals trading.
        </p>
      </div>

      <!-- Featured Product - OroB -->
      <div class="mb-20">
        <div class="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span class="text-sm font-semibold text-primary-600 uppercase tracking-wide">Featured Product</span>
              </div>
              
              <h3 class="text-3xl font-bold text-gray-900 mb-4">
                OroB - Bullion Trading Platform
              </h3>
              
              <p class="text-lg text-gray-600 mb-6">
                A comprehensive multi-tenant platform for precious metals trading with real-time pricing, 
                customizable templates, and enterprise-grade security. Perfect for bullion dealers and 
                precious metals businesses.
              </p>
              
              <div class="space-y-3 mb-8">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-gray-700">Real-time precious metals pricing</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-gray-700">Multi-tenant architecture</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-gray-700">Customizable templates & branding</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-gray-700">Enterprise security & compliance</span>
                </div>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4">
                <a href="#contact" class="btn-primary">
                  Request Demo
                </a>
                <a href="#" class="btn-outline">
                  View Case Studies
                </a>
              </div>
            </div>
            
            <!-- Product Preview -->
            <div class="relative">
              <div class="bg-white rounded-xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                <!-- Mock OroB Interface -->
                <div class="space-y-4">
                  <div class="flex items-center justify-between border-b pb-4">
                    <div class="flex items-center space-x-3">
                      <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg"></div>
                      <span class="font-semibold">OroB Dashboard</span>
                    </div>
                    <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Live Data</span>
                  </div>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <div class="bg-gray-50 p-3 rounded-lg">
                      <div class="text-xs text-gray-500">LBMA Gold</div>
                      <div class="text-lg font-bold text-primary-600">₹6,842.50</div>
                      <div class="text-xs text-green-500">+0.5% ↗</div>
                    </div>
                    <div class="bg-gray-50 p-3 rounded-lg">
                      <div class="text-xs text-gray-500">LBMA Silver</div>
                      <div class="text-lg font-bold text-secondary-600">₹82.75</div>
                      <div class="text-xs text-red-500">-0.2% ↘</div>
                    </div>
                  </div>
                  
                  <div class="space-y-2">
                    <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span class="text-sm font-medium">Gold Bar 10g</span>
                      <span class="text-sm font-bold text-primary-600">₹6,992.50</span>
                    </div>
                    <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span class="text-sm font-medium">Silver Coin 1oz</span>
                      <span class="text-sm font-bold text-secondary-600">₹91.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Other Services -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Fintech Solutions -->
        <div class="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
          <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            Custom Fintech Solutions
          </h3>
          
          <p class="text-gray-600 mb-6">
            Tailored financial technology solutions for banks, financial institutions, and fintech startups. 
            From payment processing to digital wallets.
          </p>
          
          <a href="#contact" class="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
            Learn More →
          </a>
        </div>

        <!-- API Services -->
        <div class="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
          <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            Financial APIs
          </h3>
          
          <p class="text-gray-600 mb-6">
            Robust and secure APIs for financial data, payment processing, and market information. 
            Easy integration with comprehensive documentation.
          </p>
          
          <a href="#contact" class="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
            Explore APIs →
          </a>
        </div>

        <!-- Consulting -->
        <div class="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
          <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
            </svg>
          </div>
          
          <h3 class="text-xl font-bold text-gray-900 mb-4">
            Fintech Consulting
          </h3>
          
          <p class="text-gray-600 mb-6">
            Strategic consulting for digital transformation, regulatory compliance, and technology 
            implementation in the financial services sector.
          </p>
          
          <a href="#contact" class="text-primary-500 font-semibold hover:text-primary-600 transition-colors">
            Get Consultation →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Products and Services component
</script>