import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'The Lift Co - Personal Trainer in Sandton | Tshiamo Sookane',
    template: '%s | The Lift Co'
  },
  description: 'Transform your body with elite personal training in Sandton CBD. Tshiamo Sookane offers personalized fitness programs, HIIT, boxing, and sports conditioning. Free 15-minute consultation available.',
  keywords: [
    'personal trainer Sandton',
    'fitness trainer Johannesburg',
    'HIIT training',
    'boxing fitness',
    'sports conditioning',
    'weight loss Sandton',
    'muscle building',
    'corporate wellness',
    'Tshiamo Sookane',
    'elite training',
    'brand development',
    'creative strategy',
    'business growth'
  ],
  authors: [{ name: 'Tshiamo Sookane' }],
  creator: 'The Lift Co',
  publisher: 'The Lift Co',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'The Lift Co - Personal Trainer in Sandton | Transform Your Body',
    description: 'Elite personal training in Sandton CBD. Specialized in HIIT, boxing, sports conditioning. Get your free consultation with certified trainer Tshiamo Sookane.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'The Lift Co',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Lift Co - Personal Training in Sandton',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Lift Co - Personal Trainer in Sandton',
    description: 'Transform your body with elite personal training. Free consultation available.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#e3b547" />
        <meta name="msapplication-TileColor" content="#e3b547" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://wa.me" />

        {/* Schema.org structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "The Lift Co",
              "description": "Personal training and fitness services in Sandton CBD",
              "url": "https://theliftco.co.za",
              "telephone": "+27635432439",
              "email": "tshiamokl@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sandton",
                "addressRegion": "Gauteng",
                "addressCountry": "ZA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -26.1076,
                "longitude": 28.0567
              },
              "openingHours": [
                "Mo-Fr 06:00-20:00",
                "Sa 08:00-18:00",
                "Su 09:00-16:00"
              ],
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -26.1076,
                  "longitude": 28.0567
                },
                "geoRadius": "25000"
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
                      "description": "One-on-one personal training sessions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "HIIT Training",
                      "description": "High-intensity interval training sessions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Boxing Fitness",
                      "description": "Boxing-based fitness training"
                    }
                  }
                ]
              },
              "founder": {
                "@type": "Person",
                "name": "Tshiamo Sookane",
                "jobTitle": "Personal Trainer & Fitness Coach"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
