import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { getPosts } from "@/lib/posts";

import WritingsContent from "@/app/writings/writings-client";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("posts.title"),
  };
};

const WritingsPage = async () => {
  const posts = getPosts();

  return <WritingsContent posts={posts} />;
};

export default WritingsPage;
