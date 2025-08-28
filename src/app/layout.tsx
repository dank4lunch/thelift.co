
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://thelift.co'),
  title: {
    default: 'The Lift Co - Transform Your Life with Premium Personal Training in Gauteng',
    template: '%s | The Lift Co - Built to Boost, Strategic Moves, Creative Lifts'
  },
  description: 'Meet Tshiamo Sookane, your elite personal trainer transforming lives across Gauteng. From Sandton to Germiston, experience premium fitness coaching, boxing, HIIT, and holistic wellness. Built to Boost. Strategic Moves. Creative Lifts. 🏋️‍♂️✨',
  keywords: [
    'personal trainer Gauteng',
    'fitness coach Sandton',
    'boxing training Johannesburg',
    'HIIT trainer',
    'nutrition coaching',
    'weight loss transformation',
    'muscle building',
    'sports conditioning',
    'mobile personal training',
    'Tshiamo Sookane',
    'The Lift Co',
    'elite fitness coaching',
    'holistic wellness',
    'strength training'
  ],
  authors: [{ name: 'Tshiamo Sookane', url: 'https://thelift.co' }],
  creator: 'Tshiamo Sookane',
  publisher: 'The Lift Co',
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
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://thelift.co',
    title: 'The Lift Co - Elite Personal Training That Transforms Lives 💪',
    description: 'Join Tshiamo\'s fitness revolution! Premium personal training across Gauteng with a coach who believes in lifting you up - body, mind, and spirit. Built to Boost. Strategic Moves. Creative Lifts.',
    siteName: 'The Lift Co',
    images: [
      {
        url: '/images/IMG_0253_1754429519057.jpeg',
        width: 1200,
        height: 630,
        alt: 'Tshiamo Sookane - Elite Personal Trainer at The Lift Co',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Lift Co - Elite Personal Training That Transforms Lives 💪',
    description: 'Premium fitness coaching across Gauteng with Tshiamo Sookane. Built to Boost. Strategic Moves. Creative Lifts. 🏋️‍♂️✨',
    images: ['/images/IMG_0253_1754429519057.jpeg'],
    creator: '@thelift.co',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Health & Fitness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
