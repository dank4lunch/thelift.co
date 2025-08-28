
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'

export const metadata: Metadata = {
  title: 'Training Gallery - Real Training, Real Results 📸',
  description: 'See elite training in action! Professional training sessions, real transformations, and the environment where champions are made.',
  keywords: 'training gallery, fitness photos, training sessions, gym environment, elite training facilities',
  openGraph: {
    title: 'Training Gallery - Real Training, Real Results 📸',
    description: 'See elite training in action! Professional training sessions and real transformations.',
    type: 'website',
  },
}

export default function GalleryPage() {
  return (
    <>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="pt-20">
          <Gallery />
        </div>
      </main>
      <Footer />
    </>
  )
}
