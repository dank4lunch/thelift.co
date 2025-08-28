
import React from 'react'
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

export default function HomeFull() {
  return (
    <ClientErrorBoundary>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <Hero />
        <TrainerAbout />
        <Specializations />
        <Gallery />
        <TrainingPackages />
        <FreeConsultation />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </ClientErrorBoundary>
  )
}
