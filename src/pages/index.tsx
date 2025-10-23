import Head from "next/head";
import { useTranslations } from "next-intl";
import type { Dictionary } from "lodash";

import getPosts, { type Post } from "@/lib/posts";

import { AppBar } from "@/components/AppBar";

import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Commits } from "@/sections/Commits";
import { Posts } from "@/sections/Posts";

type HomeProps = {
  posts: Dictionary<Post[]>;
};

const Home = ({ posts }: HomeProps) => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{t("metadata.title")}</title>
      </Head>

      <AppBar />

      <div className="pb-48">
        <About />
        <Experience />
        <Commits />
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

export default Home;
