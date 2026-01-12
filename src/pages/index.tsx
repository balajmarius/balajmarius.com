import Head from "next/head";
import { useTranslations } from "next-intl";

import { getPosts, type Post } from "@/lib/posts";
import { getWorkoutsCount, getWorkout } from "@/lib/hevy";

import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Commits } from "@/sections/Commits";
import { Posts } from "@/sections/Posts";
import { Stats } from "@/sections/Stats";

type Workout = {
  time: string;
  createdAt: string;
  volume: number;
};

type HomeProps = {
  posts: Record<string, Post[]>;
  workoutsCount: number;
  workout: Workout;
};

const Home = ({ posts, workoutsCount, workout }: HomeProps) => {
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
      <Stats workoutsCount={workoutsCount} workout={workout} />
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: getPosts(),
      workoutsCount: await getWorkoutsCount(),
      workout: await getWorkout(),
      messages: (await import("@/copy/en-EN.json")).default,
    },
  };
};

export default Home;
