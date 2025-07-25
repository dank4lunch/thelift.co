import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20'
})

export async function POST(request: NextRequest) {
  try {
    const { priceId, quantity = 1, successUrl, cancelUrl } = await request.json()

    if (!priceId) {
      return NextResponse.json(
        { error: 'Price ID is required' },
        { status: 400 }
      )
    }

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: successUrl || `${request.nextUrl.origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${request.nextUrl.origin}/payment/cancelled`,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['ZA'],
      },
      phone_number_collection: {
        enabled: true,
      },
      customer_creation: 'always',
      invoice_creation: {
        enabled: true,
      },
      metadata: {
        source: 'website',
        timestamp: new Date().toISOString(),
      },
    })

    return NextResponse.json({ sessionId: session.id, url: session.url })
    
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
