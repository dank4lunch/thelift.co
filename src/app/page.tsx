
'use client'

import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import SkipNav from '@/components/SkipNav'
import ClientErrorBoundary from '@/components/ClientErrorBoundary'

export default function Home() {
  return (
    <ClientErrorBoundary>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <Hero />
      </main>
    </ClientErrorBoundary>
  )
}
