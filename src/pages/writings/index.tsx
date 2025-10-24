import Head from "next/head";
import { useTranslations } from "next-intl";
import type { Dictionary } from "lodash";

import getPosts, { type Post } from "@/lib/posts";

import { AppBar } from "@/components/AppBar";

import { Posts } from "@/sections/Posts";

type WritingsProps = {
  posts: Dictionary<Post[]>;
};

const Writings = ({ posts }: WritingsProps) => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>
          <title>{t("metadata.title")}</title>
        </title>
      </Head>

      <AppBar />
      <Posts posts={posts} />
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
