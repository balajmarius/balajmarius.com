import { useTranslations } from "next-intl";

import type { Post } from "@/lib/posts";

import { Link } from "@/components/Link";
import { PostsList } from "@/components/PostsList";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

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
