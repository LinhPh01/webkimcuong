/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["test.devtest.asia"], // Thêm domain của bạn vào đây
  },
  optimizeFonts: false, // Example of disabling font optimization
  optimizeImages: false, // Example of disabling image optimization
  cssMinify: false, // Custom property if cssnano is an issue, but not directly applicable in Next.js
  webpack: (config) => {
    config.optimization.minimize = false; // This disables all minification
    return config;
  },
  // i18n: {
  //   locales: ["en", "vi"], // Các ngôn ngữ được hỗ trợ
  //   defaultLocale: "vi", // Ngôn ngữ mặc định
  // },
};

export default nextConfig;
