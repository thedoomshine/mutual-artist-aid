/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/mutual-artist-aid/' : '',
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
    AIRTABLE_TABLE_NAME: process.env.AIRTABLE_TABLE_NAME,
  },
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig