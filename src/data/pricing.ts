export type BillingCycle = 'monthly' | 'annual'

export interface PricingTier {
  id: 'basic' | 'pro' | 'enterprise'
  name: 'Basic' | 'Pro' | 'Enterprise'
  monthlyPrice: number
  annualPrice: number
  features: string[]
  ctaLabel: string
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    monthlyPrice: 29,
    annualPrice: 290,
    features: ['Up to 3 team members', 'Email support', 'Basic analytics'],
    ctaLabel: 'Start Basic',
  },
  {
    id: 'pro',
    name: 'Pro',
    monthlyPrice: 79,
    annualPrice: 790,
    features: ['Up to 15 team members', 'Priority support', 'Advanced analytics'],
    ctaLabel: 'Choose Pro',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 199,
    annualPrice: 1990,
    features: ['Unlimited team members', 'Dedicated manager', 'Custom integrations'],
    ctaLabel: 'Contact Sales',
  },
]
