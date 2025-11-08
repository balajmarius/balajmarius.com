import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";
import type { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

import { SvgIconBack } from "@/components/SvgIcon";

import { Button } from "@/components/Button";
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
        <div className="space-y-8">
          <Typography variant="h1" display="block">
            {t.rich("error404.thePageYouSeekDoesNotExist", renderers)}
          </Typography>

          <Link href="/" className="inline-block">
            <Button startIcon={<SvgIconBack size="small" />}>
              <Typography variant="body1" color="inherit">
                {t("error404.backToHome")}
              </Typography>
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      messages: (await import("@/copy/en-EN.json")).default,
    },
  };
};

export default Error404;
