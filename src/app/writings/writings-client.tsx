"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import type { Post } from "@/lib/posts";

import { Button } from "@/components/button";
import { PostsList } from "@/components/posts-list";
import { Section } from "@/components/section";
import { SvgIconBack } from "@/components/svg-icon";
import { Typography } from "@/components/typography";

type WritingsContentProps = {
  posts: Record<string, Post[]>;
};

const WritingsContent = ({ posts }: WritingsContentProps) => {
  const t = useTranslations();

  return (
    <Section>
      <div className="space-y-16">
        <div className="space-y-8">
          <Link href="/" className="block">
            <Button startIcon={<SvgIconBack size="small" />}>
              <Typography variant="body1" color="inherit">
                {t("common.backToHome")}
              </Typography>
            </Button>
          </Link>

          <Typography variant="h1" display="block">
            {t.rich("posts.sometimesIWrite", {
              serif: (chunks: ReactNode) => (
                <span className="font-serif italic text-blue-500">
                  {chunks}
                </span>
              ),
            })}
          </Typography>
        </div>

        <PostsList posts={posts} />
      </div>
    </Section>
  );
};

export default WritingsContent;
