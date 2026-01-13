import Head from "next/head";
import { useTranslations } from "next-intl";

import { getPosts, type Post } from "@/lib/posts";
import { getWorkouts, type Workouts } from "@/lib/hevy";

import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Commits } from "@/sections/Commits";
import { Posts } from "@/sections/Posts";
import { Stats } from "@/sections/Stats";

type HomeProps = {
  workouts: Workouts;
  posts: Record<string, Post[]>;
};

const Home = ({ posts, workouts }: HomeProps) => {
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
      <Stats workouts={workouts} />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(),
      workouts: await getWorkouts(),
      messages: (await import("@/copy/en-EN.json")).default,
    },
  };
};

export default Home;
