import { NextRequest, NextResponse } from 'next/server'

interface IKhokhaWebhookData {
  reference: string
  amount: number
  currency: string
  status: string
  transactionId: string
  customerEmail: string
  customerName: string
  timestamp: string
  signature?: string
}

export async function POST(request: NextRequest) {
  try {
    // Get the raw body
    const body = await request.text()
    let webhookData: IKhokhaWebhookData

    try {
      webhookData = JSON.parse(body)
    } catch (parseError) {
      console.error('Failed to parse iKhokha webhook data:', parseError)
      return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
    }

    // Log the webhook data for debugging
    console.log('iKhokha webhook received:', {
      reference: webhookData.reference,
      status: webhookData.status,
      amount: webhookData.amount,
      transactionId: webhookData.transactionId,
      timestamp: webhookData.timestamp
    })

    // Verify webhook signature if provided
    // Note: iKhokha webhook signature verification would be implemented here
    // based on their specific signature algorithm

    // Process based on payment status
    switch (webhookData.status) {
      case 'COMPLETED':
      case 'SUCCESS':
        console.log(`iKhokha payment ${webhookData.reference} completed successfully for amount ${webhookData.amount}`)
        
        // Here you would typically:
        // 1. Update database with payment confirmation
        // 2. Send confirmation email to customer
        // 3. Notify trainer about new booking
        
        // Example: await sendPaymentConfirmationEmail(webhookData)
        // Example: await notifyTrainerOfNewBooking(webhookData)
        break
        
      case 'FAILED':
      case 'CANCELLED':
      case 'DECLINED':
        console.log(`iKhokha payment ${webhookData.reference} failed with status: ${webhookData.status}`)
        break
        
      case 'PENDING':
        console.log(`iKhokha payment ${webhookData.reference} is pending`)
        break
        
      default:
        console.log(`iKhokha payment ${webhookData.reference} has unknown status: ${webhookData.status}`)
    }

    // Always return 200 OK to acknowledge receipt
    return NextResponse.json({ status: 'OK', received: true })
    
  } catch (error) {
    console.error('Error processing iKhokha webhook:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Handle GET requests for webhook verification
export async function GET() {
  return NextResponse.json({ 
    status: 'iKhokha webhook endpoint is active',
    service: 'The Lift Co Payment Processing'
  })
}