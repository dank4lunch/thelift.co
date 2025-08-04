'use client'

import { useState } from 'react'
import { CreditCard, Shield, CheckCircle, Clock, Star, DollarSign } from 'lucide-react'

export default function Payment() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'eft' | 'paypal'>('card')

  const packages = [
    {
      id: 1,
      name: 'Free Consultation',
      price: 0,
      originalPrice: 500,
      description: '15-minute discovery session',
      features: [
        'Goals assessment',
        'Health discussion',
        'Training preferences',
        'Package recommendations'
      ],
      popular: false,
      savings: 'R500 VALUE'
    },
    {
      id: 2,
      name: 'PT Intro Pack',
      price: 1200,
      originalPrice: 1500,
      description: 'Perfect for beginners',
      features: [
        '1x consultation session',
        '2x 45min training sessions',
        'Personalized workout plan',
        'Basic nutrition guidance'
      ],
      popular: true,
      savings: 'SAVE R300'
    },
    {
      id: 3,
      name: 'PT Six Pack',
      price: 2800,
      originalPrice: 3500,
      description: 'Complete transformation package',
      features: [
        '1x consultation session',
        '5x 45min training sessions',
        'Progress assessments',
        'Detailed nutrition plan',
        '24/7 support access'
      ],
      popular: false,
      savings: 'SAVE R700'
    },
    {
      id: 4,
      name: 'Monthly Elite',
      price: 4500,
      originalPrice: 5200,
      description: 'Premium monthly membership',
      features: [
        '8x training sessions',
        'Unlimited consultations',
        'Custom meal planning',
        'Progress tracking app',
        'Priority booking',
        'Supplement guidance'
      ],
      popular: false,
      savings: 'SAVE R700'
    }
  ]

  const handlePayment = (packageId: number) => {
    const selectedPkg = packages.find(p => p.id === packageId)
    if (!selectedPkg) return

    // For demonstration - in real implementation, integrate with payment gateway
    if (selectedPkg.price === 0) {
      // Free consultation - redirect to booking
      window.open('https://docs.google.com/forms/d/e/1FAIpQLSfdujG_QCb1auGWGglp6o37N8TBJaed7Dn0EJ785iM4oq9Mzg/viewform?usp=send_form', '_blank')
    } else {
      // Paid packages - show payment modal
      setSelectedPackage(packageId)
    }
  }

  const processPayment = () => {
    // This would integrate with actual payment gateway
    alert(`Payment processing for ${packages.find(p => p.id === selectedPackage)?.name}. This would redirect to secure payment gateway.`)
    setSelectedPackage(null)
  }

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="elite-badge">SECURE PAYMENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading premium-text mb-8 muscle-text">
            INVEST IN YOURSELF
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Secure, fast, and simple payment processing. Start your transformation journey today with our trusted payment partners.
          </p>
        </div>

        {/* Package Selection */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`luxury-card p-6 relative ${
                pkg.popular ? 'ring-2 ring-primary-500 shadow-xl' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-primary-400 mb-2 muscle-text">
                  {pkg.name}
                </h3>
                <p className="text-neutral-400 text-sm mb-4">{pkg.description}</p>
                
                <div className="mb-4">
                  {pkg.price === 0 ? (
                    <div className="text-3xl font-bold text-green-400">FREE</div>
                  ) : (
                    <div>
                      <div className="text-sm text-neutral-500 line-through">
                        R{pkg.originalPrice}
                      </div>
                      <div className="text-3xl font-bold text-primary-400">
                        R{pkg.price}
                      </div>
                    </div>
                  )}
                  <div className="text-xs text-green-400 font-bold mt-1">
                    {pkg.savings}
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-neutral-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePayment(pkg.id)}
                className={`w-full py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
                  pkg.price === 0
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white'
                }`}
              >
                {pkg.price === 0 ? 'BOOK FREE SESSION' : 'SELECT PACKAGE'}
              </button>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="max-w-2xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center text-primary-400 mb-8 muscle-text">
            Accepted Payment Methods
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="luxury-card p-4 text-center">
              <CreditCard className="w-8 h-8 text-primary-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-neutral-300">Credit/Debit Cards</div>
              <div className="text-xs text-neutral-500">Visa, Mastercard</div>
            </div>
            <div className="luxury-card p-4 text-center">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-neutral-300">Bank Transfer</div>
              <div className="text-xs text-neutral-500">EFT, Instant EFT</div>
            </div>
            <div className="luxury-card p-4 text-center">
              <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-sm font-bold text-neutral-300">Digital Wallets</div>
              <div className="text-xs text-neutral-500">PayPal, SnapScan</div>
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="text-center">
          <div className="luxury-card p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-bold text-primary-400 muscle-text">
                100% Secure Payments
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="font-bold text-neutral-200 mb-2">SSL Encrypted</h4>
                <p className="text-neutral-400">Bank-level security encryption</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="font-bold text-neutral-200 mb-2">Money Back Guarantee</h4>
                <p className="text-neutral-400">30-day satisfaction guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-primary-400" />
                </div>
                <h4 className="font-bold text-neutral-200 mb-2">Trusted Platform</h4>
                <p className="text-neutral-400">5-star rated payment system</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-neutral-900 rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-primary-400 mb-6 text-center">
              Complete Payment
            </h3>
            
            <div className="mb-6 p-4 bg-neutral-800 rounded-lg">
              <h4 className="font-bold text-neutral-200 mb-2">
                {packages.find(p => p.id === selectedPackage)?.name}
              </h4>
              <div className="text-2xl font-bold text-primary-400">
                R{packages.find(p => p.id === selectedPackage)?.price}
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Payment Method
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value as any)}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white"
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="eft">Bank Transfer</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setSelectedPackage(null)}
                className="flex-1 py-3 px-4 border border-neutral-600 text-neutral-300 rounded-lg hover:bg-neutral-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={processPayment}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-bold hover:from-primary-600 hover:to-accent-600 transition-all"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
