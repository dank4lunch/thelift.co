
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
        <section className="py-20 sm:py-24 bg-gradient-to-b from-neutral-900 to-neutral-800 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-48 h-48 sm:w-64 sm:h-64 bg-primary-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-64 sm:h-64 bg-accent-500/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 leading-tight">
                Why Choose The Lift Co?
              </h2>
              <p className="text-lg sm:text-xl text-neutral-400 mb-16 max-w-3xl mx-auto">
                Experience the difference that comes from working with a dedicated professional who truly cares about your success.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-12">
                <div className="group h-full">
                  <div className="bg-gradient-to-br from-neutral-800/60 to-neutral-700/60 p-6 lg:p-8 rounded-2xl border border-primary-500/30 backdrop-blur-sm h-full flex flex-col hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 flex-shrink-0 group-hover:animate-pulse">
                      <span className="text-xl sm:text-2xl">💪</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary-400 mb-4 text-center">10+ Years Experience</h3>
                    <p className="text-neutral-300 leading-relaxed text-center flex-grow text-sm sm:text-base">
                      Proven track record in fitness training, sports conditioning, and helping clients achieve their transformation goals with measurable results.
                    </p>
                  </div>
                </div>
                
                <div className="group h-full">
                  <div className="bg-gradient-to-br from-neutral-800/60 to-neutral-700/60 p-6 lg:p-8 rounded-2xl border border-accent-500/30 backdrop-blur-sm h-full flex flex-col hover:border-accent-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6 flex-shrink-0 group-hover:animate-pulse">
                      <span className="text-xl sm:text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-accent-400 mb-4 text-center">Results-Driven Approach</h3>
                    <p className="text-neutral-300 leading-relaxed text-center flex-grow text-sm sm:text-base">
                      No cookie-cutter programs. Every training plan is customized to your specific goals, fitness level, and lifestyle for maximum impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-neutral-800 to-neutral-900 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 sm:mb-8 leading-tight">
                What We Offer
              </h2>
              <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                From personal training to business development, we provide comprehensive solutions for your success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
              <div className="group bg-gradient-to-br from-primary-900/30 to-primary-800/30 p-6 sm:p-8 rounded-2xl border border-primary-500/30 backdrop-blur-sm hover:transform hover:scale-105 hover:border-primary-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <span className="text-xl">🏋️</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary-400">Fitness Training</h3>
                </div>
                
                <ul className="space-y-3 text-neutral-300 mb-6">
                  <li className="flex items-center gap-3">
                    <span className="text-primary-400 font-bold">✓</span>
                    Personal Training Sessions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary-400 font-bold">✓</span>
                    Custom Workout Programs
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary-400 font-bold">✓</span>
                    Nutrition Guidance
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary-400 font-bold">✓</span>
                    Progress Tracking
                  </li>
                </ul>
                <a
                  href="/home"
                  className="inline-block bg-primary-500 text-neutral-950 font-bold py-3 px-6 rounded-xl hover:bg-primary-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Explore Training
                </a>
              </div>
              
              <div className="group bg-gradient-to-br from-accent-900/30 to-accent-800/30 p-6 sm:p-8 rounded-2xl border border-accent-500/30 backdrop-blur-sm hover:transform hover:scale-105 hover:border-accent-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
                    <span className="text-xl">🚀</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-accent-400">Business Services</h3>
                </div>
                
                <ul className="space-y-3 text-neutral-300 mb-6">
                  <li className="flex items-center gap-3">
                    <span className="text-accent-400 font-bold">✓</span>
                    Brand Development
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent-400 font-bold">✓</span>
                    Marketing Strategy
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent-400 font-bold">✓</span>
                    Event Planning
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-accent-400 font-bold">✓</span>
                    Business Consulting
                  </li>
                </ul>
                <a
                  href="/marketing"
                  className="inline-block bg-accent-500 text-neutral-950 font-bold py-3 px-6 rounded-xl hover:bg-accent-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
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
