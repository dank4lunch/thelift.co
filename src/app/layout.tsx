
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Lift Co - Personal Training & Fitness Services',
  description: 'Professional personal training services with Tshiamo Sookane in Gauteng, South Africa.',
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
