<template>
  <section id="contact" class="bg-[image:var(--gradient-cta)] text-white" aria-labelledby="contact-band-heading">
    <div class="container-x flex flex-wrap items-center justify-between gap-x-16 gap-y-8 py-20">
      <div class="max-w-[36rem]">
        <h2 id="contact-band-heading" class="text-[clamp(28px,3vw,36px)] leading-[1.15] font-bold tracking-[-0.025em] text-balance text-white">{{ heading }}</h2>
        <p class="mt-3.5 text-base leading-[1.6] text-secondary-300">{{ description }}</p>
      </div>
      <div class="flex flex-wrap gap-3">
        <SectionLink to="/#contact" class="btn-light">{{ ctaLabel }}</SectionLink>
        <a :href="`mailto:${contactEmail}`" class="btn-ghost" data-testid="contact-email-link">{{ contactEmail }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionLink from '@/components/SectionLink.vue'
import { contactEmail } from '@/data/contactSettings'

// The closing band on each product page: "Contact us" goes to the homepage enquiry form.
defineProps({
  heading: { type: String, required: true },
  description: { type: String, required: true },
  ctaLabel: { type: String, default: 'Contact us' },
})
</script>
