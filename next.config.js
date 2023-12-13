/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud.samentejarat.com',
        port: '',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: 'samentejarat.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
