import { NextRequest, NextResponse } from 'next/server'
import { generatePayFastSignature } from '@/utils/payfast'

export async function POST(request: NextRequest) {
  try {
    // Get the raw body for signature verification
    const body = await request.text()
    const params = new URLSearchParams(body)
    const data: Record<string, string> = {}
    
    // Convert URLSearchParams to object
    for (const [key, value] of params.entries()) {
      data[key] = value
    }

    // Verify the payment notification
    const { signature, ...dataToVerify } = data
    const generatedSignature = generatePayFastSignature(dataToVerify, process.env.PAYFAST_PASSPHRASE)

    if (signature !== generatedSignature) {
      console.error('Invalid PayFast signature')
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    // Check payment status
    const paymentStatus = data.payment_status
    const paymentId = data.m_payment_id
    const amount = data.amount_gross

    console.log('PayFast notification received:', {
      paymentId,
      status: paymentStatus,
      amount
    })

    if (paymentStatus === 'COMPLETE') {
      // Payment successful - here you would typically:
      // 1. Update database with payment confirmation
      // 2. Send confirmation email to customer
      // 3. Notify trainer about new booking
      
      console.log(`Payment ${paymentId} completed successfully for amount ${amount}`)
      
      // You could send an email notification here
      // await sendPaymentConfirmationEmail(data)
      // await notifyTrainerOfNewBooking(data)
    } else {
      console.log(`Payment ${paymentId} status: ${paymentStatus}`)
    }

    // Always return 200 OK to acknowledge receipt
    return NextResponse.json({ status: 'OK' })
    
  } catch (error) {
    console.error('Error processing PayFast notification:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// PayFast sends GET requests to verify the endpoint
export async function GET() {
  return NextResponse.json({ status: 'PayFast webhook endpoint is active' })
}
