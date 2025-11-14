/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  experimental: {
    optimizeCss: isProd, // ✅ LightningCSS actif seulement en prod
  },
  reactStrictMode: true,
};

export default nextConfig;
