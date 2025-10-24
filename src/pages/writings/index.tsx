import Head from "next/head";
import type { ReactNode } from "react";
import type { Dictionary } from "lodash";
import { useTranslations } from "next-intl";

import getPosts, { type Post } from "@/lib/posts";

import { SvgIconBack } from "@/components/SvgIcon";

import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";

import { Section } from "@/components/Section";
import { PostsListItem } from "@/sections/Posts";
import Link from "next/link";

type WritingsProps = {
  posts: Dictionary<Post[]>;
};

const Writings = ({ posts }: WritingsProps) => {
  const t = useTranslations();
  const years = Object.keys(posts).sort().reverse();

  const renderers = {
    serif: (chunks: ReactNode) => <span className="text-blue-500 font-serif italic">{chunks}</span>,
  };

  return (
    <>
      <Head>
        <title>{t("metadata.title")}</title>
      </Head>

      <Section>
        <div className="space-y-16">
          <div className="space-y-8">
            <Link href="/" target="_self" className="block">
              <Button startIcon={<SvgIconBack size="small" />}>
                <Typography variant="body1" color="inherit">
                  {t("posts.backToHome")}
                </Typography>
              </Button>
            </Link>

            <Typography variant="h1" display="block">
              {t.rich("posts.itIsTimeToWrite", renderers)}
            </Typography>
          </div>

          <div className="space-y-6">
            <div className="border-b border-gray-100">
              {years.map((year) => (
                <PostsListItem key={year} year={year} posts={posts[year]} />
              ))}
            </div>
          </div>
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
