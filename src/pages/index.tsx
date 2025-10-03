import Head from "next/head";
import { useTranslations } from "next-intl";
import type { Dictionary } from "lodash";

import getPosts, { type Post } from "@/lib/posts";

import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Commits } from "@/sections/Commits";
import { Writings } from "@/sections/Writings";
import { Passions } from "@/sections/Passions";

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

      <About />
      <Experience />
      <Commits />
      <Writings posts={posts} />
      <Passions />
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
