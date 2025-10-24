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
          {t("posts.title")} - {t("metadata.title")}
        </title>
      </Head>

      <AppBar />

      <div className="pb-48">
        <Posts posts={posts} />
      </div>
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
