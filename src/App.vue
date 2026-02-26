<template>
  <div id="app">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Products & Services -->
    <ProductsServices />
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Call to Action -->
    <CallToAction />
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navigation from './components/Navigation.vue'
import HeroSection from './components/HeroSection.vue'
import ProductsServices from './components/ProductsServices.vue'
import AboutSection from './components/AboutSection.vue'
import CallToAction from './components/CallToAction.vue'
import Footer from './components/Footer.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>