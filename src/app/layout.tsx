import type { Metadata } from 'next'
import React from 'react'
import TwemojiLoader from '@/components/TwemojiLoader'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Lift Co - Elite Personal Training & Transformation | Sandton CBD',
  description: 'Elite personal training in Sandton CBD with Tshiamo Sookane. Transform your body with proven fitness programs, strength training, HIIT, boxing, and nutrition coaching. Book your consultation today.',
  keywords: 'personal trainer Sandton, elite fitness training Johannesburg, body transformation Sandton CBD, strength training, HIIT training, boxing coach, nutrition coaching, personal training Gauteng, fitness transformation, weight loss coach Sandton, muscle building, corporate wellness, sports conditioning',
  authors: [{ name: 'Tshiamo Sookane - The Lift Co' }],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'The Lift Co - Elite Personal Training & Transformation | Sandton CBD',
    description: 'Elite personal training in Sandton CBD with Tshiamo Sookane. Transform your body with proven fitness programs and achieve your fitness goals.',
    type: 'website',
    locale: 'en_ZA',
    siteName: 'The Lift Co',
    url: 'https://theliftco.co.za',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Lift Co - Elite Personal Training Sandton CBD',
    description: 'Transform your body with elite personal training programs in Sandton CBD.',
  },
  alternates: {
    canonical: 'https://theliftco.co.za',
  },
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
        <TwemojiLoader />
      </body>
    </html>
  )
}
