
import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navigation />
      <main id="main-content">
        <Hero />
        
        {/* Landing Page Specific Content */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-8">
              Welcome to The Lift Co
            </h2>
            <p className="text-lg text-neutral-300 mb-12 max-w-2xl mx-auto">
              Your premier destination for elite personal training in Germiston. 
              Transform your body, mind, and lifestyle with our expert coaching and personalized programs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Strength Training</h3>
                <p className="text-neutral-400">
                  Build lean muscle and increase your strength with our proven training methods.
                </p>
              </div>
              
              <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏃</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Cardio & Conditioning</h3>
                <p className="text-neutral-400">
                  Improve your cardiovascular health and endurance with dynamic workouts.
                </p>
              </div>
              
              <div className="bg-neutral-900 p-8 rounded-xl border border-neutral-800">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Personal Coaching</h3>
                <p className="text-neutral-400">
                  Get one-on-one attention and customized programs tailored to your goals.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-xl p-8 border border-primary-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
              <p className="text-neutral-300 mb-6">
                Book your free consultation today and take the first step towards your fitness goals.
              </p>
              <button className="bg-primary-500 hover:bg-primary-600 text-neutral-950 font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
