import Services from '@/components/Services'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personal Training Services Sandton CBD | Elite Fitness Programs - The Lift Co',
  description: 'Elite personal training services in Sandton CBD. Choose from PT packages, monthly plans, bootcamp, boxing, HIIT, and sports coaching. Free consultation available. Tshiamo Sookane - certified trainer with 500+ transformations.',
  keywords: 'personal training packages Sandton, fitness programs Sandton CBD, personal trainer Johannesburg, bootcamp training, boxing classes, HIIT training, sports coaching, nutrition coaching, body transformation, strength training, consultation booking',
  openGraph: {
    title: 'Personal Training Services Sandton CBD | Elite Fitness Programs',
    description: 'Elite personal training services in Sandton CBD. Free consultation, PT packages, and monthly fitness plans available.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://theliftco.co.za/services',
  },
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
