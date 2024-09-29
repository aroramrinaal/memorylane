/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['memorylanemedia.s3.us-east-2.amazonaws.com'],
  },
};

export default nextConfig;
