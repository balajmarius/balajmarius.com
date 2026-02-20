"use client";

import { useTranslations } from "next-intl";

import type { Post } from "@/lib/posts";

import { Link } from "@/components/link";
import { PostsList } from "@/components/posts-list";
import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

type PostsProps = {
  posts: Record<string, Post[]>;
};

const Posts = ({ posts }: PostsProps) => {
  const t = useTranslations();

  return (
    <Section id="posts">
      <div className="space-y-16">
        <Typography variant="subtitle1">{t("posts.title")}</Typography>

        <div className="space-y-6">
          <PostsList posts={posts} />

          <div className="flex justify-end">
            <Link href="/writings">{t("posts.moreWritings")}</Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Posts;
