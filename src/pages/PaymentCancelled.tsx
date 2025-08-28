
import React from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'
import ClientErrorBoundary from '@/components/ClientErrorBoundary'

export default function PaymentCancelled() {
  return (
    <ClientErrorBoundary>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-400 mb-4">Payment Cancelled</h1>
          <p className="text-neutral-300 mb-8">Your payment was cancelled. You can try again anytime.</p>
          <a href="/" className="bg-primary-500 text-neutral-900 px-6 py-3 rounded-lg font-bold hover:bg-primary-400 transition-colors">
            Return Home
          </a>
        </div>
      </main>
      <Footer />
    </ClientErrorBoundary>
  )
}
