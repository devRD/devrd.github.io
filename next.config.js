/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

 // Add basePath for local setting
  basePath: '/website',
  images: {
    domains: ['localhost'],
  },


}

module.exports = nextConfig
