'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

interface PaymentInfo {
  package: string
  amount: number
  email: string
  name: string
}

export default function PaymentSuccess() {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get payment info from localStorage
    const storedPayment = localStorage.getItem('pending_payment')
    if (storedPayment) {
      try {
        const payment = JSON.parse(storedPayment)
        setPaymentInfo(payment)
        // Clear the stored payment info
        localStorage.removeItem('pending_payment')
      } catch (error) {
        console.error('Error parsing payment info:', error)
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-neutral-900 rounded-2xl p-8 border border-primary-500/30 shadow-2xl text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Success Message */}
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-400 mb-4 muscle-text">
            Payment Successful!
          </h1>
          
          <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
            Thank you for your purchase! Your payment has been processed successfully.
          </p>

          {/* Payment Details */}
          {paymentInfo && (
            <div className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg p-6 mb-8 border border-primary-500/30">
              <h2 className="text-xl font-bold text-primary-300 mb-4 muscle-text">
                Purchase Details
              </h2>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Package:</span>
                  <span className="text-neutral-200 font-medium">{paymentInfo.package}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Amount:</span>
                  <span className="text-accent-400 font-bold">R{paymentInfo.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Email:</span>
                  <span className="text-neutral-200 font-medium">{paymentInfo.email}</span>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-neutral-800/50 rounded-lg p-6 mb-8 border border-neutral-700">
            <h2 className="text-lg font-bold text-accent-400 mb-4 muscle-text">
              What Happens Next?
            </h2>
            <div className="text-left space-y-3 text-neutral-300">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-neutral-950 text-sm font-bold">1</span>
                </div>
                <p>You'll receive a confirmation email within 5 minutes</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-neutral-950 text-sm font-bold">2</span>
                </div>
                <p>Tshiamo will contact you within 24 hours to schedule your sessions</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-neutral-950 text-sm font-bold">3</span>
                </div>
                <p>Begin your fitness transformation journey!</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/27635432439?text=Hi! I just completed my payment and I'm excited to get started with my training!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-lg elite-glow flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span className="muscle-text">Chat with Tshiamo</span>
            </a>
            
            <Link
              href="/"
              className="btn-secondary px-8 py-4 text-lg luxury-glow"
            >
              <span className="muscle-text">Back to Home</span>
            </Link>
          </div>

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
