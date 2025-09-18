import Head from "next/head";
import { useTranslations } from "next-intl";

import { About } from "@/sections/About";
import { Experiences } from "@/sections/Experiences";

const Home = () => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{t("metadata.title")}</title>
      </Head>

      <About />
      <Experiences />
    </>
  );
};

export const getStaticProps = async () => ({
  props: {
    messages: (await import("@/copy/en-EN.json")).default,
  },
});

export default Home;
