import Services from '@/components/Services'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personal Training Services Gauteng | Elite Fitness Programs Johannesburg, Pretoria',
  description: 'Elite personal training services across Gauteng. Serving Johannesburg, Pretoria, Sandton, Centurion, Midrand. Choose from PT packages, monthly plans, bootcamp, boxing, HIIT, and sports coaching. Free consultation available.',
  keywords: 'personal training packages Gauteng, fitness programs Johannesburg, personal trainer Pretoria, bootcamp training Sandton, boxing classes Centurion, HIIT training Midrand, sports coaching Randburg, nutrition coaching Roodepoort, body transformation Benoni, strength training Boksburg, consultation booking Fourways, gym trainer Bryanston',
  openGraph: {
    title: 'Personal Training Services Gauteng | Elite Fitness Programs',
    description: 'Elite personal training services across Gauteng. Serving Johannesburg, Pretoria, Sandton, Centurion. Free consultation, PT packages, and monthly fitness plans available.',
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
