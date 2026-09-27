<template>
  <section class="py-16 bg-secondary-900 text-white">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-2xl md:text-3xl font-semibold mb-3">{{ heading }}</h2>
      <p class="text-secondary-300 mb-6">{{ description }}</p>
      <a :href="`mailto:${email}`" class="btn-accent inline-block" data-testid="contact-email-link">
        {{ email }}
      </a>
    </div>
  </section>
</template>

<script setup>
defineProps({
  heading: { type: String, default: 'Contact us' },
  description: { type: String, default: '' },
  email: { type: String, default: 'contact@xaurum.in' },
})
</script>
