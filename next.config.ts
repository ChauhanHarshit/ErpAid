import type { NextConfig } from "next";
// import { i18n } from "./next-i18next.config";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'es', 'fr', 'de'],
    defaultLocale: 'en',
  },
  /* config options here */
  images: {
    domains: ['via.placeholder.com'], // Allow external image domain
  },
};

export default nextConfig;
