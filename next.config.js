/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    // HOST: process.env.HOST,
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  images: {
    // TODO replace with own domian
    domains: ['thumb.tildacdn.com']
  }
};

module.exports = nextConfig;
