/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // Enables static export
  distDir: 'build', // Custom output directory for gh-pages
  images: {
    unoptimized: true, // Disable image optimization for static exports
  },
  assetPrefix: isProd ? '/adventure-lodge-landing' : '', // Ensure relative paths for assets
  basePath: isProd ? '/adventure-lodge-landing' : '', // Replace <repository-name> with your GitHub repo name
};
