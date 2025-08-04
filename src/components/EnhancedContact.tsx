'use client'

import { useState } from 'react'
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function EnhancedContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: '',
    experience: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        goals: '',
        experience: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp (Fastest)',
      value: '+27 63 543 2439',
      description: 'Instant response during business hours',
      action: 'https://wa.me/27635432439',
      color: 'text-green-400'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'tshiamokl@gmail.com',
      description: 'Detailed inquiries and consultations',
      action: 'mailto:tshiamokl@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Call',
      value: '+27 63 543 2439',
      description: 'Direct consultation calls',
      action: 'tel:+27635432439',
      color: 'text-primary-400'
    }
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '6:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '9:00 AM - 4:00 PM' }
  ]

  const socialLinks = [
    {
      platform: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: '#',
      handle: '@theliftco_sa',
      description: 'Daily training tips & client transformations'
    },
    {
      platform: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: '#',
      handle: 'The Lift Co',
      description: 'Community updates & fitness challenges'
    },
    {
      platform: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: '#',
      handle: 'Tshiamo Sookane',
      description: 'Professional fitness insights'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="elite-badge">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading premium-text mb-8 muscle-text">
            START YOUR JOURNEY
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Ready to transform your life? Let's discuss your goals and create a personalized training plan that works for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="luxury-card p-8">
            <h3 className="text-2xl font-bold text-primary-400 mb-6 muscle-text">
              Free Consultation Request
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                  placeholder="+27 xxx xxx xxxx"
                />
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-neutral-300 mb-2">
                  Fitness Goals *
                </label>
                <select
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                >
                  <option value="">Select your primary goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Building</option>
                  <option value="strength">Strength Training</option>
                  <option value="endurance">Endurance/Cardio</option>
                  <option value="general-fitness">General Fitness</option>
                  <option value="sports-specific">Sports Performance</option>
                  <option value="rehabilitation">Injury Rehabilitation</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-neutral-300 mb-2">
                  Fitness Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-6 months)</option>
                  <option value="intermediate">Intermediate (6 months - 2 years)</option>
                  <option value="advanced">Advanced (2+ years)</option>
                  <option value="athlete">Competitive Athlete</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600 rounded-lg text-white placeholder-neutral-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-colors resize-none"
                  placeholder="Tell me about any injuries, time constraints, or specific questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 muscle-text ${
                  isSubmitting 
                    ? 'bg-neutral-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 hover:shadow-2xl hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    SENDING...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    REQUEST FREE CONSULTATION
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Thank you! I'll get back to you within 24 hours.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong. Please try WhatsApp instead.</span>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="luxury-card p-8">
              <h3 className="text-2xl font-bold text-primary-400 mb-6 muscle-text">
                💬 Contact Methods
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : '_self'}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="block p-4 bg-neutral-800/50 rounded-lg border border-neutral-600 hover:border-primary-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`${method.color} group-hover:scale-110 transition-transform`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-neutral-200 group-hover:text-primary-400 transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-neutral-300 font-medium">{method.value}</p>
                        <p className="text-neutral-400 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="luxury-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-primary-400" />
                <h3 className="text-2xl font-bold text-primary-400 muscle-text">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-700 last:border-b-0">
                    <span className="text-neutral-300 font-medium">{schedule.day}</span>
                    <span className="text-primary-400 font-bold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-primary-500/10 border border-primary-500/30 rounded-lg">
                <p className="text-primary-400 text-sm text-center">
                  ⚡ Emergency sessions available by appointment
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="luxury-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-primary-400" />
                <h3 className="text-2xl font-bold text-primary-400 muscle-text">
                  Location
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-neutral-200 mb-2">Primary Training Area</h4>
                  <p className="text-neutral-300">Sandton CBD, Gauteng</p>
                  <p className="text-neutral-400 text-sm">Multiple gym partnerships & outdoor locations</p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-200 mb-2">Service Areas</h4>
                  <p className="text-neutral-300">• Sandton • Rosebank • Midrand</p>
                  <p className="text-neutral-300">• Woodmead • Fourways • Bryanston</p>
                  <p className="text-neutral-400 text-sm mt-2">Mobile training available in these areas</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="luxury-card p-8">
              <h3 className="text-2xl font-bold text-primary-400 mb-6 muscle-text">
                📱 Follow the Journey
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 bg-neutral-800/50 rounded-lg border border-neutral-600 hover:border-primary-500/50 transition-all duration-300 group"
                  >
                    <div className="text-primary-400 group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-200 group-hover:text-primary-400 transition-colors">
                        {social.handle}
                      </h4>
                      <p className="text-neutral-400 text-sm">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Action CTA */}
        <div className="text-center mt-16">
          <div className="luxury-card p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-primary-400 mb-4 muscle-text">
              🚀 Ready to Start Today?
            </h3>
            <p className="text-xl text-neutral-300 mb-6">
              Skip the form and get instant access. Your transformation is just one message away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/27635432439?text=Hi%20Tshiamo!%20I%27d%20like%20to%20book%20a%20free%2015-minute%20consultation%20for%20personal%20training."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-4 flex items-center justify-center gap-3 muscle-text"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Now
              </a>
              <a
                href="tel:+27635432439"
                className="btn-secondary text-lg px-10 py-4 flex items-center justify-center gap-3 muscle-text"
              >
                <Phone className="w-6 h-6" />
                Call Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
