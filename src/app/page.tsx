
'use client'

import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import SkipNav from '@/components/SkipNav'
import ClientErrorBoundary from '@/components/ClientErrorBoundary'
import About from '@/components/About'
import Services from '@/components/Services'
import BusinessOverview from '@/components/BusinessOverview'
import TrainingShowcase from '@/components/TrainingShowcase'
import InstagramShowcase from '@/components/InstagramShowcase'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <ClientErrorBoundary>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <Hero />
        <About />
        <Services />
        <BusinessOverview />
        <TrainingShowcase />
        <InstagramShowcase />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </ClientErrorBoundary>
  )
}
