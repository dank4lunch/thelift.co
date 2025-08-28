
'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'

export default function LandingPage() {
  return (
    <>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Welcome to The Lift Co
            </h2>
            <p className="text-xl text-neutral-700 mb-8 max-w-3xl mx-auto">
              Transform your fitness journey with personalized training programs designed to help you achieve your goals. 
              Professional coaching, proven results, and a supportive environment await you.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">Expert Coaching</h3>
                <p className="text-neutral-600">10+ years of experience in fitness training and sports conditioning</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">Personalized Programs</h3>
                <p className="text-neutral-600">Customized training plans tailored to your specific goals and fitness level</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary-600 mb-4">Proven Results</h3>
                <p className="text-neutral-600">Track record of helping clients achieve their fitness transformations</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
