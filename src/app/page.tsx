import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ScrollReveal } from "@/components/scroll-reveal";

import { getBooks } from "@/lib/books";
import { getWorkouts } from "@/lib/hevy";
import { getPosts } from "@/lib/posts";

import { POSTS_LIMIT } from "@/utils/const";

import { About } from "@/sections/about";
import { Commits } from "@/sections/commits";
import { Experience } from "@/sections/experience";
import { Bookshelf } from "@/sections/bookshelf";
import { Posts } from "@/sections/posts";
import { Stats } from "@/sections/stats";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("metadata.title"),
  };
};

const Home = async () => {
  const posts = getPosts(POSTS_LIMIT);
  const books = await getBooks();
  const workouts = await getWorkouts();

  return (
    <>
      <About />
      <Experience />

      <ScrollReveal>
        <Commits />
      </ScrollReveal>
      <ScrollReveal>
        <Posts posts={posts} />
      </ScrollReveal>
      <ScrollReveal>
        <Bookshelf books={books} />
      </ScrollReveal>
      <ScrollReveal>
        <Stats workouts={workouts} />
      </ScrollReveal>
    </>
  );
};

export default Home;
