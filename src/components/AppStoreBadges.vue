<template>
  <div class="flex flex-wrap items-center" :class="compact ? 'gap-1.5' : 'gap-2.5'" data-testid="app-store-badges">
    <a
      href="https://apps.apple.com/app/id6768894477"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download orob on the App Store"
      class="block transition-opacity hover:opacity-80"
    >
      <img
        src="/brand/app-store-badge.svg"
        alt="Download on the App Store"
        :class="compact ? 'h-[30px] w-auto' : 'h-10 w-auto'"
      >
    </a>
    <a
      href="https://play.google.com/store/apps/details?id=com.orob.mobile"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get orob on Google Play"
      class="block transition-opacity hover:opacity-80"
    >
      <img
        src="/brand/google-play-badge.png"
        alt="Get it on Google Play"
        :class="compact ? 'h-[30px] w-auto' : 'h-10 w-auto'"
      >
    </a>
  </div>
</template>

<script setup>
defineProps({ compact: { type: Boolean, default: false } })
</script>
