import Services from '@/components/Services'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Training Services - The Lift Co',
  description: 'Elite personal training programs in Johannesburg. Transform your body with proven results.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Services />
      <Footer />
    </main>
  )
}
