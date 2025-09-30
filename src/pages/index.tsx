import Head from "next/head";
import { useTranslations } from "next-intl";

import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Writings } from "@/sections/Writings";

const Home = () => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{t("metadata.title")}</title>
      </Head>

      <About />
      <Experience />
      <Writings />
    </>
  );
};

export const getStaticProps = async () => ({
  props: {
    messages: (await import("@/copy/en-EN.json")).default,
  },
});

export default Home;
