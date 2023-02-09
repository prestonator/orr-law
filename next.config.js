/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'orr.prestonator.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
