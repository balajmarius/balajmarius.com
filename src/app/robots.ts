import type { MetadataRoute } from "next";

import { APP_URL } from "@/utils/const";

export const dynamic = "force-static";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*\nContent-Signal: ai-train=no, search=yes, ai-input=no",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${APP_URL}/sitemap.xml`,
  };
};

export default robots;
