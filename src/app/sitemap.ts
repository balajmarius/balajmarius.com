import type { MetadataRoute } from "next";

import { getPostSlugs } from "@/lib/posts";

export const dynamic = "force-static";

const sitemap = (): MetadataRoute.Sitemap => {
  const postSlugs = getPostSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${process.env.APP_URL}/` },
    { url: `${process.env.APP_URL}/bookshelf/` },
    { url: `${process.env.APP_URL}/writings/` },
  ];

  const postRoutes: MetadataRoute.Sitemap = postSlugs.map((slug) => ({
    url: `${process.env.APP_URL}/writings/${slug}/`,
  }));

  return [...staticRoutes, ...postRoutes];
};

export default sitemap;
