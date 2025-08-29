/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion']
  },
  transpilePackages: ['three'],
  
  // Fix for Replit preview access
  allowedDevOrigins: ['3285b41d-92fb-4e70-a6e6-f318b2036917-00-6u9yp2t8h94l.kirk.replit.dev'],
  
  // Essential for Replit to work properly
  images: {
    domains: ['localhost', '0.0.0.0', '3285b41d-92fb-4e70-a6e6-f318b2036917-00-6u9yp2t8h94l.kirk.replit.dev'],
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

  // Essential Replit configuration
  trailingSlash: false,
  poweredByHeader: false,
  
  // Allow iframe embedding for Replit preview
  async rewrites() {
    return []
  }
}

module.exports = nextConfig