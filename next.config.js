/** @type {import('next').NextConfig} */
const nextConfig = { 
  output: 'export', 
  images: { unoptimized: true },
  basePath: '/cnno',
  assetPrefix: '/cnno'
}
module.exports = nextConfig
