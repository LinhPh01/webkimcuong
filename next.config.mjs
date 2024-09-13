/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: false, // Example of disabling font optimization
  optimizeImages: false, // Example of disabling image optimization
  cssMinify: false, // Custom property if cssnano is an issue, but not directly applicable in Next.js
  webpack: (config) => {
    config.optimization.minimize = false; // This disables all minification
    return config;
  },

};

export default nextConfig;
