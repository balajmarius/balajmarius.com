import Head from "next/head";
import type { ReactNode } from "react";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

const Error404 = () => {
  const t = useTranslations();

  const renderers = {
    serif: (chunks: ReactNode) => (
      <span className="font-serif italic text-blue-500">{chunks}</span>
    ),
  };

  return (
    <>
      <Head>
        <title>{t("error404.title")}</title>
      </Head>

      <Section>
        <Typography variant="h1">
          {t.rich("error404.thePageYouSeekDoesNotExist", renderers)}
        </Typography>
      </Section>
    </>
  );
};

Error404.displayName = "Error404";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      messages: (await import("@/copy/en-EN.json")).default,
    },
  };
};

export default Error404;
