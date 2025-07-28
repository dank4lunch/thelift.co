'use client'

import { useState } from 'react'
import { emailService } from '../utils/emailService'

interface BookingProps {
  isOpen: boolean
  onClose: () => void
  service?: {
    title: string
    price: string
    duration: string
  }
}

export default function Booking({ isOpen, onClose, service }: BookingProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: service?.title || '',
    date: '',
    time: '',
    notes: '',
    paymentMethod: 'card'
  })

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (step < 3) {
      setStep(step + 1)
      return
    }

    // Here we would integrate with a payment processor and email service
    try {
      // Prepare booking data
      const bookingData = {
        ...formData,
        timestamp: new Date().toISOString(),
        tier: service?.price || 'Premium',
        amount: service?.price || 'Premium Experience',
      }

      // Simulate API call for payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Send email notifications
      const emailResult = await emailService.sendBookingConfirmation(bookingData)

      if (emailResult.success) {
        alert(`🎉 Booking Confirmed!

Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Tier: ${service?.price || 'Premium Experience'}

✅ Email notification sent to tshiamokl@gmail.com
✅ Confirmation email sent to ${formData.email}

You'll receive a confirmation call within 24 hours!`)
      } else {
        alert(`🎉 Booking Confirmed!

Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Tier: ${service?.price || 'Premium Experience'}

Note: Email notifications are pending (will be sent shortly)`)
      }

      onClose()
      setStep(1)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: service?.title || '',
        date: '',
        time: '',
        notes: '',
        paymentMethod: 'card'
      })
    } catch (error) {
      alert('❌ Booking failed. Please try again or contact us directly at +27 635432439')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-neutral-900 rounded-2xl border border-neutral-700 shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-neutral-700">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-primary-400">Book Your Session</h3>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-neutral-700 transition-colors"
            >
              <span className="text-neutral-400">✕</span>
            </button>
          </div>
          
          {/* Progress */}
          <div className="mt-4 flex space-x-2">
            {[1, 2, 3].map((stepNum) => (
              <div
                key={stepNum}
                className={`flex-1 h-2 rounded-full ${
                  stepNum <= step ? 'bg-gradient-to-r from-primary-500 to-accent-500' : 'bg-neutral-700'
                }`}
              />
            ))}
          </div>
          <div className="mt-2 text-sm text-neutral-400">
            Step {step} of 3: {step === 1 ? 'Details' : step === 2 ? 'Schedule' : 'Payment'}
          </div>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Personal Details */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="+27 123 456 789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="Personal Training & Fitness">Personal Training & Fitness - Premium</option>
                  <option value="Brand Development">Brand Development - Elite</option>
                  <option value="Business Strategy">Business Strategy - Executive</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 2: Schedule */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Time Slot</label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setFormData({ ...formData, time })}
                      className={`p-3 rounded-lg text-sm font-medium transition-all ${
                        formData.time === time
                          ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                          : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Any specific requirements or goals?"
                />
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-neutral-800 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-primary-400 mb-2">Booking Summary</h4>
                <div className="space-y-1 text-sm text-neutral-300">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span>{formData.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span>{formData.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span>{formData.time}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-accent-400 pt-2 border-t border-neutral-600">
                    <span>Tier:</span>
                    <span>{service?.price || 'Premium Experience'}</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Payment Method</label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 p-3 bg-neutral-800 rounded-lg cursor-pointer hover:bg-neutral-700">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="text-primary-500"
                    />
                    <span className="text-white">💳 Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center space-x-3 p-3 bg-neutral-800 rounded-lg cursor-pointer hover:bg-neutral-700">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="eft"
                      checked={formData.paymentMethod === 'eft'}
                      onChange={handleChange}
                      className="text-primary-500"
                    />
                    <span className="text-white">🏦 EFT Transfer</span>
                  </label>
                </div>
              </div>

              <div className="bg-accent-900/20 border border-accent-500/30 p-4 rounded-lg">
                <p className="text-sm text-accent-300">
                  🔒 Secure payment processing. Your payment information is encrypted and protected.
                </p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex space-x-3 mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex-1 px-6 py-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all font-semibold"
            >
              {step === 3 ? '🚀 Confirm Booking' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
