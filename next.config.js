/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- THIS IS THE MAGIC LINE
  images: {
    unoptimized: true, // Required for static export
  },
  // If you have swcMinify: true, delete it to remove that warning!
};

module.exports = nextConfig;