'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What happens during a consultation?",
      answer: "During your free 15-minute consultation, we'll discuss your fitness goals, health history, training preferences, and lifestyle factors. I'll assess your current fitness level and recommend the best training package for your needs. There's no pressure to sign up - it's purely informational to ensure we're a good fit."
    },
    {
      question: "What if I miss a session?",
      answer: "I understand that life happens! If you need to cancel or reschedule a session, please give me at least 24 hours notice whenever possible. For same-day cancellations due to emergencies or illness, we can usually reschedule within the same week. Sessions typically don't expire as long as we maintain regular communication about your training schedule."
    },
    {
      question: "Can I switch packages later?",
      answer: "Absolutely! Your fitness journey may evolve, and I'm flexible with package changes. If you want to upgrade to more sessions or switch to a different package structure, we can discuss the best transition plan. Any unused sessions from your current package will be credited toward your new package choice."
    },
    {
      question: "Where do the training sessions take place?",
      answer: "Training sessions take place in Sandton CBD, Gauteng. I work with premium fitness facilities that provide all the equipment needed for effective workouts. The exact location will be confirmed during your consultation based on your preferred times and accessibility needs."
    },
    {
      question: "Do you provide nutrition guidance?",
      answer: "Yes! Nutrition is a crucial part of achieving your fitness goals. Depending on your package, I provide nutrition guidelines, meal planning suggestions, and supplement recommendations. The Monthly One-on-One Pack includes comprehensive personalized meal planning as part of the service."
    },
    {
      question: "What should I bring to my first session?",
      answer: "Bring comfortable workout clothes, athletic shoes, a water bottle, and a small towel. I'll provide all the necessary equipment and training materials. If you have any specific medical information or previous injury reports, please bring those as well so I can design the safest and most effective program for you."
    },
    {
      question: "How quickly will I see results?",
      answer: "Results vary depending on your starting point, goals, and consistency. Most clients start feeling stronger and more energetic within 2-3 weeks. Visible physical changes typically become noticeable after 4-6 weeks of consistent training. Remember, sustainable results take time, and I'll help you set realistic expectations during our consultation."
    },
    {
      question: "Do you offer online training sessions?",
      answer: "While I specialize in in-person training for the best results, I do offer virtual sessions and online support for clients who travel frequently or need flexibility. The Monthly One-on-One Pack includes 24/7 WhatsApp support and home workout alternatives for when you can't make it to the gym."
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl energy-pulse" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl energy-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-primary-400 text-lg font-bold tracking-wider uppercase border border-primary-500/30 px-6 py-3 rounded-full bg-primary-500/10">
              Your Questions Answered
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 muscle-text">
            Frequently Asked Questions
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Get answers to common questions about training packages, sessions, and what to expect when working with me.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="strength-card overflow-hidden transition-all duration-300 hover:border-primary-500/50"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleAccordion(index)
                    }
                  }}
                  className="w-full px-6 py-6 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-neutral-950 rounded-lg"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                  id={`faq-button-${index}`}
                >
                  <h3 className="text-lg font-bold text-primary-300 group-hover:text-primary-200 transition-colors duration-300 muscle-text pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-4 h-4 text-neutral-950" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                  id={`faq-content-${index}`}
                  aria-labelledby={`faq-button-${index}`}
                  role="region"
                >
                  <div className="px-6 pb-6">
                    <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg p-4 border border-primary-500/20">
                      <p className="text-neutral-300 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="strength-card p-8 max-w-2xl mx-auto bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/50">
            <h3 className="text-2xl font-bold text-accent-400 mb-4 muscle-text">
              Still Have Questions?
            </h3>
            <p className="text-neutral-300 mb-6 font-medium">
              Don't see your question answered above? I'm here to help! 
              Reach out and I'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/27635432439?text=Hi! I have some questions about your training programs. Can you help?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-lg elite-glow"
              >
                <span className="muscle-text">Ask on WhatsApp</span>
              </a>
              <a
                href="mailto:Tshiamokl@gmail.com?subject=Training Questions"
                className="btn-secondary px-8 py-4 text-lg luxury-glow"
              >
                <span className="muscle-text">Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
