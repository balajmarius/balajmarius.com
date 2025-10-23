import { useTranslations } from "next-intl";
import type { Dictionary } from "lodash";

import type { Post } from "@/lib/posts";

import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

import { PostsListItem } from "@/sections/Posts";

type PostsProps = {
  posts: Dictionary<Post[]>;
};

const Posts = ({ posts }: PostsProps) => {
  const t = useTranslations();
  const years = Object.keys(posts).sort().reverse();

  return (
    <Section className="pb-48">
      <div className="space-y-16">
        <Typography variant="subtitle1">{t("posts.title")}</Typography>

        <div className="space-y-6">
          <div className="border-b border-gray-100">
            {years.map((year) => (
              <PostsListItem key={year} year={year} posts={posts[year]} />
            ))}
          </div>

          <div className="flex justify-end">
            <Link href="/" target="_self">
              {t("posts.morePosts")}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Posts;
