
'use client'

import LandingHero from '@/components/LandingHero'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ClientErrorBoundary from '@/components/ClientErrorBoundary'
import SkipNav from '@/components/SkipNav'

export default function RootPage() {
  return (
    <ClientErrorBoundary>
      <SkipNav />
      <Navigation />
      <main>
        <LandingHero />
      </main>
      <Footer />
    </ClientErrorBoundary>
  )
}
