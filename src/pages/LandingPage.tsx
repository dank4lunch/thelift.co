import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Note: The original code had imports for Navigation, LandingHero, About, Services, Founder, Contact, and Footer.
// Based on the provided changes, it seems the intention was to replace 'LandingHero' with 'Hero' and
// potentially clean up or adjust other imports if they were related to the Next.js/Vite conflict.
// Since the original code did not contain these imports, and the changes are applied directly to the provided snippet,
// we will proceed with the assumption that the provided snippet IS the entire file and the imports mentioned in the changes
// were either mistakenly provided or intended for a different file.
// The core of the change is to replace the usage of 'LandingHero' with 'Hero'.

interface FloatingElement {
  id: number
  left: number
  top: number
  delay: number
  duration: number
  size: number
  opacity: number
}

export default function LandingPage() {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([])
  const [textVisible, setTextVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "Tshiamo transformed not just my body, but my entire mindset. His approach is strategic, creative, and gets real results.",
      author: "Sarah M.",
      role: "Marketing Executive"
    },
    {
      text: "10 years of experience shows. He doesn't just train - he elevates everything about your approach to fitness and life.",
      author: "Marcus T.",
      role: "Entrepreneur"
    },
    {
      text: "The creative business strategies combined with fitness coaching? Game changer. This is next level transformation.",
      author: "Jessica L.",
      role: "Creative Director"
    }
  ]

  const features = [
    {
      icon: "💪",
      title: "Elite Fitness Training",
      description: "10 years of experience in personal training, boxing, HIIT, and sports conditioning. Get results that last.",
      highlights: ["1-on-1 Personal Training", "Boxing & HIIT", "Sports Conditioning", "Nutrition Guidance"]
    },
    {
      icon: "🎨",
      title: "Creative Business Solutions",
      description: "Brand development, marketing strategies, and business growth. Elevate your entire empire.",
      highlights: ["Brand Development", "Digital Marketing", "Event Coordination", "Business Strategy"]
    },
    {
      icon: "⚡",
      title: "Holistic Transformation",
      description: "Strategic moves that transform every layer of your life and business. Mind, body, and brand.",
      highlights: ["Complete Lifestyle Design", "Goal Achievement", "Mindset Coaching", "Success Systems"]
    }
  ]

  useEffect(() => {
    const elements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 8 + Math.random() * 4,
      size: 0.3 + Math.random() * 1.2,
      opacity: 0.2 + Math.random() * 0.3,
    }))
    setFloatingElements(elements)

    setTimeout(() => setTextVisible(true), 600)

    // Rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(testimonialInterval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          {floatingElements.map((element) => (
            <div
              key={element.id}
              className="absolute rounded-full bg-gradient-to-r from-primary-400/40 to-accent-400/40 blur-sm"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                width: `${element.size}rem`,
                height: `${element.size}rem`,
                opacity: element.opacity,
                animation: `float ${element.duration}s ${element.delay}s infinite ease-in-out alternate`,
              }}
            />
          ))}
        </div>

        <div className="container max-w-4xl mx-auto text-center relative z-10">
          {/* Logo/Brand */}
          <div className={`mb-8 sm:mb-12 transition-opacity duration-1000 ${textVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-primary-400/20 to-accent-400/20 backdrop-blur-sm border-2 border-primary-400/50 rounded-2xl shadow-2xl overflow-hidden mb-6">
              <img
                src="/images/IMG_0253_1754429519057.jpeg"
                alt="The Lift Co Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-primary-400 font-bold text-sm uppercase tracking-wider">
              THE LIFT CO
            </div>
          </div>

          {/* Main Headline */}
          <div className={`mb-8 sm:mb-12 transition-all duration-1000 delay-300 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 mb-6 leading-tight tracking-wide">
              BUILT TO BOOST
            </h1>

            <div className="space-y-2 sm:space-y-3 mb-8">
              <p className="text-xl sm:text-2xl md:text-3xl text-neutral-200 font-semibold">
                Strategic Moves.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl text-neutral-200 font-semibold">
                Creative Lifts.
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl text-primary-300 font-bold">
                Elite Results.
              </p>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-8">
              I'm not your average trainer. I'm a <span className="text-primary-400 font-bold">creative entrepreneur</span> obsessed
              with human transformation. 10 years perfecting the art of getting results.
            </p>

            <div className="inline-block bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg p-4 border border-primary-500/30">
              <p className="text-accent-300 font-semibold text-lg">
                Ready to stop making excuses and start making progress?
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16 sm:mb-20 transition-all duration-1000 delay-600 ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link
              to="/home"
              className="flex-1 max-w-sm mx-auto bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-xl text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              🔥 START TRAINING
            </Link>

            <Link
              to="/services"
              className="flex-1 max-w-sm mx-auto bg-gradient-to-r from-accent-600 to-primary-600 text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-xl text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              🚀 BUSINESS SERVICES
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-primary-400 font-bold text-sm uppercase tracking-wider mb-3">
            EXPLORE
          </div>
          <svg className="w-8 h-8 mx-auto text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 relative">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6">
              Why Choose The Lift Co?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Experience the difference of working with a creative entrepreneur who understands both fitness and business success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-neutral-300 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-primary-300 flex items-center justify-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">
            Success Stories
          </h2>

          <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl p-8 sm:p-12">
            <div className="transition-all duration-500 ease-in-out">
              <p className="text-xl sm:text-2xl text-neutral-200 italic mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="text-primary-400 font-bold text-lg">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="text-neutral-400 text-sm">
                {testimonials[currentTestimonial].role}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-primary-500' : 'bg-neutral-600'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Consultation", desc: "We discuss your goals, challenges, and create a custom plan" },
              { step: "02", title: "Strategic Planning", desc: "Design your transformation roadmap for body and business" },
              { step: "03", title: "Implementation", desc: "Execute with proven systems and continuous support" },
              { step: "04", title: "Elite Results", desc: "Achieve your transformation and maintain long-term success" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-neutral-950 font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-8">
            Ready to Get Lifted?
          </h2>

          <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
            Stop waiting for the perfect moment. Your transformation starts with a single decision.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/home"
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-neutral-950 font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </Link>

            <a
              href="tel:+27635432439"
              className="border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-neutral-950 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300"
            >
              Call Now: 063 543 2439
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 py-8 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 mb-4 md:mb-0">
              © 2024 The Lift Co. Built to Boost.
            </div>
            <div className="flex space-x-6">
              <a href="mailto:tshiamokl@gmail.com" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                Email
              </a>
              <a href="tel:+27635432439" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                Phone
              </a>
              <a href="https://instagram.com/thelift.co" className="text-neutral-400 hover:text-primary-400 transition-colors duration-300">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}