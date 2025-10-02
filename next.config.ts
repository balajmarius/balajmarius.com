import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const createNextMDXConfig = createMDX();
const createNextIntlConfig = createNextIntlPlugin();

export default createNextIntlConfig(createNextMDXConfig(nextConfig));
