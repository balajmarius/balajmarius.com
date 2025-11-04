import Head from "next/head";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "usehooks-ts";
import type { Dictionary } from "lodash";

import getPosts, { type Post } from "@/lib/posts";

import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Commits } from "@/sections/Commits";
import { Posts } from "@/sections/Posts";

type HomeProps = {
  posts: Dictionary<Post[]>;
};

const Home = ({ posts }: HomeProps) => {
  const t = useTranslations();
  const sm = useMediaQuery("(min-width: 640px)");

  return (
    <>
      <Head>
        <title>{t("metadata.title")}</title>
      </Head>

      <About />
      <Experience />
      {sm ? <Commits /> : null}
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

export default Home;
