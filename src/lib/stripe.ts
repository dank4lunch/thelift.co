import { loadStripe, Stripe } from '@stripe/stripe-js'

// Initialize Stripe
let stripePromise: Promise<Stripe | null>

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_51234567890abcdef' // Replace with your publishable key
    )
  }
  return stripePromise
}

export default getStripe

// Stripe configuration for products
export const stripeConfig = {
  plans: {
    starter_monthly: {
      priceId: 'price_1234567890abcdef', // Replace with actual Stripe price IDs
      name: 'Starter Lift Monthly',
      amount: 1200,
      currency: 'zar'
    },
    starter_quarterly: {
      priceId: 'price_1234567890abcdef',
      name: 'Starter Lift Quarterly',
      amount: 3200,
      currency: 'zar'
    },
    elite_monthly: {
      priceId: 'price_1234567890abcdef',
      name: 'Elite Transformation Monthly',
      amount: 2400,
      currency: 'zar'
    },
    elite_quarterly: {
      priceId: 'price_1234567890abcdef',
      name: 'Elite Transformation Quarterly',
      amount: 6500,
      currency: 'zar'
    },
    champion_monthly: {
      priceId: 'price_1234567890abcdef',
      name: 'Champion Package Monthly',
      amount: 4500,
      currency: 'zar'
    },
    champion_quarterly: {
      priceId: 'price_1234567890abcdef',
      name: 'Champion Package Quarterly',
      amount: 12000,
      currency: 'zar'
    }
  },
  addons: {
    extra_session: {
      priceId: 'price_1234567890abcdef',
      name: 'Extra Training Session',
      amount: 300,
      currency: 'zar'
    },
    nutrition_plan: {
      priceId: 'price_1234567890abcdef',
      name: 'Custom Nutrition Plan',
      amount: 500,
      currency: 'zar'
    },
    brand_consultation: {
      priceId: 'price_1234567890abcdef',
      name: 'Brand Strategy Session',
      amount: 800,
      currency: 'zar'
    }
  }
}

// Payment success configurations
export const paymentConfig = {
  successUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/payment/success`,
  cancelUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/payment/cancelled`,
  mode: 'payment' as const,
  allowPromotionCodes: true,
  billingAddressCollection: 'required' as const,
  shippingAddressCollection: {
    allowedCountries: ['ZA'] as const
  }
}
