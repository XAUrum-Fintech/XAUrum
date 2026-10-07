<template>
  <ProductHero product-key="sync" eyebrow="FOR ACCOUNTS TEAMS" launch-label="November 2026">
    <template #title>Your Tally, <span class="text-primary-400">in the cloud.</span></template>
    <template #sub>orob Sync connects the Tally Prime books you already keep to the cloud and keeps them in sync, so your accounts team never keys an entry in twice.</template>
    <template #ctas>
      <SectionLink to="#contact" class="btn-light">Contact us</SectionLink>
      <SectionLink to="#how" class="btn-ghost">How it works</SectionLink>
    </template>
    <template #visual>
      <div
        class="relative h-[440px] w-full max-w-[540px] justify-self-end"
        role="img"
        aria-label="Illustration of orob Sync: a Tally Prime day book on the office PC, synced two minutes ago to a cloud view showing receivables, cash and bank balances, and an AI flag on a bill whose GST doesn't match the ledger. Values are illustrative."
        data-testid="orob-sync-illustration"
      >
        <div class="absolute top-0 left-0 w-[76%] overflow-hidden rounded-[10px] border border-white/20 bg-secondary-100 text-[var(--fg-1)] shadow-[0_30px_60px_-20px_rgba(0,0,0,.6)]">
          <div class="flex items-center gap-2 bg-secondary-700 px-3 py-2 text-[11px] font-semibold text-white">
            <LucideIcon name="monitor" :size="13" :stroke-width="2" />Tally Prime · Your Bullion House<span class="ml-auto font-medium text-secondary-300">Office PC</span>
          </div>
          <div class="px-3 py-2.5">
            <div class="text-[10px] font-bold tracking-[0.14em] text-[var(--fg-4)]">DAY BOOK</div>
            <div v-for="entry in dayBook" :key="entry.party" class="grid grid-cols-[44px_58px_minmax(0,1fr)_auto] items-center gap-2 border-t border-[var(--border-1)] py-[7px] text-[11px]">
              <span class="font-num text-[var(--fg-4)]">{{ entry.date }}</span>
              <span class="font-semibold text-[var(--fg-2)]">{{ entry.type }}</span>
              <span class="truncate text-[var(--fg-2)]">{{ entry.party }}</span>
              <span class="font-num font-semibold">{{ entry.amount }}</span>
            </div>
          </div>
        </div>

        <div class="absolute top-[178px] left-[58%] z-[2] flex -translate-x-1/2 items-center gap-2 rounded-full border-2 border-secondary-900 bg-orob px-3.5 py-2 text-xs font-bold whitespace-nowrap text-white shadow-[0_12px_24px_-8px_rgba(0,0,0,.6)]">
          <LucideIcon name="refresh-cw" :size="14" :stroke-width="2.5" />orob Sync · 2 min ago
        </div>

        <div class="absolute right-0 bottom-0 w-[78%] overflow-hidden rounded-[14px] border border-white/14 bg-mock shadow-[0_40px_80px_-20px_rgba(0,0,0,.7)]">
          <div class="flex items-center gap-[7px] border-b border-white/8 px-3.5 py-2.5">
            <span v-for="dot in 3" :key="dot" class="size-[9px] rounded-full bg-secondary-700" />
            <span class="ml-2.5 rounded-md bg-white/6 px-3 py-[3px] text-[11px] text-secondary-400">books.orob.in</span>
          </div>
          <div class="px-4 pt-3.5 pb-4">
            <div class="flex items-center gap-2">
              <span class="text-[13px] font-bold">Your Bullion House</span>
              <LiveLabel label="IN SYNC" small class="ml-auto" />
            </div>
            <div class="mt-3 grid grid-cols-2 gap-2.5">
              <div v-for="tile in balances" :key="tile.label" class="rounded-[10px] border border-white/8 bg-white/5 px-3 py-2.5">
                <div class="text-[10px] font-bold tracking-[0.12em] text-secondary-500">{{ tile.label }}</div>
                <div class="font-num mt-1 text-base font-bold">{{ tile.value }}</div>
              </div>
            </div>
            <div class="mt-2.5 flex items-center gap-2.5 rounded-[10px] border border-[rgba(251,191,36,.3)] bg-[rgba(251,191,36,.06)] px-3 py-2.5">
              <AiTag translucent />
              <span class="min-w-0 flex-1 text-xs text-secondary-300"><span class="font-bold text-white">PB-0881</span> · GST doesn't match the ledger</span>
              <span class="text-xs font-bold text-primary-300">Review</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </ProductHero>

  <main>
    <section id="features" class="container-x py-24" aria-labelledby="sync-features-heading">
      <p class="eyebrow text-primary-700">WHAT YOU GET</p>
      <h2 id="sync-features-heading" class="mt-3.5 max-w-[40rem] text-[clamp(30px,3.4vw,40px)] leading-[1.15] font-bold tracking-[-0.025em] text-balance">Keep Tally. Lose the double entry.</h2>
      <div class="mt-12 grid max-w-[960px] grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-x-16 gap-y-10">
        <FeatureItem v-for="feature in features" :key="feature.title" v-bind="feature" />
      </div>
    </section>

    <StepCards id="how" eyebrow="HOW IT WORKS" heading="Connected in an afternoon." :steps="howItWorks" />

    <AiBand
      eyebrow="INTELLIGENT BOOKKEEPING"
      heading="Your accountant reviews. orob Sync does the typing."
      lede="Upload an invoice or bill, and orob Sync turns it into a draft entry for approval."
      :steps="aiSteps"
    />

    <FamilyLinks current="sync" />

    <ContactBand
      heading="Bring your Tally books to the cloud."
      description="Tell us how your accounts team works today, and we’ll show you orob Sync on your own Tally company."
    />
  </main>
