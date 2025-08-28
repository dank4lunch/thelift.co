
import React from 'react'
import MarketingHero from '@/components/MarketingHero'
import MarketingServices from '@/components/MarketingServices'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'
import ClientErrorBoundary from '@/components/ClientErrorBoundary'

export default function MarketingPage() {
  return (
    <ClientErrorBoundary>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <MarketingHero />
        <MarketingServices />
      </main>
      <Footer />
    </ClientErrorBoundary>
  )
}
