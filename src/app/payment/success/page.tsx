'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function PaymentSuccess() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [isVerified, setIsVerified] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (sessionId) {
      // Verify the payment session
      fetch(`/api/verify-payment?session_id=${sessionId}`)
        .then(response => response.json())
        .then(data => {
          setIsVerified(data.verified)
          setLoading(false)
        })
        .catch(() => {
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-xl">Verifying your payment...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Success Icon */}
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-500"
                 style={{ boxShadow: '0 20px 40px rgba(16,185,129,0.4)' }}>
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-30 scale-110"></div>
          </div>

          {/* Success Message */}
          <h1 className="text-5xl md:text-6xl font-black font-heading text-white mb-6 transform hover:scale-105 transition-transform duration-500"
              style={{ textShadow: '0 0 30px rgba(255,255,255,0.5)' }}>
            Payment <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Successful!</span>
          </h1>

          <div className="w-32 h-2 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-8 rounded-full shadow-lg"></div>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Thank you for choosing The Lift Co! Your transformation journey starts now.
          </p>

          {/* What's Next Section */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              What Happens Next?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white/5 rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl">📧</span>
                </div>
                <h3 className="font-bold text-white mb-2">Confirmation Email</h3>
                <p className="text-gray-300 text-sm">You'll receive a confirmation email with your plan details and next steps.</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl">📞</span>
                </div>
                <h3 className="font-bold text-white mb-2">Personal Contact</h3>
                <p className="text-gray-300 text-sm">Tshiamo will contact you within 24 hours to schedule your first session.</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="font-bold text-white mb-2">Begin Journey</h3>
                <p className="text-gray-300 text-sm">Start your transformation with personalized plans and expert guidance.</p>
              </div>
            </div>
          </div>

          {/* Session ID Display */}
          {sessionId && (
            <div className="bg-white/5 rounded-2xl p-6 mb-8">
              <p className="text-gray-400 text-sm mb-2">Transaction Reference:</p>
              <p className="font-mono text-white text-sm">{sessionId}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/"
                  className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold text-lg px-10 py-4 rounded-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-x-12 inline-block"
                  style={{ boxShadow: '0 15px 35px rgba(168,85,247,0.4)' }}>
              <span className="relative z-10 flex items-center justify-center">
                Back to Home
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-cyan-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link href="/#contact"
                  className="group relative bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-lg px-10 py-4 rounded-2xl transform transition-all duration-500 hover:scale-110 hover:bg-white/20 inline-block">
              <span className="relative z-10">Contact Support</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
