<template>
  <ProductHero product-key="desk" eyebrow="FOR BULLIONS" launch-label="End of October 2026" :mark-size="34">
    <template #title>Your rates. Your brand. <span class="text-primary-400">Your desk.</span></template>
    <template #sub>A trading platform on the web and in a dedicated app, under your bullion's name. Stream your rates, take customer orders and manage your book. We build it, host it and keep it running.</template>
    <template #ctas>
      <SectionLink to="#contact" class="btn-light">Contact us</SectionLink>
    </template>
    <template #visual>
      <div
        class="flex w-full max-w-[520px] flex-col gap-4 justify-self-end"
        role="img"
        aria-label="Illustration of an orob Desk price formula for Gold 999, 10 g: MCX Gold benchmark ₹1,13,480 plus ₹420 premium plus ₹150 retail markup gives a sell rate of ₹1,14,050, and a new buy order arriving. Values are illustrative."
        data-testid="orob-desk-illustration"
      >
        <div class="rounded-2xl border border-white/12 bg-mock p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,.6)]">
          <div class="flex items-center gap-2.5">
            <span class="text-[11px] font-bold tracking-[0.14em] text-secondary-500">PRICE FORMULA</span>
            <LiveLabel class="ml-auto" />
          </div>
          <div class="mt-1.5 text-lg font-bold">Gold 999 · 10 g</div>
          <div class="mt-4 flex flex-col text-sm">
            <div v-for="line in formula" :key="line.label" class="flex justify-between border-t border-white/8 py-[11px]">
              <span class="text-secondary-300">{{ line.label }}</span><span class="font-num font-semibold">{{ line.value }}</span>
            </div>
            <div class="flex items-baseline justify-between border-t border-white/18 pt-3.5">
              <span class="font-bold">Your sell rate</span><span class="font-num text-[26px] font-bold text-primary-400">₹1,14,050</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-3.5 rounded-[14px] border border-white/12 bg-mock px-[18px] py-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)]">
          <span class="rounded-md bg-buy px-2.5 py-1 text-xs font-bold">BUY</span>
          <div class="min-w-0 flex-1">
            <div class="text-sm font-bold">New order · Sri Ganesh Jewellers</div>
            <div class="mt-0.5 text-[13px] text-secondary-400">5 × Gold 999 · 10 g</div>
          </div>
          <span class="font-num text-[15px] font-bold">₹5,70,250</span>
        </div>
      </div>
    </template>
  </ProductHero>

  <main>
    <section class="container-x py-24" aria-labelledby="desk-features-heading">
      <p class="eyebrow text-primary-700">WHAT YOU GET</p>
      <h2 id="desk-features-heading" class="mt-3.5 max-w-[40rem] text-[clamp(30px,3.4vw,40px)] leading-[1.15] font-bold tracking-[-0.025em] text-balance">Everything a bullion desk runs on, in one platform.</h2>
      <div class="mt-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-x-12 gap-y-10">
        <FeatureItem v-for="feature in features" :key="feature.title" v-bind="feature" />
      </div>
    </section>

    <AiBand
      eyebrow="INTELLIGENT HEDGING"
      heading="Keep your book balanced through the trading day."
      lede="orob Desk watches your position as orders come in and tells you when it's time to cover."
      :steps="aiSteps"
    />

    <StepCards eyebrow="GOING LIVE" heading="Live in three steps. We do the set-up." :steps="goingLive" />

    <FamilyLinks current="desk" />

    <ContactBand
      heading="See orob Desk with your rates and your brand."
      description="Tell us how you trade today, and we'll walk you through a set-up built around your desk."
    />
  </main>
</template>

<script setup>
import AiBand from '@/components/AiBand.vue'
import ContactBand from '@/components/ContactBand.vue'
import FamilyLinks from '@/components/FamilyLinks.vue'
import FeatureItem from '@/components/FeatureItem.vue'
import LiveLabel from '@/components/LiveLabel.vue'
import ProductHero from '@/components/ProductHero.vue'
import SectionLink from '@/components/SectionLink.vue'
import StepCards from '@/components/StepCards.vue'

const formula = [
  { label: 'MCX Gold benchmark', value: '₹1,13,480' },
  { label: 'Premium', value: '+ ₹420' },
  { label: 'Markup · Retail customers', value: '+ ₹150' },
]

const features = [
  { icon: 'radio', title: 'Live rate streaming', body: 'Your rates on a branded website and app, updating the moment the market moves.' },
  { icon: 'calculator', title: 'Price formula engine', body: 'Set premiums and markups on MCX or spot benchmarks, with different rates for each customer group.' },
  { icon: 'split', title: 'Order management', body: 'Market, limit and stop orders from customers, confirmed on your dealing desk.' },
  { icon: 'users', title: 'Customers and limits', body: 'Onboard customers, group them and set trading limits that are checked on every order.' },
  { icon: 'file-text', title: 'Invoicing and ledger', body: 'Every confirmed order flows into invoices and customer ledgers, with no re-entry.' },
  { icon: 'activity', title: 'Risk and MTM monitor', body: 'See your open position and mark-to-market across metals in real time.' },
]

const aiSteps = [
  { title: 'Watches your position', body: 'Your net long or short in each metal is updated with every confirmed order.' },
  { title: 'Suggests when and how much to cover', body: 'Suggestions take market movement and your own limits into account.' },
  { title: 'You stay in control', body: 'Nothing is placed without your confirmation on the dealing desk.' },
]

const goingLive = [
  { title: 'Your brand', body: 'Your domain, logo and colours on the website and app.' },
  { title: 'Your rates', body: 'Benchmarks, premiums and customer-group markups, set up with your team.' },
  { title: 'Your customers', body: 'Invite customers, set their limits and start taking orders.' },
]
</script>
