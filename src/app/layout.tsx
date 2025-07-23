import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Lift Co - Built to Boost. Strategic Moves. Creative Lifts.',
  description: 'We blend strategy with soul. The Lift Co is not just a service — it\'s a movement. Our multidisciplinary edge allows us to uniquely uplift every layer of your life and business.',
  keywords: 'personal training, brand development, creative strategy, business growth, fitness coaching, Johannesburg',
  authors: [{ name: 'The Lift Co' }],
  openGraph: {
    title: 'The Lift Co - Built to Boost. Strategic Moves. Creative Lifts.',
    description: 'We blend strategy with soul. The Lift Co is not just a service — it\'s a movement.',
    type: 'website',
    locale: 'en_ZA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
