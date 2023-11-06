/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  reactStrictMode: false,
  i18n,
  images: {
    domains: ['api.megamix.getter.uz', 'images.unsplash.com', 'api.megamix.uz'],
    formats: ['image/avif', 'image/webp', 'image/png']
  }
}

module.exports = nextConfig
