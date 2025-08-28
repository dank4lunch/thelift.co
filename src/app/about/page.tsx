import Navigation from '@/components/Navigation'
import SkipNav from '@/components/SkipNav'
import About from '@/components/About'
import TrainerAbout from '@/components/TrainerAbout'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meet Tshiamo - The Visionary Behind The Lift Co',
  description: 'Discover the story of Tshiamo Sookane, elite personal trainer and creative entrepreneur. From fitness transformation to business innovation - meet the dreamer lifting Gauteng up! ✨💪',
  keywords: 'Tshiamo Sookane, personal trainer story, fitness entrepreneur, creative business, holistic training, elite coach background',
  openGraph: {
    title: 'Meet Tshiamo - The Visionary Behind The Lift Co ✨',
    description: 'The story of a dreamer who turned passion into purpose. Meet Tshiamo Sookane - elite trainer, creative entrepreneur, and life transformer.',
    type: 'profile',
    images: [
      {
        url: '/images/IMG_0253_1754429519057.jpeg',
        width: 1200,
        height: 630,
        alt: 'Tshiamo Sookane - Founder of The Lift Co',
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="pt-20">
          <About />
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
        </div>
      </main>
      <Footer />
    </>
  )
}