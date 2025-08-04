import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Client Transformations & Success Gallery | The Lift Co',
  description: 'View real client transformations, training sessions, and success stories from Tshiamo Sookane\'s personal training programs in Sandton.',
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  )
}
