<template>
  <main class="pt-24 pb-20">
    <section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
      <p class="text-xs font-semibold uppercase tracking-wide text-primary-600 mb-3">For bullions</p>
      <h1 class="text-3xl md:text-4xl font-semibold text-secondary-900 mb-4">orob Sync</h1>
      <p class="text-lg text-secondary-600 max-w-2xl mx-auto">
        Keeps your business's accounting books in sync automatically.
      </p>
      <p class="text-sm text-secondary-500 max-w-xl mx-auto mt-4">
        orob Sync connects to Tally Prime and keeps your entries up to date without manual re-entry.
      </p>
    </section>

    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <svg viewBox="0 0 720 200" class="w-full h-auto" role="img" aria-label="Diagram: Tally Prime connects to orob Sync, which keeps a cloud copy of your books in sync">
        <g font-family="Geist, system-ui, sans-serif">
          <rect x="20" y="60" width="180" height="80" rx="16" fill="var(--surface-2)" stroke="var(--line)" />
          <text x="110" y="106" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">Tally Prime</text>

          <path d="M200 100 H300" stroke="var(--ink-3)" stroke-width="2" marker-end="url(#arrow)" fill="none" />

          <rect x="300" y="50" width="180" height="100" rx="16" fill="var(--accent-soft)" stroke="var(--accent)" />
          <text x="390" y="96" text-anchor="middle" font-size="16" font-weight="600" fill="var(--accent-ink)">orob Sync</text>
          <text x="390" y="118" text-anchor="middle" font-size="12" fill="var(--accent-ink)">keeps books in sync</text>

          <path d="M480 100 H580" stroke="var(--ink-3)" stroke-width="2" marker-end="url(#arrow)" fill="none" />

          <rect x="580" y="60" width="120" height="80" rx="16" fill="var(--surface-2)" stroke="var(--line)" />
          <text x="640" y="106" text-anchor="middle" font-size="16" font-weight="600" fill="var(--ink)">Cloud</text>

          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 Z" fill="var(--ink-3)" />
            </marker>
          </defs>
        </g>
      </svg>
    </section>

    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card p-6">
          <h2 class="font-semibold text-secondary-900 mb-2">No manual re-entry</h2>
          <p class="text-secondary-600 text-sm">Entries flow through automatically, so your books stay current.</p>
        </div>
        <div class="card p-6">
          <h2 class="font-semibold text-secondary-900 mb-2">A cloud copy</h2>
          <p class="text-secondary-600 text-sm">Your books are kept in sync in the cloud, so you can reach them from anywhere.</p>
        </div>
        <div class="card p-6">
          <h2 class="font-semibold text-secondary-900 mb-2">Built for bullion</h2>
          <p class="text-secondary-600 text-sm">Set up for how a bullion business actually keeps its accounts.</p>
        </div>
      </div>
    </section>

    <ContactBand
      heading="Interested in orob Sync?"
      description="Tell us about your business and we'll get back to you."
      email="contact@xaurum.in"
    />
  </main>
</template>

<script setup>
import ContactBand from '@/components/ContactBand.vue'
</script>
