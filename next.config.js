/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable external scripts and improve error handling
  experimental: {
    optimizePackageImports: ['lucide-react']
  },

  // Improve webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Add fallbacks for Node.js modules in client-side code
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: false,
        fs: false,
        path: false,
        os: false,
      }
    }

    // Disable source maps in development to reduce HMR issues
    if (dev) {
      config.devtool = false
    }

    return config
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
