import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { getWorkouts } from "@/lib/hevy";
import { getPosts } from "@/lib/posts";

import { About } from "@/sections/about";
import { Commits } from "@/sections/commits";
import { Experience } from "@/sections/experience";
import { Posts } from "@/sections/posts";
import { Stats } from "@/sections/stats";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("metadata.title"),
  };
};

const Home = async () => {
  const posts = getPosts();
  const workouts = await getWorkouts();

  return (
    <>
      <About />
      <Experience />
      <Commits />
      <Posts posts={posts} />
      <Stats workouts={workouts} />
    </>
  );
};

export default Home;
