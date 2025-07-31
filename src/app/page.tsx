import Hero from '@/components/Hero'
import InstagramShowcase from '@/components/InstagramShowcase'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Lift Co - Elite Personal Training Sandton CBD | Transform Your Body',
  description: 'Elite personal training in Sandton CBD with Tshiamo Sookane. Proven body transformation programs including strength training, HIIT, boxing, and nutrition coaching. Book your free consultation today.',
  keywords: 'personal trainer Sandton CBD, elite fitness training Johannesburg, body transformation, strength training Sandton, HIIT training, boxing coach, nutrition coaching Sandton, fitness transformation Gauteng',
  openGraph: {
    title: 'The Lift Co - Elite Personal Training Sandton CBD',
    description: 'Transform your body with elite personal training programs in Sandton CBD. Free consultation available.',
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
  "description": "Elite personal training and body transformation services in Sandton CBD",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sandton CBD",
    "addressLocality": "Sandton",
    "addressRegion": "Gauteng",
    "addressCountry": "ZA"
  },
  "telephone": "+27635432439",
  "email": "Tshiamokl@gmail.com",
  "url": "https://theliftco.co.za",
  "priceRange": "$$",
  "openingHours": "Mo-Sa 06:00-20:00",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -26.1076,
      "longitude": 28.0567
    },
    "geoRadius": "25000"
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
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <InstagramShowcase />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
