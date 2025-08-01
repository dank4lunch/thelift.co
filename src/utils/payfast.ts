// Client-side MD5 implementation for browser compatibility
function md5(text: string): string {
  // Simple MD5 implementation for client-side use
  // In production, you'd want to use a proper crypto library like crypto-js
  function md5cycle(x: number[], k: number[]): void {
    let a = x[0], b = x[1], c = x[2], d = x[3]

    a = ff(a, b, c, d, k[0], 7, -680876936)
    d = ff(d, a, b, c, k[1], 12, -389564586)
    c = ff(c, d, a, b, k[2], 17, 606105819)
    b = ff(b, c, d, a, k[3], 22, -1044525330)
    a = ff(a, b, c, d, k[4], 7, -176418897)
    d = ff(d, a, b, c, k[5], 12, 1200080426)
    c = ff(c, d, a, b, k[6], 17, -1473231341)
    b = ff(b, c, d, a, k[7], 22, -45705983)
    a = ff(a, b, c, d, k[8], 7, 1770035416)
    d = ff(d, a, b, c, k[9], 12, -1958414417)
    c = ff(c, d, a, b, k[10], 17, -42063)
    b = ff(b, c, d, a, k[11], 22, -1990404162)
    a = ff(a, b, c, d, k[12], 7, 1804603682)
    d = ff(d, a, b, c, k[13], 12, -40341101)
    c = ff(c, d, a, b, k[14], 17, -1502002290)
    b = ff(b, c, d, a, k[15], 22, 1236535329)

    a = gg(a, b, c, d, k[1], 5, -165796510)
    d = gg(d, a, b, c, k[6], 9, -1069501632)
    c = gg(c, d, a, b, k[11], 14, 643717713)
    b = gg(b, c, d, a, k[0], 20, -373897302)
    a = gg(a, b, c, d, k[5], 5, -701558691)
    d = gg(d, a, b, c, k[10], 9, 38016083)
    c = gg(c, d, a, b, k[15], 14, -660478335)
    b = gg(b, c, d, a, k[4], 20, -405537848)
    a = gg(a, b, c, d, k[9], 5, 568446438)
    d = gg(d, a, b, c, k[14], 9, -1019803690)
    c = gg(c, d, a, b, k[3], 14, -187363961)
    b = gg(b, c, d, a, k[8], 20, 1163531501)
    a = gg(a, b, c, d, k[13], 5, -1444681467)
    d = gg(d, a, b, c, k[2], 9, -51403784)
    c = gg(c, d, a, b, k[7], 14, 1735328473)
    b = gg(b, c, d, a, k[12], 20, -1926607734)

    a = hh(a, b, c, d, k[5], 4, -378558)
    d = hh(d, a, b, c, k[8], 11, -2022574463)
    c = hh(c, d, a, b, k[11], 16, 1839030562)
    b = hh(b, c, d, a, k[14], 23, -35309556)
    a = hh(a, b, c, d, k[1], 4, -1530992060)
    d = hh(d, a, b, c, k[4], 11, 1272893353)
    c = hh(c, d, a, b, k[7], 16, -155497632)
    b = hh(b, c, d, a, k[10], 23, -1094730640)
    a = hh(a, b, c, d, k[13], 4, 681279174)
    d = hh(d, a, b, c, k[0], 11, -358537222)
    c = hh(c, d, a, b, k[3], 16, -722521979)
    b = hh(b, c, d, a, k[6], 23, 76029189)
    a = hh(a, b, c, d, k[9], 4, -640364487)
    d = hh(d, a, b, c, k[12], 11, -421815835)
    c = hh(c, d, a, b, k[15], 16, 530742520)
    b = hh(b, c, d, a, k[2], 23, -995338651)

    a = ii(a, b, c, d, k[0], 6, -198630844)
    d = ii(d, a, b, c, k[7], 10, 1126891415)
    c = ii(c, d, a, b, k[14], 15, -1416354905)
    b = ii(b, c, d, a, k[5], 21, -57434055)
    a = ii(a, b, c, d, k[12], 6, 1700485571)
    d = ii(d, a, b, c, k[3], 10, -1894986606)
    c = ii(c, d, a, b, k[10], 15, -1051523)
    b = ii(b, c, d, a, k[1], 21, -2054922799)
    a = ii(a, b, c, d, k[8], 6, 1873313359)
    d = ii(d, a, b, c, k[15], 10, -30611744)
    c = ii(c, d, a, b, k[6], 15, -1560198380)
    b = ii(b, c, d, a, k[13], 21, 1309151649)
    a = ii(a, b, c, d, k[4], 6, -145523070)
    d = ii(d, a, b, c, k[11], 10, -1120210379)
    c = ii(c, d, a, b, k[2], 15, 718787259)
    b = ii(b, c, d, a, k[9], 21, -343485551)

    x[0] = add32(a, x[0])
    x[1] = add32(b, x[1])
    x[2] = add32(c, x[2])
    x[3] = add32(d, x[3])
  }

  function cmn(q: number, a: number, b: number, x: number, s: number, t: number): number {
    a = add32(add32(a, q), add32(x, t))
    return add32((a << s) | (a >>> (32 - s)), b)
  }

  function ff(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return cmn((b & c) | ((~b) & d), a, b, x, s, t)
  }

  function gg(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return cmn((b & d) | (c & (~d)), a, b, x, s, t)
  }

  function hh(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return cmn(b ^ c ^ d, a, b, x, s, t)
  }

  function ii(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
    return cmn(c ^ (b | (~d)), a, b, x, s, t)
  }

  function add32(a: number, b: number): number {
    return (a + b) & 0xFFFFFFFF
  }

  function str2binl(str: string): number[] {
    const bin: number[] = []
    const mask = (1 << 8) - 1
    for (let i = 0; i < str.length * 8; i += 8) {
      bin[i >> 5] |= (str.charCodeAt(i / 8) & mask) << (i % 32)
    }
    return bin
  }

  function binl2hex(binarray: number[]): string {
    const hex_tab = '0123456789abcdef'
    let str = ''
    for (let i = 0; i < binarray.length * 4; i++) {
      str += hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
             hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF)
    }
    return str
  }

  const x = str2binl(text)
  x[text.length * 8 >> 5] |= 0x80 << ((text.length * 8) % 32)
  x[(((text.length * 8 + 64) >>> 9) << 4) + 14] = text.length * 8

  const a = 1732584193, b = -271733879, c = -1732584194, d = 271733878
  const state = [a, b, c, d]

  for (let i = 0; i < x.length; i += 16) {
    const oldstate = [...state]
    md5cycle(state, x.slice(i, i + 16))
  }

  return binl2hex(state)
}

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
  passphrase?: string
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

