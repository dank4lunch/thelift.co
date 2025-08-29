/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion']
  },
  transpilePackages: ['three'],
  
  // Essential for Replit to work properly
  images: {
    domains: ['localhost', '0.0.0.0'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.replit.dev',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },

  webpack: (config, { isServer }) => {
    // Handle 3D libraries properly for client-side only
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }

    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    })

    return config
  },

  // Remove security headers that block Replit iframe
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
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

  // Essential Replit configuration
  trailingSlash: false,
  poweredByHeader: false,
  
  // Allow iframe embedding for Replit preview
  async rewrites() {
    return []
  }
}

module.exports = nextConfig