</template>

<script setup>
import AiBand from '@/components/AiBand.vue'
import AiTag from '@/components/AiTag.vue'
import ContactBand from '@/components/ContactBand.vue'
import FamilyLinks from '@/components/FamilyLinks.vue'
import FeatureItem from '@/components/FeatureItem.vue'
import LiveLabel from '@/components/LiveLabel.vue'
import LucideIcon from '@/components/LucideIcon.vue'
import ProductHero from '@/components/ProductHero.vue'
import SectionLink from '@/components/SectionLink.vue'
import StepCards from '@/components/StepCards.vue'

const dayBook = [
  { date: '06-Oct', type: 'Sales', party: 'Sri Ganesh Jewellers', amount: '₹5,70,250' },
  { date: '06-Oct', type: 'Receipt', party: 'Kovai Traders', amount: '₹2,40,000' },
  { date: '05-Oct', type: 'Purchase', party: 'Sree Metals', amount: '₹11,32,600' },
  { date: '05-Oct', type: 'Payment', party: 'HDFC Bank', amount: '₹1,85,000' },
]

const balances = [
  { label: 'RECEIVABLES', value: '₹18,42,300' },
  { label: 'CASH & BANK', value: '₹42,15,780' },
]

const features = [
  { icon: 'server', title: 'Works with your Tally Prime', body: 'No migration. Your team keeps working in Tally the way it does today.' },
  { icon: 'refresh-cw', title: 'Continuous sync', body: 'Vouchers and ledgers move to the cloud in the background, without anyone exporting files.' },
  { icon: 'globe', title: 'Books reachable anywhere', body: 'Check balances, ledgers and outstanding from any browser, not just the office machine.' },
  { icon: 'file-text', title: 'Intelligent bookkeeping', body: 'Reads invoices and bills, drafts the entries and flags anything that doesn’t match.', ai: true },
]

const howItWorks = [
  { title: 'Connect Tally Prime', body: 'We link orob Sync to your existing Tally company. Nothing changes for your accountant.' },
  { title: 'Sync runs in the background', body: 'New vouchers and ledger changes reach the cloud as they are entered.' },
  { title: 'Work from anywhere', body: 'Your books, reports and flags are available in the browser whenever you need them.' },
]

const aiSteps = [
  { title: 'Reads the document', body: 'Invoices, bills and receipts are read for party, items, amounts and GST.' },
  { title: 'Drafts the entry', body: 'A matching voucher is prepared against the right ledgers.' },
  { title: 'Flags mismatches', body: 'Anything that doesn’t add up is held for your accountant to check before it posts.' },
]
</script>
