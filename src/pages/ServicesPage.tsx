
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
          <p className="text-neutral-300 text-lg">
            Comprehensive fitness and business services.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
