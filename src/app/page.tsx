import LandingHero from '@/components/LandingHero'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'
import ClientErrorBoundary from '@/components/ClientErrorBoundary'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Lift Co - Elite Personal Training Gauteng | Transform Your Life',
  description: 'Elite personal training with Tshiamo Sookane across Gauteng. 10 years of experience transforming lives through fitness. Serving Johannesburg, Pretoria, Sandton, and surrounding areas.',
  keywords: 'personal trainer Gauteng, elite fitness training Johannesburg, personal trainer Pretoria, body transformation Sandton, strength training Centurion, HIIT training Midrand, boxing coach Randburg, nutrition coaching',
  openGraph: {
    title: 'The Lift Co - Elite Personal Training Gauteng',
    description: 'Transform your life with 10 years of proven fitness expertise across Gauteng.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://theliftco.co.za',
  },
}

export default function LandingPage() {
  return (
    <>
      <ClientErrorBoundary>
        <div className="min-h-screen">
          <SkipNav />
          <Navigation />
          <main id="main-content" className="focus:outline-none" tabIndex={-1}>
            <LandingHero />
          </main>
          <Footer />
        </div>
      </ClientErrorBoundary>
    </>
  )
}