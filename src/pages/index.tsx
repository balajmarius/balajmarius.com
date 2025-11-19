import Head from "next/head";
import { useTranslations } from "next-intl";

import getPosts, { type Post } from "@/lib/posts";

import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Commits } from "@/sections/Commits";
import { Posts } from "@/sections/Posts";

type HomeProps = {
  posts: Record<string, Post[]>;
};

const Home = ({ posts }: HomeProps) => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{t("metadata.title")}</title>
      </Head>

      <About />
      <Experience />
      <Commits />
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
