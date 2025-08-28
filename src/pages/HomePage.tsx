
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <Hero />
      </main>
      <Footer />
    </>
  )
}
