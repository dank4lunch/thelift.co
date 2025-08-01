import Hero from '@/components/Hero'
import TrainerAbout from '@/components/TrainerAbout'
import Specializations from '@/components/Specializations'
import TrainingPackages from '@/components/TrainingPackages'
import FreeConsultation from '@/components/FreeConsultation'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'
import ClientErrorBoundary from '@/components/ClientErrorBoundary'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tshiamo Sookane - Personal Trainer Sandton CBD | Transform Your Body',
  description: 'Personal trainer Tshiamo Sookane in Sandton CBD, Gauteng. Higher Certificate in Exercise Science (HFPA). Specializing in Bootcamp, Boxing, HIIT, and Personal Training. Free 15-minute consultation available.',
  keywords: 'personal trainer Gauteng, elite fitness training Johannesburg, personal trainer Pretoria, body transformation Sandton, strength training Centurion, HIIT training Midrand, boxing coach Randburg, nutrition coaching Roodepoort, fitness transformation Benoni, weight loss coach Boksburg, gym trainer Fourways',
  openGraph: {
    title: 'The Lift Co - Elite Personal Training Gauteng',
    description: 'Transform your body with elite personal training programs across Gauteng - Johannesburg, Pretoria, Sandton & more. Free consultation available.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://theliftco.co.za',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Lift Co",
  "image": "https://theliftco.co.za/logo.png",
  "description": "Elite personal training and body transformation services across Gauteng province including Johannesburg, Pretoria, Sandton, Centurion, Midrand, Randburg, Roodepoort, and surrounding areas",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gauteng Province",
    "addressLocality": "Johannesburg",
    "addressRegion": "Gauteng",
    "addressCountry": "ZA"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Johannesburg",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    {
      "@type": "City",
      "name": "Pretoria",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    {
      "@type": "City",
      "name": "Sandton",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    {
      "@type": "City",
      "name": "Centurion",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    {
      "@type": "City",
      "name": "Midrand",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    {
      "@type": "City",
      "name": "Randburg",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    {
      "@type": "City",
      "name": "Roodepoort",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    }
  ],
  "telephone": "+27635432439",
  "email": "Tshiamokl@gmail.com",
  "url": "https://theliftco.co.za",
  "priceRange": "$$",
  "openingHours": "Mo-Sa 06:00-20:00",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -26.2041,
      "longitude": 28.0473
    },
    "geoRadius": "50000"
  },
  "founder": {
    "@type": "Person",
    "name": "Tshiamo Sookane",
    "jobTitle": "Elite Personal Trainer",
    "telephone": "+27635432439",
    "email": "Tshiamokl@gmail.com"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Personal Training Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Personal Training",
          "description": "One-on-one elite personal training sessions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HIIT Training",
          "description": "High-intensity interval training programs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Boxing Training",
          "description": "Professional boxing and combat training"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nutrition Coaching",
          "description": "Personalized nutrition plans and coaching"
        }
      }
    ]
  }
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClientErrorBoundary>
        <div className="min-h-screen">
          <SkipNav />
          <Navigation />
          <main id="main-content" className="focus:outline-none" tabIndex={-1}>
            <Hero />
            <TrainerAbout />
            <Specializations />
            <TrainingPackages />
            <FreeConsultation />
            <FAQ />
            <FinalCTA />
            <Contact />
          </main>
          <Footer />
        </div>
      </ClientErrorBoundary>
    </>
  )
}
