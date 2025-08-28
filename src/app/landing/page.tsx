
'use client'

import LandingHero from '@/components/LandingHero'
import LandingContact from '@/components/LandingContact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ClientErrorBoundary from '@/components/ClientErrorBoundary'
import SkipNav from '@/components/SkipNav'

export default function LandingPage() {
  return (
    <ClientErrorBoundary>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen">
        <LandingHero />
        
        {/* About Section */}
        <section className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-8">
                Why Choose The Lift Co?
              </h2>
              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-700/50 p-8 rounded-xl border border-primary-500/20 backdrop-blur-sm">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">💪</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-400 mb-4">10+ Years Experience</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      Proven track record in fitness training, sports conditioning, and helping clients achieve their transformation goals.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-neutral-800/50 to-neutral-700/50 p-8 rounded-xl border border-accent-500/20 backdrop-blur-sm">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl font-bold text-accent-400 mb-4">Results-Driven Approach</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      No cookie-cutter programs. Every training plan is customized to your specific goals, fitness level, and lifestyle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-gradient-to-b from-neutral-800 to-neutral-900 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
                From personal training to business development, we provide comprehensive solutions for your success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-primary-900/20 to-primary-800/20 p-8 rounded-xl border border-primary-500/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-primary-400 mb-4">Fitness Training</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-center gap-3">
                    <span className="text-primary-400">✓</span>
                    Personal Training Sessions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary-400">✓</span>
                    Custom Workout Programs
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary-400">✓</span>
                    Nutrition Guidance
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary-400">✓</span>
                    Progress Tracking
                  </li>
                </ul>
                <a
                  href="/home"
                  className="inline-block mt-6 bg-primary-500 text-neutral-950 font-bold py-3 px-6 rounded-lg hover:bg-primary-400 transition-colors duration-300"
                >
                  Explore Training
                </a>
              </div>
              
              <div className="bg-gradient-to-br from-accent-900/20 to-accent-800/20 p-8 rounded-xl border border-accent-500/30 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-accent-400 mb-4">Business Services</h3>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-center gap-3">
                    <span className="text-accent-400">✓</span>
                    Brand Development
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent-400">✓</span>
                    Marketing Strategy
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent-400">✓</span>
                    Event Planning
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent-400">✓</span>
                    Business Consulting
                  </li>
                </ul>
                <a
                  href="/marketing"
                  className="inline-block mt-6 bg-accent-500 text-neutral-950 font-bold py-3 px-6 rounded-lg hover:bg-accent-400 transition-colors duration-300"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <LandingContact />
      </main>
      <Footer />
    </ClientErrorBoundary>
  )
}
