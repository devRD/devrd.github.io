/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

 // Add basePath
  basePath: '/website',
  images: {
    domains: ['localhost'],
  },


}

module.exports = nextConfig
