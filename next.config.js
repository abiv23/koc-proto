/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'web-assets.same.dev',
      },
    ],
    domains: ['ext.same-assets.com', 'web-assets.same.dev'],
  },
}

module.exports = nextConfig
