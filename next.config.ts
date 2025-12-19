import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',                 
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio',        
  images: {
    unoptimized: true,             
  },
};

module.exports = nextConfig;
