
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
            <TrainerAbout />
            <Specializations />
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
