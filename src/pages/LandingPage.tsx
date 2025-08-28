
import React from 'react'
import LandingHero from '@/components/LandingHero'
import LandingContact from '@/components/LandingContact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'
import ClientErrorBoundary from '@/components/ClientErrorBoundary'

export default function LandingPage() {
  return (
    <ClientErrorBoundary>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <LandingHero />
        <LandingContact />
      </main>
      <Footer />
    </ClientErrorBoundary>
  )
}
