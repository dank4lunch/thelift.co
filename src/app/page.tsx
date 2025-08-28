
'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import TrainingPackages from '@/components/TrainingPackages'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'

export default function HomePage() {
  return (
    <>
      <SkipNav />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <TrainingPackages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
