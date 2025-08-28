
import Navigation from '@/components/Navigation'
import SkipNav from '@/components/SkipNav'
import About from '@/components/About'
import TrainerAbout from '@/components/TrainerAbout'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="pt-20">
          <About />
          <TrainerAbout />
        </div>
      </main>
      <Footer />
    </>
  )
}
