/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable external scripts and improve error handling
  experimental: {
    optimizePackageImports: ['lucide-react']
  },

  // Disable strict mode temporarily to avoid double-rendering issues
  reactStrictMode: false,

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
}

module.exports = nextConfig