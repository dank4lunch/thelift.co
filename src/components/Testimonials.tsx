'use client'

import { useState, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      age: 28,
      role: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Tshiamo completely transformed my approach to fitness. In 6 months, I went from struggling with basic workouts to deadlifting my body weight. His personalized approach and constant motivation made all the difference.",
      results: "Lost 15kg, Gained confidence",
      beforeAfter: {
        before: "Struggled with consistency",
        after: "Works out 5x per week"
      }
    },
    {
      name: "Michael Chen",
      age: 35,
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As a busy entrepreneur, I thought I didn't have time for fitness. Tshiamo designed efficient 45-minute sessions that fit my schedule perfectly. The results speak for themselves - I feel stronger and more energetic than ever.",
      results: "Built 8kg muscle, Improved energy",
      beforeAfter: {
        before: "No exercise routine",
        after: "Consistent 3x weekly training"
      }
    },
    {
      name: "Priya Patel",
      age: 42,
      role: "Doctor",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "After years of neglecting my health due to work demands, Tshiamo helped me reclaim my fitness. His science-based approach and understanding of my medical background made training both safe and effective.",
      results: "Improved posture, Reduced back pain",
      beforeAfter: {
        before: "Chronic back pain",
        after: "Pain-free movement"
      }
    },
    {
      name: "James Mthembu",
      age: 24,
      role: "Student Athlete",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Training with Tshiamo took my athletic performance to the next level. His sports-specific conditioning program helped me improve my speed and strength dramatically. Now I'm competing at a higher level.",
      results: "Increased speed by 20%, Better endurance",
      beforeAfter: {
        before: "Good recreational athlete",
        after: "Competitive level performance"
      }
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="section-padding bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="elite-badge">CLIENT SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading premium-text mb-8 muscle-text">
            REAL TRANSFORMATIONS
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Don't just take our word for it. See what our clients have achieved with dedicated training and expert guidance.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="luxury-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-4 left-4 text-6xl text-primary-500/20">
              <Quote className="w-16 h-16" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Client Photo & Info */}
              <div className="text-center md:text-left">
                <div className="w-32 h-32 mx-auto md:mx-0 mb-6 rounded-full overflow-hidden border-4 border-primary-500/30">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-2xl font-bold text-primary-400 mb-2 muscle-text">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-neutral-400 mb-2">{testimonials[currentTestimonial].role}</p>
                <p className="text-sm text-neutral-500 mb-4">Age: {testimonials[currentTestimonial].age}</p>
                
                {/* Rating */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Results Badge */}
                <div className="inline-block bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full px-4 py-2">
                  <span className="text-sm font-bold text-primary-400">
                    {testimonials[currentTestimonial].results}
                  </span>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="md:col-span-2">
                <blockquote className="text-xl md:text-2xl text-neutral-200 leading-relaxed mb-8 font-light italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Before/After Stats */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-700/50">
                    <h5 className="text-sm font-bold text-red-400 mb-2">BEFORE</h5>
                    <p className="text-neutral-300">{testimonials[currentTestimonial].beforeAfter.before}</p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4 border border-primary-500/30">
                    <h5 className="text-sm font-bold text-green-400 mb-2">AFTER</h5>
                    <p className="text-neutral-300">{testimonials[currentTestimonial].beforeAfter.after}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center space-x-4 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary-500 scale-125'
                  : 'bg-neutral-600 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold premium-text mb-2 muscle-text">100+</div>
            <div className="text-neutral-400 text-sm">Clients Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold premium-text mb-2 muscle-text">95%</div>
            <div className="text-neutral-400 text-sm">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold premium-text mb-2 muscle-text">500+</div>
            <div className="text-neutral-400 text-sm">Kg Total Weight Lost</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold premium-text mb-2 muscle-text">5.0</div>
            <div className="text-neutral-400 text-sm">Average Rating</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-neutral-300 mb-8">Ready to become our next success story?</p>
          <a
            href="#contact"
            className="btn-primary text-lg px-10 py-4 muscle-text"
          >
            START YOUR TRANSFORMATION
          </a>
        </div>
      </div>
    </section>
  )
}
