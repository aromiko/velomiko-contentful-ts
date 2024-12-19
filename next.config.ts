import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: {
        loader: "graphql-tag/loader"
      }
    });

    return config;
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: ""
      },
      {
        protocol: "https",
        hostname: "videos.ctfassets.net",
        port: ""
      }
    ]
  }
};

export default nextConfig;
