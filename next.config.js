/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable external scripts and improve error handling
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', 'three', '@react-three/fiber', '@react-three/drei']
  },

  // Enable strict mode for better performance
  reactStrictMode: true,

  // Ensure app runs on correct port
  env: {
    NEXT_PUBLIC_PORT: process.env.PORT || '3000',
  },

  // Add security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  allowedDevOrigins: ['3285b41d-92fb-4e70-a6e6-f318b2036917-00-6u9yp2t8h94l.kirk.replit.dev']
}

module.exports = nextConfig