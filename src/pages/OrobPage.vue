<template>
  <ProductHero product-key="orob" eyebrow="FOR JEWELLERS & BULLIONS" launch-label="Launching mid-October 2026">
    <template #title>Know the best <span class="text-primary-400">rate first.</span></template>
    <template #sub>One app to compare live gold and silver rates across bullions, with short market-mover updates that explain why prices moved.</template>
    <template #ctas>
      <SectionLink to="#contact" class="btn-light">Get notified at launch</SectionLink>
      <SectionLink to="#features" class="btn-ghost">What it does</SectionLink>
    </template>
    <template #visual>
      <div
        class="flex w-full max-w-[520px] items-start justify-center gap-5 justify-self-end"
        role="img"
        aria-label="Illustration of the orob app: sell rates for 10 g of Gold 999 from four bullions with the best rate highlighted, beside an AI market-mover note that gold is up 0.44% as the dollar eases. Rates are illustrative."
        data-testid="orob-illustration"
      >
        <div class="w-[300px] flex-none overflow-hidden rounded-[34px] border-6 border-secondary-800 bg-secondary-900 px-3.5 pt-[22px] pb-[18px] shadow-[0_40px_80px_-20px_rgba(0,0,0,.7)]">
          <div class="flex items-center gap-2 px-1">
            <ProductTile :size="26" :radius="7" :mark-size="16" />
            <span class="text-sm font-bold">orob</span>
            <LiveLabel small class="ml-auto" />
          </div>
          <div class="mx-1 mt-4 grid grid-cols-2 rounded-[9px] bg-white/6 p-[3px] text-xs font-bold">
            <span class="rounded-[7px] bg-white/12 p-1.5 text-center">Gold 999</span>
            <span class="p-1.5 text-center text-secondary-400">Silver 999</span>
          </div>
          <div class="mx-1 mt-3.5 mb-2 text-[11px] font-bold tracking-[0.14em] text-secondary-500">SELL RATES · 10 G</div>
          <div
            v-for="quote in quotes"
            :key="quote.bullion"
            class="mb-2 flex items-center gap-2 rounded-xl border bg-mock px-3 py-[11px]"
            :class="quote.best ? 'border-[rgba(251,191,36,.45)]' : 'border-white/8'"
          >
            <span class="min-w-0 flex-1 text-[13px] font-semibold">{{ quote.bullion }}</span>
            <span v-if="quote.best" class="rounded-[5px] bg-primary-600 px-1.5 py-0.5 text-[10px] font-extrabold tracking-[0.06em]">BEST</span>
            <span class="font-num text-[15px] font-bold" :class="quote.best ? 'text-primary-300' : 'text-white'">{{ quote.rate }}</span>
          </div>
        </div>
        <div class="mt-16 flex max-w-[274px] min-w-0 flex-1 flex-col gap-3">
          <div class="rounded-[14px] border border-white/12 bg-mock p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)]">
            <div class="flex items-center gap-2">
              <AiTag translucent />
              <span class="text-[11px] font-bold tracking-[0.14em] text-secondary-400">MARKET MOVER</span>
            </div>
            <div class="mt-2.5 text-sm leading-[1.4] font-bold">Gold up <span class="font-num text-up">+0.44%</span> as the dollar eases</div>
            <div class="mt-1.5 text-xs leading-normal text-secondary-400">Spot gold firmed overnight. Expect higher local rates at the open.</div>
          </div>
        </div>
      </div>
    </template>
  </ProductHero>

  <main>
    <section id="features" class="container-x py-24" aria-labelledby="orob-features-heading">
      <p class="eyebrow text-primary-700">WHAT IT DOES</p>
      <h2 id="orob-features-heading" class="mt-3.5 max-w-[40rem] text-[clamp(30px,3.4vw,40px)] leading-[1.15] font-bold tracking-[-0.025em] text-balance">Every bullion’s rate, side by side.</h2>
      <div class="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-x-12 gap-y-10">
        <FeatureItem v-for="feature in features" :key="feature.title" v-bind="feature" />
      </div>
    </section>

    <FamilyLinks current="orob" />

    <ContactBand
      heading="Be first to know when orob launches."
      description="orob launches in mid-October 2026. Leave your details and we’ll let you know the day it’s live."
      cta-label="Get notified"
    />
  </main>
</template>

<script setup>
import AiTag from '@/components/AiTag.vue'
import ContactBand from '@/components/ContactBand.vue'
import FamilyLinks from '@/components/FamilyLinks.vue'
import FeatureItem from '@/components/FeatureItem.vue'
import LiveLabel from '@/components/LiveLabel.vue'
import ProductHero from '@/components/ProductHero.vue'
import ProductTile from '@/components/ProductTile.vue'
import SectionLink from '@/components/SectionLink.vue'

const quotes = [
  { bullion: 'Kovai Bullion', rate: '₹1,14,020', best: true },
  { bullion: 'Sree Metals', rate: '₹1,14,060' },
  { bullion: 'Raja Gold House', rate: '₹1,14,110' },
  { bullion: 'Annapoorna Bullion', rate: '₹1,14,150' },
]

const features = [
  { icon: 'radio', title: 'Live rates across bullions', body: 'Gold and silver rates from bullions near you, updating as they change.' },
  { icon: 'star', title: 'The best rate, highlighted', body: 'The lowest quote for the product you’re watching is always on top.' },
  { icon: 'trending-up', title: 'Market-mover updates', body: 'Short, timely notes on what is moving gold and silver, so you know why before you buy.', ai: true },
]
</script>
