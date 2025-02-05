// next.config.js
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'], // Allow Google images
    remotePatterns: [
      {
        hostname: "cdn.sanity.io", // Allow images from Sanity
      },
    ],
  },
};

module.exports = nextConfig;
