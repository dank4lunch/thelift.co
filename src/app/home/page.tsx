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
import { Metadata } from 'next'
import Gallery from '@/components/Gallery'

export const metadata: Metadata = {
  title: 'Home - The Lift Co | Personal Training & Fitness Services',
  description: 'Discover comprehensive personal training services with Tshiamo Sookane. 10 years of experience in fitness coaching, boxing, HIIT, and nutrition planning across Gauteng.',
  keywords: 'personal trainer Gauteng, fitness coach, boxing training, HIIT training, nutrition coaching, sports conditioning',
  openGraph: {
    title: 'The Lift Co - Complete Fitness Services',
    description: 'Your complete fitness transformation journey starts here with expert guidance and proven results.',
    type: 'website',
  },
}

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
              aboutText="The Lift.co is an amalgamation of a holistic creative process. It is a segmented business, split into sport and fitness training and creative marketing services. The training is in-person training and online coaching and sports specific training and conditioning, and the creative marketing business extends from digital marketing to event coordination and curation, and everything in between. Based on the talents of one dreamer, who is willing to stand out and service across the spectrum. Get lifted with personal trainer. Creative entrepreneur."
              operatingHours="Monday to Sunday: 5 AM - 10 PM, Sunday by appointment."
              packages={[
                {
                  name: 'One-on-One',
                  description: "Whether you want a full-time trainer or you need a few months of training to help you reach one of your short-term goals, you can work with your trainer to select a custom package. This allows you to set the frequency of workouts and duration you'll need them for.",
                  sessions: '8 sessions over 1 month',
                  duration: '60 min per session',
                  price: 'R2 160',
                  perSessionPrice: 'R270 per session',
                },
                {
                  name: 'PT Six Pack',
                  description: '1 x in-depth consultation, 5 x 45 min training sessions',
                  price: 'R1270 per package',
                },
              ]}
              faq={ [
                {
                  question: "What can I expect from my consultation?",
                  answer: "The best way to kick off your Personal Training journey. The consultation is about getting to know you better so your Personal Trainer has a clear idea of your goals. During the consultation, you will discuss your training goals, health concerns, your training preferences, and available packages and costs.",
                },
                {
                  question: "What if I can't make my appointment?",
                  answer: "Please contact us at least 24 hours in advance to reschedule your appointment. No-shows or cancellations made less than 24 hours in advance will be charged the full session fee."
                },
                {
                  question: "What if I'm not happy with my Personal Trainer?",
                  answer: "We strive to ensure all our clients are satisfied with their training experience. If you are not happy with your Personal Trainer, please contact us to discuss your concerns. We will do our best to find a suitable solution, which may include matching you with a different trainer."
                }
              ]}
              consultationPrice="R64"
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