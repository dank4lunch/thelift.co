'use client'

import { useState } from 'react'
import { Plus, Minus, MessageCircle, Clock, DollarSign, MapPin, User, Calendar } from 'lucide-react'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      category: "Getting Started",
      icon: <User className="w-5 h-5" />,
      questions: [
        {
          question: "How do I book my free 15-minute consultation?",
          answer: "Simply click the 'Book Free Consultation' button on our homepage, or WhatsApp me directly at 0635432439. We'll schedule a brief call to discuss your goals, experience level, and how I can help you achieve your fitness objectives."
        },
        {
          question: "What should I expect in my first training session?",
          answer: "Your first session includes a comprehensive fitness assessment, goal setting discussion, basic movement screening, and an introduction to your personalized training program. We'll also cover proper form for key exercises and establish your baseline metrics."
        },
        {
          question: "Do I need to be fit before starting personal training?",
          answer: "Absolutely not! Personal training is designed to meet you where you are. Whether you're a complete beginner or returning to fitness after a break, I'll create a program that's challenging yet appropriate for your current fitness level."
        }
      ]
    },
    {
      category: "Training Details",
      icon: <Clock className="w-5 h-5" />,
      questions: [
        {
          question: "How long are the training sessions?",
          answer: "Standard personal training sessions are 45-60 minutes. This includes a brief warm-up, main workout, cool-down, and time for questions. Session length can be adjusted based on your schedule and specific needs."
        },
        {
          question: "Where do the training sessions take place?",
          answer: "I'm based in Sandton CBD, Gauteng. Sessions can take place at a local gym facility, outdoor spaces, or I can come to your location if you have suitable equipment. We'll discuss the best option during your consultation."
        },
        {
          question: "What types of training do you specialize in?",
          answer: "I specialize in personal training, HIIT, boxing, bootcamp-style workouts, sports conditioning, and exercise science-based programming. I also offer corporate wellness programs and event-specific training."
        },
        {
          question: "How often should I train with you?",
          answer: "This depends on your goals, schedule, and budget. Most clients see excellent results with 2-3 sessions per week. During your consultation, we'll design a frequency that works for your lifestyle and maximizes your progress."
        }
      ]
    },
    {
      category: "Pricing & Packages",
      icon: <DollarSign className="w-5 h-5" />,
      questions: [
        {
          question: "What are your rates and package options?",
          answer: "I offer several packages: Free 15-minute consultation, PT Intro Pack (consultation + 2 sessions), PT Six Pack (consultation + 5 sessions), and custom monthly plans. Contact me for detailed pricing based on your specific needs."
        },
        {
          question: "Do you offer payment plans or discounts?",
          answer: "Yes! I offer package discounts for multiple sessions booked in advance. Payment plans can be arranged for longer-term commitments. Students and corporate group rates are also available."
        },
        {
          question: "What's included in your training packages?",
          answer: "All packages include personalized workout programming, nutrition guidance, progress tracking, form correction, motivation and accountability, and 24/7 support access for questions between sessions."
        }
      ]
    },
    {
      category: "Logistics",
      icon: <Calendar className="w-5 h-5" />,
      questions: [
        {
          question: "What's your cancellation policy?",
          answer: "I require 24 hours notice for cancellations. Sessions cancelled with less than 24 hours notice will be charged in full. Emergency situations are handled on a case-by-case basis."
        },
        {
          question: "What should I bring to training sessions?",
          answer: "Bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. If we're training outdoors or at your location, I'll provide any necessary equipment."
        },
        {
          question: "Do you provide nutrition guidance?",
          answer: "Yes! Nutrition guidance is included with all training packages. I provide general healthy eating principles, meal planning tips, and can recommend specific nutrition strategies to support your fitness goals."
        },
        {
          question: "Can you work with health conditions or injuries?",
          answer: "I can work with many common health conditions and past injuries, but I always recommend getting clearance from your healthcare provider first. I'll modify exercises as needed to ensure safe, effective training."
        }
      ]
    }
  ]

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const faqIndex = categoryIndex * 1000 + questionIndex
    setOpenFAQ(openFAQ === faqIndex ? null : faqIndex)
  }

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="elite-badge">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading premium-text mb-8 muscle-text">
            GOT QUESTIONS?
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Everything you need to know about personal training with Tshiamo. 
            Can't find your answer? Message me directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary-400 muscle-text">
                  {category.category}
                </h3>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const faqIndex = categoryIndex * 1000 + questionIndex
                  const isOpen = openFAQ === faqIndex

                  return (
                    <div key={questionIndex} className="luxury-card overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-800/30 transition-colors"
                      >
                        <h4 className="text-lg font-semibold text-neutral-200 pr-4">
                          {faq.question}
                        </h4>
                        <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}>
                          {isOpen ? (
                            <Minus className="w-4 h-4 text-white" />
                          ) : (
                            <Plus className="w-4 h-4 text-white" />
                          )}
                        </div>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="px-6 pb-6">
                          <div className="w-full h-px bg-gradient-to-r from-primary-500/30 to-accent-500/30 mb-4" />
                          <p className="text-neutral-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center mt-16">
          <div className="luxury-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-400 mb-4 muscle-text">
              Still Have Questions?
            </h3>
            <p className="text-neutral-300 mb-6">
              Get instant answers and personalized advice. I'm here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/27635432439"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-3 flex items-center justify-center gap-3 muscle-text"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Me
              </a>
              <a
                href="mailto:tshiamokl@gmail.com"
                className="btn-secondary text-lg px-8 py-3 muscle-text"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
