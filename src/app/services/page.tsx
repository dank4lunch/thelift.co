import Navigation from '@/components/Navigation'
import SkipNav from '@/components/SkipNav'
import Services from '@/components/Services'
import TrainingPackages from '@/components/TrainingPackages'
import InstagramShowcase from '@/components/InstagramShowcase'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elite Training Programs - Boxing, HIIT, Strength & More',
  description: 'Discover premium personal training services! 🥊 Boxing, HIIT, strength training, nutrition coaching & sports conditioning. Customized packages from R270/session. Transform your life today! 💪',
  keywords: 'boxing training, HIIT workouts, strength training, personal training packages, nutrition coaching, sports conditioning, fitness transformation, elite training programs',
  openGraph: {
    title: 'Elite Training Programs That Transform Lives 🥊💪',
    description: 'Boxing, HIIT, strength training, and holistic wellness coaching. Premium packages designed to elevate your fitness journey.',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="pt-20">
          <Services />
          <TrainingPackages />
          <InstagramShowcase />
        </div>
      </main>
      <Footer />
    </>
  )
}