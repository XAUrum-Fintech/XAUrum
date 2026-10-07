<template>
  <nav class="relative" aria-label="Main">
    <div class="container-x flex items-center gap-3 py-3 min-[900px]:gap-[44px]">
      <RouterLink to="/" data-testid="nav-brand">
        <BrandLogo on-dark />
      </RouterLink>

      <div class="hidden gap-[30px] text-sm font-semibold min-[900px]:flex">
        <SectionLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="transition-colors hover:text-white"
          :class="link.active ? 'text-white' : 'text-secondary-300'"
          :aria-current="link.active ? 'page' : undefined"
        >{{ link.label }}</SectionLink>
      </div>

      <SectionLink
        :to="contactTo"
        class="ml-auto whitespace-nowrap rounded-lg bg-white px-[18px] py-2.5 text-sm font-bold text-secondary-900 transition-colors hover:bg-secondary-100"
        data-testid="nav-contact"
      >Contact us</SectionLink>

      <button
        type="button"
        class="-mr-2 inline-flex items-center justify-center rounded-lg p-2 text-secondary-300 transition-colors hover:text-white min-[900px]:hidden"
        :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <LucideIcon :name="mobileMenuOpen ? 'x' : 'menu'" :size="22" :stroke-width="2" />
      </button>
    </div>

    <div v-show="mobileMenuOpen" id="mobile-menu" class="container-x pb-4 min-[900px]:hidden">
      <div class="flex flex-col border-t border-white/10 pt-2">
        <SectionLink
          v-for="link in links"
          :key="link.label"
          :to="link.to"
          class="py-2.5 text-[15px] font-semibold transition-colors hover:text-white"
          :class="link.active ? 'text-white' : 'text-secondary-300'"
          @click="mobileMenuOpen = false"
        >{{ link.label }}</SectionLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed, ref } from 'vue'
import BrandLogo from '@/components/BrandLogo.vue'
import LucideIcon from '@/components/LucideIcon.vue'
import SectionLink from '@/components/SectionLink.vue'

const props = defineProps({
  // Product pages highlight "Products" and point "Contact us" at their own contact band.
  productsActive: { type: Boolean, default: false },
  contactTo: { type: String, default: '/#contact' },
})

const mobileMenuOpen = ref(false)

const links = computed(() => [
  { label: 'Products', to: '/#products', active: props.productsActive },
  { label: 'Company', to: '/#company' },
  { label: 'Security', to: '/#security' },
  { label: 'Support', to: '/support' },
])
</script>