export function generatePayFastSignature(data: Record<string, string>, passphrase?: string): string {
  // Remove signature and hash fields
  const { signature, hash, ...dataToSign } = data

  // Create parameter string
  let parameterString = ''

  // Sort the data by key
  const sortedData = Object.keys(dataToSign)
    .sort()
    .reduce((result: Record<string, string>, key) => {
      result[key] = dataToSign[key]
      return result
    }, {})

  // Create parameter string
  for (const [key, value] of Object.entries(sortedData)) {
    if (value) {
      parameterString += `${key}=${encodeURIComponent(value.toString().trim())}&`
    }
  }

  // Remove the last &
  parameterString = parameterString.slice(0, -1)

  // Add passphrase if provided
  if (passphrase) {
    parameterString += `&passphrase=${encodeURIComponent(passphrase.trim())}`
  }

  // Generate signature using browser-compatible MD5
  return md5(parameterString)
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

export function redirectToPayFast(paymentData: PayFastPayment, passphrase?: string): void {
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
  
  // Generate and add signature
  const signature = generatePayFastSignature(paymentData as Record<string, string>, passphrase)
  const signatureInput = document.createElement('input')
  signatureInput.type = 'hidden'
  signatureInput.name = 'signature'
  signatureInput.value = signature
  form.appendChild(signatureInput)
  
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
