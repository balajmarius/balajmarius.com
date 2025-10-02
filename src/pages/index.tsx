import Head from "next/head";
import { useTranslations } from "next-intl";

import fetchPosts from "@/lib/fetchPosts";

import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Commits } from "@/sections/Commits";
import { Writings } from "@/sections/Writings";
import { Passions } from "@/sections/Passions";

const Home = () => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{t("metadata.title")}</title>
      </Head>

      <About />
      <Experience />
      <Commits />
      <Writings />
      <Passions />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: fetchPosts(),
      messages: (await import("@/copy/en-EN.json")).default,
    },
  };
};

export default Home;
