'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface PaymentInfo {
  package: string
  amount: number
  email: string
  name: string
}

export default function PaymentCancelled() {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null)

  useEffect(() => {
    // Get payment info from localStorage
    const storedPayment = localStorage.getItem('pending_payment')
    if (storedPayment) {
      try {
        const payment = JSON.parse(storedPayment)
        setPaymentInfo(payment)
        // Don't clear it here - user might want to try again
      } catch (error) {
        console.error('Error parsing payment info:', error)
      }
    }
  }, [])

  const handleTryAgain = () => {
    // Redirect back to home page with packages section
    window.location.href = '/#packages'
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-neutral-900 rounded-2xl p-8 border border-orange-500/30 shadow-2xl text-center">
          {/* Warning Icon */}
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Cancelled Message */}
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-4 muscle-text">
            Payment Cancelled
          </h1>
          
          <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
            Your payment was cancelled. No charges were made to your account.
          </p>

          {/* Payment Details */}
          {paymentInfo && (
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-6 mb-8 border border-orange-500/30">
              <h2 className="text-xl font-bold text-orange-300 mb-4 muscle-text">
                Cancelled Order
              </h2>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Package:</span>
                  <span className="text-neutral-200 font-medium">{paymentInfo.package}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Amount:</span>
                  <span className="text-orange-400 font-bold">R{paymentInfo.amount}</span>
                </div>
              </div>
            </div>
          )}

          {/* Reasons & Support */}
          <div className="bg-neutral-800/50 rounded-lg p-6 mb-8 border border-neutral-700">
            <h2 className="text-lg font-bold text-accent-400 mb-4 muscle-text">
              Why was my payment cancelled?
            </h2>
            <div className="text-left space-y-3 text-neutral-300 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>You clicked the back button or closed the payment window</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>Payment session timed out</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>Technical issue with the payment provider</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleTryAgain}
              className="btn-primary px-8 py-4 text-lg elite-glow"
            >
              <span className="muscle-text">Try Payment Again</span>
            </button>
            
            <a
              href="https://wa.me/27635432439?text=Hi! I had issues with the payment process and need assistance with purchasing a training package."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4 text-lg luxury-glow bg-green-600 hover:bg-green-700 from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span className="muscle-text">Get Help</span>
            </a>
          </div>

          <Link
            href="/"
            className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 font-medium"
          >
            ← Back to Home
          </Link>

          {/* Support */}
          <div className="mt-8 p-4 bg-neutral-800/30 rounded-lg border border-neutral-700">
            <p className="text-sm text-neutral-400">
              Need help? Contact us at{' '}
              <a href="mailto:tshiamokl@gmail.com" className="text-primary-400 hover:text-primary-300">
                tshiamokl@gmail.com
              </a>{' '}
              or{' '}
              <a href="tel:+27635432439" className="text-primary-400 hover:text-primary-300">
                +27 635432439
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
