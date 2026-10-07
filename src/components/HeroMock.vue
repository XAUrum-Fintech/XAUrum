<template>
  <div
    class="relative mx-auto mt-9 h-[410px] max-w-[1060px]"
    role="img"
    aria-label="Illustration of orob Desk: a bullion's branded live-rate page with buy and sell prices and an order panel, and the same rates on a phone. Prices are illustrative."
    data-testid="hero-mock"
  >
    <div class="absolute top-0 left-0 box-border h-[410px] w-full overflow-hidden rounded-t-[14px] border border-b-0 border-white/12 bg-mock text-left shadow-[0_40px_80px_-20px_rgba(0,0,0,.6)] min-[1100px]:w-[800px]">
      <div class="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span v-for="dot in 3" :key="dot" class="size-2.5 rounded-full bg-secondary-700" />
        <span class="ml-4 rounded-md bg-white/6 px-3.5 py-1 text-xs text-secondary-400">rates.yourbullion.in</span>
      </div>
      <div class="flex">
        <div class="min-w-0 flex-[1.6] px-6 py-[18px]">
          <div class="flex items-center gap-2.5">
            <div class="grid size-[30px] place-items-center rounded-[7px] bg-primary-600 text-xs font-extrabold">YB</div>
            <span class="font-bold">Your Bullion House</span>
            <LiveLabel class="ml-auto" />
          </div>
          <div class="mt-3.5 grid grid-cols-[minmax(0,1.4fr)_1fr_1fr] pb-2 text-[11px] font-bold tracking-[0.14em] text-secondary-500">
            <span>PRODUCT</span><span class="text-right">BUY</span><span class="text-right">SELL</span>
          </div>
          <div v-for="row in rows" :key="row.name" class="grid grid-cols-[minmax(0,1.4fr)_1fr_1fr] items-center border-t border-white/8 py-2.5">
            <div>
              <div class="text-sm font-bold">{{ row.name }}</div>
              <div class="text-xs text-secondary-500">{{ row.unit }}</div>
            </div>
            <div class="font-num text-right text-base font-semibold text-secondary-300">{{ row.buy }}</div>
            <div class="font-num text-right text-[17px] font-bold transition-colors duration-[400ms]" :style="{ color: row.flash }">{{ row.sell }}</div>
          </div>
        </div>
        <div class="hidden min-w-0 flex-1 border-l border-white/8 px-6 py-[18px] min-[760px]:block">
          <div class="text-[11px] font-bold tracking-[0.14em] text-secondary-500">PLACE ORDER</div>
          <div class="mt-2.5 grid grid-cols-2 rounded-[10px] bg-white/6 p-1">
            <span class="rounded-[7px] bg-buy p-2 text-center text-[13px] font-bold">Buy</span>
            <span class="p-2 text-center text-[13px] font-bold text-secondary-400">Sell</span>
          </div>
          <div class="mt-2.5 text-xs text-secondary-400">Product</div>
          <div class="mt-1.5 rounded-lg border border-white/12 px-3 py-2 text-sm">Gold 999 · 10 g</div>
          <div class="mt-2.5 text-xs text-secondary-400">Quantity</div>
          <div class="font-num mt-1.5 rounded-lg border border-white/12 px-3 py-2 text-sm">5</div>
          <div class="mt-2.5 flex justify-between text-[13px] text-secondary-400">
            <span>Estimated</span><span class="font-num font-semibold text-white">{{ estimate }}</span>
          </div>
          <div class="mt-3 rounded-lg bg-primary-600 p-2.5 text-center text-sm font-bold">Review order</div>
        </div>
      </div>
    </div>

    <div class="absolute top-11 right-0 hidden h-[378px] w-[232px] overflow-hidden rounded-[32px] border-6 border-secondary-800 bg-secondary-900 text-left shadow-[0_40px_80px_-20px_rgba(0,0,0,.7)] min-[1100px]:block">
      <div class="flex items-center gap-2 px-3.5 pt-6 pb-3">
        <div class="grid size-6 place-items-center rounded-md bg-primary-600 text-[10px] font-extrabold">YB</div>
        <span class="text-[13px] font-bold">Your Bullion House</span>
      </div>
      <div v-for="row in rows" :key="row.name" class="mx-3 mb-2 rounded-xl border border-white/8 bg-mock px-3 py-[11px]">
        <div class="flex justify-between text-xs">
          <span class="font-bold">{{ row.name }}</span><span class="text-secondary-500">{{ row.unit }}</span>
        </div>
        <div class="font-num mt-1 text-lg font-bold transition-colors duration-[400ms]" :style="{ color: row.flash }">{{ row.sell }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import LiveLabel from '@/components/LiveLabel.vue'

// Illustrative prices only. Every 1.4s one benchmark may nudge, and the rows priced off it flash green or red.
const props = defineProps({
  tickerLive: { type: Boolean, default: true },
})

const UP = '#4ade80'
const DOWN = '#f87171'
const STILL = '#ffffff'

const gold = ref(113480)
const silver = ref(136240)
const moved = ref({ metal: '', up: true })

const inr = (value) => `₹${Math.round(value).toLocaleString('en-IN')}`

function flashFor(metal) {
  if (moved.value.metal !== metal) return STILL
  return moved.value.up ? UP : DOWN
}

const rows = computed(() => {
  const gold10 = gold.value + 420
  const row = (name, unit, sell, spread, metal) => ({ name, unit, sell: inr(sell), buy: inr(sell - spread), flash: flashFor(metal) })
  return [
    row('Gold 999', '10 g', gold10, 150, 'gold'),
    row('Gold 995', '100 g', gold10 * 10 * 0.9955, 1200, 'gold'),
    row('Silver 999', '1 kg', silver.value + 850, 400, 'silver'),
    row('Gold coin 24K', '8 g', gold10 * 0.8 + 950, 300, 'gold'),
  ]
})

const estimate = computed(() => inr((gold.value + 420) * 5))

// Five benchmarks tick in turn; only gold and silver feed these rows, so most ticks just clear the flash.
function tick() {
  const pick = Math.floor(Math.random() * 5)
  if (pick > 1) {
    moved.value = { metal: '', up: true }
    return
  }
  const metal = pick === 0 ? 'gold' : 'silver'
  const step = metal === 'gold' ? 70 : 190
  const delta = (Math.random() - 0.5) * 2 * step
  if (metal === 'gold') gold.value += delta
  else silver.value += delta
  moved.value = { metal, up: delta >= 0 }
}

let timer = null

onMounted(() => {
  const reduceMotion = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (props.tickerLive && !reduceMotion) {
    timer = setInterval(tick, 1400)
  }
})

onBeforeUnmount(() => clearInterval(timer))
</script>
