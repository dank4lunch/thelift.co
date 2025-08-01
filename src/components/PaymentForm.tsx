'use client'

import { useState } from 'react'
import { createPayFastPayment, redirectToPayFast, PACKAGE_PRICES, PackageName } from '@/utils/payfast-simple'

interface PaymentFormProps {
  packageName: PackageName
  onClose: () => void
}

export default function PaymentForm({ packageName, onClose }: PaymentFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    terms: false
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const packagePrice = PACKAGE_PRICES[packageName]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^(\+27|0)[0-9]{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid South African phone number'
    }

    if (!formData.terms) {
      newErrors.terms = 'You must accept the terms and conditions'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsProcessing(true)

    try {
      const paymentData = createPayFastPayment({
        package_name: packageName,
        amount: packagePrice,
        customer_name: `${formData.firstName} ${formData.lastName}`,
        customer_email: formData.email,
        customer_phone: formData.phone
      })

      // Store payment info in localStorage for success page
      localStorage.setItem('pending_payment', JSON.stringify({
        package: packageName,
        amount: packagePrice,
        email: formData.email,
        name: `${formData.firstName} ${formData.lastName}`
      }))

      // Redirect to PayFast
      try {
        redirectToPayFast(paymentData)
      } catch (redirectError) {
        console.error('PayFast redirect error:', redirectError)
        // Fallback to WhatsApp if payment redirect fails
        const message = `Hi! I'd like to purchase the ${packageName} for R${packagePrice}. My details: ${formData.firstName} ${formData.lastName}, ${formData.email}, ${formData.phone}`
        const encodedMessage = encodeURIComponent(message)
        window.open(`https://wa.me/27635432439?text=${encodedMessage}`, '_blank')
        setIsProcessing(false)
        return
      }
    } catch (error) {
      console.error('Payment error:', error)
      alert('There was an error processing your payment. Please try again.')
      setIsProcessing(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
      role="dialog"
      aria-labelledby="payment-form-title"
      aria-modal="true"
    >
      <div className="bg-neutral-900 rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-primary-500/30 shadow-2xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 id="payment-form-title" className="text-2xl font-bold text-primary-400 muscle-text">
              Secure Payment
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-neutral-800 hover:bg-neutral-700 rounded-lg flex items-center justify-center transition-colors duration-200 focus:ring-2 focus:ring-primary-500 focus:outline-none"
              aria-label="Close payment form"
            >
              <svg className="w-5 h-5 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Package Details */}
          <div className="bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg p-4 mb-6 border border-primary-500/30">
            <h3 className="text-lg font-bold text-primary-300 mb-2">{packageName}</h3>
            <div className="text-3xl font-bold text-accent-400">R{packagePrice}</div>
          </div>

          {/* Payment Form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-bold mb-2 text-neutral-300">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-3 rounded-lg bg-neutral-800 border text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 ${
                    errors.firstName ? 'border-red-500' : 'border-neutral-600'
                  }`}
                  placeholder="John"
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  aria-invalid={!!errors.firstName}
                />
                {errors.firstName && (
                  <p id="firstName-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-bold mb-2 text-neutral-300">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-3 rounded-lg bg-neutral-800 border text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 ${
                    errors.lastName ? 'border-red-500' : 'border-neutral-600'
                  }`}
                  placeholder="Doe"
                  aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                  aria-invalid={!!errors.lastName}
                />
                {errors.lastName && (
                  <p id="lastName-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2 text-neutral-300">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-3 py-3 rounded-lg bg-neutral-800 border text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 ${
                  errors.email ? 'border-red-500' : 'border-neutral-600'
                }`}
                placeholder="john@example.com"
                aria-describedby={errors.email ? 'email-error' : undefined}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold mb-2 text-neutral-300">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-3 py-3 rounded-lg bg-neutral-800 border text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 ${
                  errors.phone ? 'border-red-500' : 'border-neutral-600'
                }`}
                placeholder="0821234567 or +27821234567"
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-400" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-primary-500 bg-neutral-800 border-neutral-600 rounded focus:ring-primary-500 focus:ring-2"
                aria-describedby={errors.terms ? 'terms-error' : undefined}
                aria-invalid={!!errors.terms}
              />
              <div>
                <label htmlFor="terms" className="text-sm text-neutral-300 cursor-pointer">
                  I agree to the terms and conditions and privacy policy. Payment will be processed securely through PayFast.
                </label>
                {errors.terms && (
                  <p id="terms-error" className="mt-1 text-sm text-red-400" role="alert">
                    {errors.terms}
                  </p>
                )}
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg font-bold transition-colors duration-200 focus:ring-2 focus:ring-neutral-500 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isProcessing}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-neutral-950 rounded-lg font-bold transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none focus:ring-2 focus:ring-primary-500 focus:outline-none muscle-text"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  'Pay Now'
                )}
              </button>
            </div>
          </form>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
            <div className="flex items-center space-x-2 mb-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold text-green-400">Secure Payment</span>
            </div>
            <p className="text-xs text-neutral-400">
              Your payment is processed securely through PayFast, South Africa's leading payment gateway. 
              We support all major credit cards, EFT, and instant banking.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
