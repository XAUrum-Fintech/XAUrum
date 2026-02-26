<template>
  <section id="home" class="pt-16 bg-gradient-to-br from-primary-50 to-secondary-50 min-h-screen flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Revolutionizing
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Financial Technology
            </span>
            for the Future
          </h1>
          
          <p class="text-xl text-gray-600 mb-8 max-w-2xl">
            Xaurum Fintech delivers cutting-edge financial solutions that empower businesses and individuals 
            to thrive in the digital economy. From bullion trading platforms to innovative fintech applications.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#products" class="btn-primary text-lg px-8 py-4">
              Explore Our Products
            </a>
            <a href="#about" class="btn-outline text-lg px-8 py-4">
              Learn More
            </a>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-500">500+</div>
              <div class="text-sm text-gray-600">Active Users</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-500">₹100Cr+</div>
              <div class="text-sm text-gray-600">Transactions</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-500">99.9%</div>
              <div class="text-sm text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
        
        <!-- Right Content - Hero Image/Graphic -->
        <div class="relative">
          <div class="relative z-10">
            <!-- Main Hero Graphic -->
            <div class="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div class="space-y-4">
                <!-- Mock Dashboard -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                    <span class="font-semibold text-gray-900">OroB Platform</span>
                  </div>
                  <div class="text-green-500 font-semibold">● Live</div>
                </div>
                
                <!-- Mock Price Cards -->
                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg">
                    <div class="text-xs text-gray-500 uppercase">Gold</div>
                    <div class="text-lg font-bold text-primary-600">₹6,842.50</div>
                    <div class="text-xs text-green-500">↗ +0.5%</div>
                  </div>
                  <div class="bg-gradient-to-r from-secondary-50 to-secondary-100 p-4 rounded-lg">
                    <div class="text-xs text-gray-500 uppercase">Silver</div>
                    <div class="text-lg font-bold text-secondary-600">₹82.75</div>
                    <div class="text-xs text-red-500">↘ -0.2%</div>
                  </div>
                </div>
                
                <!-- Mock Chart -->
                <div class="h-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg flex items-end justify-center space-x-1 p-2">
                  <div class="w-2 bg-primary-300 rounded-t" style="height: 40%"></div>
                  <div class="w-2 bg-primary-400 rounded-t" style="height: 60%"></div>
                  <div class="w-2 bg-primary-500 rounded-t" style="height: 80%"></div>
                  <div class="w-2 bg-primary-600 rounded-t" style="height: 70%"></div>
                  <div class="w-2 bg-secondary-400 rounded-t" style="height: 90%"></div>
                  <div class="w-2 bg-secondary-500 rounded-t" style="height: 75%"></div>
                  <div class="w-2 bg-secondary-600 rounded-t" style="height: 85%"></div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Background Elements -->
          <div class="absolute top-4 right-4 w-72 h-72 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div class="absolute bottom-4 left-4 w-72 h-72 bg-gradient-to-r from-secondary-200 to-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style="animation-delay: 2s;"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Hero section component
</script>