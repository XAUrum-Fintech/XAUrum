<template>
  <PageHeader title="Support">
    Need help with orob Desk or orob Sync? Email us and we'll get back to you.
  </PageHeader>

  <main class="container-x py-24">
    <section class="max-w-[36rem] rounded-2xl border border-[var(--border-1)] bg-[var(--bg-2)] p-8">
      <p class="text-sm text-[var(--fg-3)]">App help, account help, and grievances:</p>
      <a :href="`mailto:${supportEmail}`" class="btn-dark mt-4" data-testid="support-email-link">{{ supportEmail }}</a>
    </section>
  </main>
</template>

<script setup>
import PageHeader from '@/components/PageHeader.vue'
import { supportEmail } from '@/data/contactSettings'
</script>
