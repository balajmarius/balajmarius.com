import type { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { useTranslations } from "next-intl";

import getPosts, { type Post } from "@/lib/posts";

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";
import { SvgIconBack } from "@/components/SvgIcon";
import { PostsList } from "@/components/PostsList";

type WritingsProps = {
  posts: Record<string, Post[]>;
};

const Writings = ({ posts }: WritingsProps) => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{t("posts.title")}</title>
      </Head>

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
              {t.rich("posts.itIsTimeToWrite", {
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
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(),
      messages: (await import("@/copy/en-EN.json")).default,
    },
  };
};

export default Writings;
