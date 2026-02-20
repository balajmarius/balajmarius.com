import type { MetadataRoute } from "next";

import { APP_URL } from "@/utils/const";
import { getPostSlugs } from "@/lib/posts";

export const dynamic = "force-static";

const sitemap = (): MetadataRoute.Sitemap => {
  const postSlugs = getPostSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${APP_URL}/` },
    { url: `${APP_URL}/bookshelf/` },
    { url: `${APP_URL}/writings/` },
  ];

  const postRoutes: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${APP_URL}/writings/${slug}/`,
  }));

  return [...staticRoutes, ...postRoutes];
};

export default sitemap;
