import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const createNextIntlConfig = createNextIntlPlugin();

export default createNextIntlConfig({} as NextConfig);
