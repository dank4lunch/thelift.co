
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import TrainingPackages from '@/components/TrainingPackages'
import FreeConsultation from '@/components/FreeConsultation'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'

export const metadata: Metadata = {
  title: 'Training Packages - Choose Your Transformation 💪',
  description: 'Explore our elite training packages! From free consultations to monthly transformations. Personalized training programs designed to elevate your fitness journey.',
  keywords: 'training packages, personal training prices, fitness consultation, elite training programs, monthly training packages',
  openGraph: {
    title: 'Training Packages - Choose Your Transformation 💪',
    description: 'Elite training packages designed for real transformation. Free consultations, starter packs, and monthly programs.',
    type: 'website',
  },
}

export default function PackagesPage() {
  return (
    <>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="pt-20">
          <TrainingPackages />
          <FreeConsultation />
        </div>
      </main>
      <Footer />
    </>
  )
}
