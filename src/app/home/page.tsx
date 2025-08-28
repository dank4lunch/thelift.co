'use client'

import Hero from '@/components/Hero'
import TrainerAbout from '@/components/TrainerAbout'
import Specializations from '@/components/Specializations'
import TrainingPackages from '@/components/TrainingPackages'
import FreeConsultation from '@/components/FreeConsultation'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'
import ClientErrorBoundary from '@/components/ClientErrorBoundary'
import Gallery from '@/components/Gallery'

export default function Home() {
  return (
    <>
      <ClientErrorBoundary>
        <div className="min-h-screen">
          <SkipNav />
          <Navigation />
          <main id="main-content" className="focus:outline-none" tabIndex={-1}>
            <Hero />
            <TrainerAbout
              aboutText="The Lift.co is an amalgamation of a holistic creative process. It is a segmented business, split into sport and fitness training and creative marketing services. The training is in-person training and online coaching and sports specific training and conditioning, and the creative marketing business extends from digital marketing to event coordination and curation, and everything in between. Based on the talents of one dreamer, who is willing to stand out and service across the spectrum."
              operatingHours="Monday to Sunday: 5 AM - 10 PM, Sunday by appointment."
              packages={[
                {
                  name: 'Starter Program',
                  description: "Perfect for beginners ready to start their fitness journey with professional guidance and support.",
                  sessions: '4 sessions over 2 weeks',
                  duration: '45 min per session',
                  price: 'R1 080',
                  perSessionPrice: 'R270 per session'
                }
              ]}
              faq={[
                {
                  question: "How do I get started?",
                  answer: "Book your free consultation and we'll create a personalized plan that fits your goals and lifestyle."
                }
              ]}
              consultationPrice="R500"
            />
            <Specializations />
            <Gallery />
            <TrainingPackages />
            <FreeConsultation />
            <FAQ />
            <FinalCTA />
            <Contact />
          </main>
          <Footer />
        </div>
      </ClientErrorBoundary>
    </>
  )
}