
import React from 'react'
import Navigation from '@/components/Navigation'
import SkipNav from '@/components/SkipNav'
import ClientErrorBoundary from '@/components/ClientErrorBoundary'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  return (
    <ClientErrorBoundary>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 pt-20">
        <Services />
      </main>
      <Footer />
    </ClientErrorBoundary>
  )
}
