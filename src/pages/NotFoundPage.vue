<template>
  <PageHeader title="Page not found">
    The page you're looking for doesn't exist.
  </PageHeader>

  <main class="container-x py-24">
    <RouterLink to="/" class="btn-dark">Go home</RouterLink>
  </main>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
</script>
