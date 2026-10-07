import { showConsumerApp } from '@/data/siteFlags'

// The orob family, in display order. `badge` picks the corner glyph on the product tile (orob has none).
const allProducts = [
  {
    key: 'orob',
    name: 'orob',
    path: '/orob',
    launch: 'Mid-October 2026',
    tagline: 'Know the best rate first.',
    consumer: true,
  },
  {
    key: 'desk',
    name: 'orob Desk',
    path: '/orob-desk',
    launch: 'End of October 2026',
    tagline: 'Your rates. Your brand. Your desk.',
    badge: 'arrow-right-left',
  },
  {
    key: 'sync',
    name: 'orob Sync',
    path: '/orob-sync',
    launch: 'November 2026',
    tagline: 'Your Tally, in the cloud.',
    badge: 'refresh-cw',
  },
]

export const products = allProducts.filter((product) => showConsumerApp || !product.consumer)

export function productByKey(key) {
  return allProducts.find((product) => product.key === key)
}

// The shown product names as running text: "orob, orob Desk and orob Sync" (just the last two with the consumer app hidden).
export function productNameList(conjunction) {
  const names = products.map((product) => product.name)
  return `${names.slice(0, -1).join(', ')} ${conjunction} ${names.at(-1)}`
}
