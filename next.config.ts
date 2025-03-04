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
      },
      {
        protocol: "https",
        hostname: "*.cloudfront.net",
        port: ""
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
        pathname: "/maps/api/staticmap",
        port: ""
      }
    ]
  },
  transpilePackages: ["lucide-react"]
};

export default nextConfig;
