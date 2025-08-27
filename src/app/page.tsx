
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import TrainerAbout from '@/components/TrainerAbout'
import InstagramShowcase from '@/components/InstagramShowcase'
import TrainingPackages from '@/components/TrainingPackages'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import SkipNav from '@/components/SkipNav'

export default function Home() {
  return (
    <>
      <SkipNav />
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <Hero />
        <About />
        <Services />
        <TrainerAbout />
        <InstagramShowcase />
        <TrainingPackages />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
