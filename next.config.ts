import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media0.giphy.com",
      },
    ],
  },
};

const createNextMDXConfig = createMDX();

export default createNextMDXConfig(nextConfig);
