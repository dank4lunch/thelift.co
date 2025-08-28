
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
        <TrainerAbout
          aboutText="The Lift.co is an amalgamation of a holistic creative process. It is a segmented business, split into sport and fitness training and creative marketing services. The training is in-person training and online coaching and sports specific training and conditioning, and the creative marketing business extends from digital marketing to event coordination and curation, and everything in between. Based on the talents of one dreamer, who is willing to stand out and service across the spectrum."
          operatingHours="Monday to Sunday: 5 AM - 10 PM, Sunday by appointment."
          packages={[
            {
              name: 'One-on-One',
              description: "Whether you want a full-time trainer or you need a few months of training to help you reach one of your short-term goals, you can work with your trainer to select a custom package. This allows you to set the frequency of workouts and duration you'll need them for.",
              sessions: '8 sessions over 1 month',
              duration: '60 min per session',
              price: 'R2 160',
              perSessionPrice: 'R270 per session'
            }
          ]}
          faq={[
            {
              question: "What should I expect in my first session?",
              answer: "Your first session includes a comprehensive fitness assessment, goal setting, and an introduction to your personalized training program."
            }
          ]}
          consultationPrice="R500"
        />
        <TrainingPackages />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
