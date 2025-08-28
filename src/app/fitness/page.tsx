
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import TrainerAbout from '@/components/TrainerAbout'
import TrainingPackages from '@/components/TrainingPackages'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'

export const metadata: Metadata = {
  title: 'Elite Personal Training - Transform Your Body & Mind 💪',
  description: 'Experience premium personal training with Tshiamo Sookane! Boxing, HIIT, strength training & holistic wellness coaching. 10+ years transforming lives across Gauteng. Built to Boost your fitness journey! 🏋️‍♂️',
  keywords: 'personal trainer Gauteng, boxing training, HIIT workouts, strength training, fitness coaching, mobile personal training, sports conditioning, wellness coaching',
  openGraph: {
    title: 'Elite Personal Training That Transforms Lives 💪',
    description: 'Premium fitness coaching with certified trainer Tshiamo Sookane. Boxing, HIIT, strength training & more. Built to Boost your potential!',
    type: 'website',
    images: [
      {
        url: '/images/IMG_0253_1754429519057.jpeg',
        width: 1200,
        height: 630,
        alt: 'Tshiamo Sookane - Elite Personal Trainer',
      },
    ],
  },
}

export default function FitnessPage() {
  return (
    <>
      <SkipNav />
      <Navigation />
      <main>
        <Hero />
        <TrainerAbout />
        <TrainingPackages />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
