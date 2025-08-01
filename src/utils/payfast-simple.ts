export interface PayFastConfig {
  merchant_id: string
  merchant_key: string
  return_url: string
  cancel_url: string
  notify_url: string
  sandbox?: boolean
}

export interface PayFastPayment {
  merchant_id: string
  merchant_key: string
  return_url: string
  cancel_url: string
  notify_url: string
  name_first: string
  name_last: string
  email_address: string
  cell_number?: string
  m_payment_id: string
  amount: string
  item_name: string
  item_description: string
}

// PayFast configuration
const PAYFAST_CONFIG: PayFastConfig = {
  merchant_id: process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID || '10004002',
  merchant_key: process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_KEY || 'q1cd2rdny4a53',
  return_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/payment/success`,
  cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/payment/cancelled`,
  notify_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/payment/notify`,
  sandbox: process.env.NODE_ENV !== 'production'
}

export function createPayFastPayment(paymentData: {
  package_name: string
  amount: number
  customer_name: string
  customer_email: string
  customer_phone?: string
}): PayFastPayment {
  const { package_name, amount, customer_name, customer_email, customer_phone } = paymentData
  
  // Split customer name
  const nameParts = customer_name.split(' ')
  const firstName = nameParts[0] || ''
  const lastName = nameParts.slice(1).join(' ') || ''
  
  // Generate unique payment ID
  const paymentId = `TLC_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  
  return {
    merchant_id: PAYFAST_CONFIG.merchant_id,
    merchant_key: PAYFAST_CONFIG.merchant_key,
    return_url: PAYFAST_CONFIG.return_url,
    cancel_url: PAYFAST_CONFIG.cancel_url,
    notify_url: PAYFAST_CONFIG.notify_url,
    name_first: firstName,
    name_last: lastName,
    email_address: customer_email,
    cell_number: customer_phone,
    m_payment_id: paymentId,
    amount: amount.toFixed(2),
    item_name: package_name,
    item_description: `The Lift Co - ${package_name} Training Package`
  }
}

export function getPayFastUrl(sandbox: boolean = true): string {
  return sandbox 
    ? 'https://sandbox.payfast.co.za/eng/process'
    : 'https://www.payfast.co.za/eng/process'
}

// Simplified redirect without signature for now
export function redirectToPayFast(paymentData: PayFastPayment): void {
  const form = document.createElement('form')
  form.method = 'POST'
  form.action = getPayFastUrl(PAYFAST_CONFIG.sandbox)
  
  // Add all payment data as hidden fields
  for (const [key, value] of Object.entries(paymentData)) {
    if (value) {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = value.toString()
      form.appendChild(input)
    }
  }
  
  // Submit form
  document.body.appendChild(form)
  form.submit()
  document.body.removeChild(form)
}

// Package pricing (in Rands)
export const PACKAGE_PRICES = {
  'PT Intro Pack': 624,
  'PT Six Pack': 1270,
  'Monthly One-on-One Pack': 2160
} as const

export type PackageName = keyof typeof PACKAGE_PRICES
