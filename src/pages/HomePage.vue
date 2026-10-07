<template>
  <header class="relative overflow-hidden bg-secondary-900 text-white">
    <div class="pointer-events-none absolute top-[300px] left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-primary-600 opacity-[0.14] blur-[140px]" aria-hidden="true" />
    <Navigation />

    <div class="relative px-[var(--page-gutter)] pt-5 text-center">
      <h1 class="mx-auto max-w-[56rem] text-[clamp(36px,4.6vw,54px)] leading-[1.03] font-extrabold tracking-[-0.035em] text-balance text-white" data-testid="home-headline">
        Know the best rate first.<br><span class="text-primary-400">Your brand. Your desk.</span>
      </h1>
      <p class="mx-auto mt-3.5 max-w-[40rem] text-[clamp(16px,1.4vw,18px)] leading-[1.6] text-pretty text-secondary-400" data-testid="home-tagline">
        The orob family from Xaurum Fintech: live rate discovery for jewellers, branded trading platforms for bullions, and cloud accounting that keeps your books in sync.
      </p>
      <div class="mt-[22px] flex flex-wrap justify-center gap-3">
        <SectionLink to="/#contact" class="btn-light">Contact us</SectionLink>
        <SectionLink to="/#products" class="btn-ghost">Explore the products</SectionLink>
      </div>
      <HeroMock />
    </div>
  </header>

  <main>
    <section id="products" class="container-x scroll-mt-0 py-[104px]" aria-labelledby="products-heading">
      <div class="flex flex-col gap-2.5">
        <h2 id="products-heading" class="text-[clamp(30px,3.4vw,40px)] leading-[1.1] font-bold tracking-[-0.025em] text-[var(--fg-1)]">The orob family</h2>
        <p class="text-lg leading-normal text-[var(--fg-3)]">Purpose-built for Indian bullion markets.</p>
      </div>
      <div class="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6">
        <article
          v-for="card in productCards"
          :key="card.key"
          class="row-span-6 grid grid-rows-subgrid gap-y-0 rounded-2xl border border-[var(--border-1)] bg-[var(--bg-2)] p-8 transition-all duration-300 hover:border-secondary-300 hover:shadow-lg"
          data-testid="product-card"
        >
          <div class="flex items-start justify-between">
            <ProductTile :badge="card.badge" />
            <span class="rounded-full bg-primary-100 px-2.5 py-[3px] text-xs font-bold text-primary-800">{{ card.launch }}</span>
          </div>
          <p class="mt-6 text-xs font-bold tracking-[0.14em] text-[var(--fg-4)]">{{ card.eyebrow }}</p>
          <h3 class="mt-1.5 text-[26px] font-bold tracking-[-0.02em]">{{ card.name }}</h3>
          <p class="mt-2.5 text-[15px] leading-[1.6] text-pretty text-[var(--fg-3)]">
            <span class="font-bold text-[var(--fg-1)]">{{ card.tagline }}</span> {{ card.description }}
          </p>
          <ul class="mt-[22px] flex flex-col gap-2.5 self-start border-t border-[var(--border-1)] pt-[22px] text-sm text-[var(--fg-2)]">
            <li v-for="feature in card.features" :key="feature">{{ feature }}</li>
            <li class="flex items-center gap-2 font-semibold text-[var(--fg-1)]"><AiTag />{{ card.aiFeature }}</li>
          </ul>
          <RouterLink :to="card.path" class="self-end pt-7 text-sm font-bold text-[var(--fg-1)] transition-colors hover:text-primary-700">Explore {{ card.name }} →</RouterLink>
        </article>
      </div>
    </section>

    <section class="bg-secondary-900 text-white" aria-labelledby="ai-heading">
      <div class="container-x py-[72px]">
        <div class="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <div class="flex flex-col gap-2.5">
            <p class="flex items-center gap-2.5"><AiTag /><span class="eyebrow text-primary-400">INTELLIGENCE BUILT IN</span></p>
            <h2 id="ai-heading" class="text-[clamp(28px,3vw,36px)] leading-[1.15] font-bold tracking-[-0.025em] text-balance text-white">AI that does the bullion busywork.</h2>
          </div>
          <p class="max-w-[26rem] text-[15px] leading-[1.6] text-secondary-400">Built into each orob product, working on your own rates, orders and books, so your team decides faster.</p>
        </div>
        <div class="mt-9 grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5">
          <article v-for="item in aiFeatures" :key="item.title" class="flex flex-col rounded-[14px] border border-white/10 bg-white/4 p-[26px]">
            <div class="flex items-center justify-between">
              <LucideIcon :name="item.icon" class="text-primary-400" />
              <span class="text-[11px] font-bold tracking-[0.02em] text-secondary-400">{{ item.product }}</span>
            </div>
            <h3 class="mt-[18px] text-lg font-bold tracking-[-0.01em] text-white">{{ item.title }}</h3>
            <p class="mt-2 text-sm leading-[1.6] text-pretty text-secondary-300">{{ item.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="company" class="bg-white" aria-labelledby="company-heading">
      <div class="container-x grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-x-[72px] gap-y-12 py-[88px]">
        <div>
          <p class="eyebrow text-primary-700">COMPANY</p>
          <h2 id="company-heading" class="mt-3.5 text-[clamp(30px,3.4vw,40px)] leading-[1.15] font-bold tracking-[-0.025em] text-balance text-[var(--fg-1)]">An AI-first company that knows the bullion trade.</h2>
          <p class="mt-[18px] max-w-[32rem] text-[17px] leading-[1.6] text-pretty text-[var(--fg-3)]">Xaurum Fintech builds software for India's precious-metals business. Our team brings together experience in financial technology, commodity markets and the bullion trade, and we build AI into every product from day one, not as an add-on.</p>
          <p class="mt-6 max-w-[32rem] text-sm leading-[1.6] text-[var(--fg-4)]">The name comes from <span class="font-num font-semibold text-[var(--fg-2)]">XAU</span>, the market code for gold, and <em>aurum</em>, Latin for gold.</p>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-10 gap-y-8">
          <div v-for="pillar in pillars" :key="pillar.title" class="flex flex-col gap-2.5 border-t border-[var(--border-1)] pt-[22px]">
            <LucideIcon :name="pillar.icon" class="text-primary-600" />
            <h3 class="text-[17px] font-bold tracking-[-0.01em] text-[var(--fg-1)]">{{ pillar.title }}</h3>
            <p class="text-sm leading-[1.6] text-pretty text-[var(--fg-3)]">{{ pillar.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="security" class="border-y border-[var(--border-1)] bg-[image:var(--gradient-about)]" aria-labelledby="security-heading">
      <div class="container-x py-16">
        <div class="flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
          <div>
            <p class="eyebrow text-primary-700">SECURE STACK</p>
            <h2 id="security-heading" class="mt-3 text-[clamp(26px,2.6vw,32px)] leading-[1.2] font-bold tracking-[-0.02em] text-balance">Built to carry a bullion's rates, orders and books.</h2>
          </div>
          <p class="max-w-[26rem] text-[15px] leading-[1.6] text-[var(--fg-3)]">We host, monitor and update the platform, so your team has nothing to install or maintain.</p>
        </div>
        <div class="mt-9 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-5">
          <div v-for="item in securityItems" :key="item.title" class="rounded-xl border border-[var(--border-1)] bg-white px-6 py-[22px]">
            <LucideIcon :name="item.icon" inline class="text-secondary-900" />
            <h3 class="mt-3.5 text-base font-bold">{{ item.title }}</h3>
            <p class="mt-1.5 text-sm leading-[1.55] text-[var(--fg-3)]">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <ContactSection />
  </main>
</template>

<script setup>
import { computed } from 'vue'
import AiTag from '@/components/AiTag.vue'
import ContactSection from '@/components/ContactSection.vue'
import HeroMock from '@/components/HeroMock.vue'
import LucideIcon from '@/components/LucideIcon.vue'
import Navigation from '@/components/Navigation.vue'
import ProductTile from '@/components/ProductTile.vue'
import SectionLink from '@/components/SectionLink.vue'
import { products } from '@/data/products'

const cardCopy = {
  orob: {
    eyebrow: 'FOR JEWELLERS & BULLIONS',
    description: 'Compare live gold and silver rates across bullions in one app.',
    features: ['Live rates across bullions', 'For jewellers and bullions', 'Launching mid-October'],
    aiFeature: 'Market-mover updates',
  },
  desk: {
    eyebrow: 'FOR BULLIONS',
    description: 'Stream live rates and take customer orders on the web and in your own app.',
    features: ['Branded web platform and app', 'Live rates to every customer', 'Hosted and maintained by us'],
    aiFeature: 'Intelligent hedging',
  },
  sync: {
    eyebrow: 'FOR ACCOUNTS TEAMS',
    description: 'Books stay in sync, so no entry is keyed in twice.',
    features: ['Connects to Tally Prime', 'No manual re-entry', 'Your books, reachable anywhere'],
    aiFeature: 'Intelligent bookkeeping',
  },
}

const productCards = computed(() => products.map((product) => ({ ...product, ...cardCopy[product.key] })))

const allAiFeatures = [
  {
    key: 'orob',
    product: 'orob',
    icon: 'trending-up',
    title: 'Market-mover updates',
    body: 'Short, timely updates on what is moving gold and silver, from the dollar to duty changes, so you know why rates moved before you buy.',
  },
  {
    key: 'desk',
    product: 'orob Desk',
    icon: 'shield-check',
    title: 'Intelligent hedging',
    body: 'Watches your open position as orders come in and suggests when and how much to cover, so your book stays balanced through the trading day.',
  },
  {
    key: 'sync',
    product: 'orob Sync',
    icon: 'file-text',
    title: 'Intelligent bookkeeping',
    body: 'Reads invoices and bills, drafts the entries and flags anything that doesn’t match, so your accountant reviews instead of retyping.',
  },
]

const aiFeatures = computed(() => allAiFeatures.filter((item) => products.some((product) => product.key === item.key)))

const pillars = [
  { icon: 'sparkles', title: 'AI first', body: 'Every product is designed around models that read markets, positions and books, so dealers spend less time on routine work.' },
  { icon: 'landmark', title: 'Fintech', body: 'Cloud-native, multi-tenant platforms built to the security and reliability standards that financial software demands.' },
  { icon: 'chart-candlestick', title: 'Markets', body: 'We understand how MCX, spot and currency moves flow into a dealer’s rates, hedges and margins.' },
  { icon: 'coins', title: 'Precious metals', body: 'Built around how gold and silver are actually priced, traded, delivered and accounted for in India.' },
]

const securityItems = [
  { icon: 'database', title: 'Isolated tenant data', body: "Row-level security keeps each bullion's data separate at the database." },
  { icon: 'lock', title: 'Encrypted in transit', body: 'Rates, orders and books move over encrypted connections end to end.' },
  { icon: 'activity', title: 'Hosted and monitored', body: 'Cloud-native and watched around the clock. Updates ship without disrupting your trading day.' },
]
</script>
