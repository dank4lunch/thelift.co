'use client'

import Link from 'next/link'

export default function PaymentCancelled() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Cancel Icon */}
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-500"
                 style={{ boxShadow: '0 20px 40px rgba(107,114,128,0.4)' }}>
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full blur-xl opacity-30 scale-110"></div>
          </div>

          {/* Cancel Message */}
          <h1 className="text-5xl md:text-6xl font-black font-heading text-white mb-6 transform hover:scale-105 transition-transform duration-500"
              style={{ textShadow: '0 0 30px rgba(255,255,255,0.5)' }}>
            Payment <span className="bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">Cancelled</span>
          </h1>

          <div className="w-32 h-2 bg-gradient-to-r from-gray-500 to-gray-600 mx-auto mb-8 rounded-full shadow-lg"></div>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            No worries! Your payment was cancelled and no charges were made. 
            You can try again whenever you're ready to start your transformation journey.
          </p>

          {/* Reassurance Section */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready When You Are
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/5 rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl">💡</span>
                </div>
                <h3 className="font-bold text-white mb-2">Have Questions?</h3>
                <p className="text-gray-300 text-sm">Get in touch with us if you need more information about our programs or payment options.</p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="font-bold text-white mb-2">Flexible Options</h3>
                <p className="text-gray-300 text-sm">We offer multiple payment plans and options to make your transformation journey affordable.</p>
              </div>
            </div>
          </div>

          {/* Alternative Options */}
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Other Ways to Get Started</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/10 rounded-xl p-4">
                <span className="text-2xl mb-2 block">📞</span>
                <p className="text-gray-300">Call us directly to discuss payment options</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <span className="text-2xl mb-2 block">💳</span>
                <p className="text-gray-300">Try a different payment method</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <span className="text-2xl mb-2 block">📧</span>
                <p className="text-gray-300">Email us for personalized assistance</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#pricing"
                  className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold text-lg px-10 py-4 rounded-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-x-12 inline-block"
                  style={{ boxShadow: '0 15px 35px rgba(168,85,247,0.4)' }}>
              <span className="relative z-10 flex items-center justify-center">
                Try Again
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-cyan-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link href="/#contact"
                  className="group relative bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-lg px-10 py-4 rounded-2xl transform transition-all duration-500 hover:scale-110 hover:bg-white/20 inline-block">
              <span className="relative z-10">Contact Us</span>
            </Link>

            <Link href="/"
                  className="group relative bg-gray-600/20 backdrop-blur-md border border-gray-400/30 text-gray-300 font-medium text-lg px-10 py-4 rounded-2xl transform transition-all duration-500 hover:scale-110 hover:bg-gray-600/30 hover:text-white inline-block">
              <span className="relative z-10">Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
