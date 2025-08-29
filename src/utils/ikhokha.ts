export interface IKhokhaConfig {
  apiKey: string
  sandbox?: boolean
  returnUrl: string
  cancelUrl: string
  notifyUrl: string
}

export interface IKhokhaPaymentRequest {
  amount: number
  currency: string
  reference: string
  description: string
  customerEmail: string
  customerName: string
  customerPhone?: string
  returnUrl: string
  cancelUrl: string
  notifyUrl: string
}

export interface IKhokhaPaymentResponse {
  success: boolean
  paymentUrl?: string
  reference?: string
  error?: string
}

// iKhokha configuration
const IKHOKHA_CONFIG: IKhokhaConfig = {
  apiKey: process.env.NEXT_PUBLIC_IKHOKHA_API_KEY || '',
  sandbox: process.env.NODE_ENV !== 'production',
  returnUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/payment/success`,
  cancelUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/payment/cancelled`,
  notifyUrl: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/payment/ikhokha-notify`,
}

// iKhokha API endpoints
const IKHOKHA_API_BASE = 'https://api.ikhokha.com'
const IKHOKHA_SANDBOX_API_BASE = 'https://sandbox-api.ikhokha.com'

function getIKhokhaApiBase(): string {
  return IKHOKHA_CONFIG.sandbox ? IKHOKHA_SANDBOX_API_BASE : IKHOKHA_API_BASE
}

export function createIKhokhaPayment(paymentData: {
  package_name: string
  amount: number
  customer_name: string
  customer_email: string
  customer_phone?: string
}): IKhokhaPaymentRequest {
  const { package_name, amount, customer_name, customer_email, customer_phone } = paymentData
  
  // Generate unique payment reference
  const reference = `TLC_IK_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  
  return {
    amount: amount * 100, // iKhokha expects amount in cents
    currency: 'ZAR',
    reference: reference,
    description: `The Lift Co - ${package_name} Training Package`,
    customerEmail: customer_email,
    customerName: customer_name,
    customerPhone: customer_phone,
    returnUrl: IKHOKHA_CONFIG.returnUrl,
    cancelUrl: IKHOKHA_CONFIG.cancelUrl,
    notifyUrl: IKHOKHA_CONFIG.notifyUrl
  }
}

export async function initiateIKhokhaPayment(paymentRequest: IKhokhaPaymentRequest): Promise<IKhokhaPaymentResponse> {
  try {
    const response = await fetch(`${getIKhokhaApiBase()}/payment/initiate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${IKHOKHA_CONFIG.apiKey}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify(paymentRequest)
    })

    const result = await response.json()

    if (!response.ok) {
      return {
        success: false,
        error: result.message || 'Payment initiation failed'
      }
    }

    return {
      success: true,
      paymentUrl: result.paymentUrl || result.payment_url,
      reference: result.reference
    }
  } catch (error) {
    console.error('iKhokha payment initiation error:', error)
    return {
      success: false,
      error: 'Network error occurred while initiating payment'
    }
  }
}

export function redirectToIKhokha(paymentUrl: string): void {
  window.location.href = paymentUrl
}

export async function processIKhokhaPayment(paymentData: {
  package_name: string
  amount: number
  customer_name: string
  customer_email: string
  customer_phone?: string
}): Promise<IKhokhaPaymentResponse> {
  const paymentRequest = createIKhokhaPayment(paymentData)
  return await initiateIKhokhaPayment(paymentRequest)
}