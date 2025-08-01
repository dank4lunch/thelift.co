import type { Metadata } from 'next'
import React from 'react'

import './globals.css'

export const metadata: Metadata = {
  title: 'The Lift Co - Elite Personal Training Gauteng | Johannesburg, Pretoria, Sandton',
  description: 'Elite personal training across Gauteng with Tshiamo Sookane. Serving Johannesburg, Pretoria, Sandton, Centurion, Midrand, Randburg. Transform your body with proven fitness programs, strength training, HIIT, boxing, and nutrition coaching.',
  keywords: 'personal trainer Gauteng, elite fitness training Johannesburg, personal trainer Pretoria, body transformation Sandton, strength training Centurion, HIIT training Midrand, boxing coach Randburg, nutrition coaching Roodepoort, personal training Benoni, fitness transformation Boksburg, weight loss coach Germiston, muscle building Soweto, corporate wellness Fourways, sports conditioning Rosebank, personal trainer Woodmead, fitness coach Melrose, gym trainer Bryanston',
  authors: [{ name: 'Tshiamo Sookane - The Lift Co' }],
  robots: 'index, follow',
  openGraph: {
    title: 'The Lift Co - Elite Personal Training Gauteng | Johannesburg, Pretoria, Sandton',
    description: 'Elite personal training across Gauteng with Tshiamo Sookane. Serving Johannesburg, Pretoria, Sandton, Centurion, and surrounding areas.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'The Lift Co',
    url: 'https://theliftco.co.za',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Lift Co - Elite Personal Training Gauteng',
    description: 'Transform your body with elite personal training programs across Gauteng - Johannesburg, Pretoria, Sandton & more.',
  },
  alternates: {
    canonical: 'https://theliftco.co.za',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
