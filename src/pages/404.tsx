import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { SvgIconBack } from "@/components/SvgIcon";
import { Typography } from "@/components/Typography";

const Error404 = () => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{t("error404.title")}</title>
      </Head>

      <Section>
        <div className="space-y-8">
          <Typography variant="h1" display="block">
            {t.rich("error404.doesNotExist", {
              serif: (chunks: ReactNode) => (
                <span className="font-serif italic text-blue-500">
                  {chunks}
                </span>
              ),
            })}
          </Typography>

          <Link href="/" className="inline-block">
            <Button startIcon={<SvgIconBack size="small" />}>
              <Typography variant="body1" color="inherit">
                {t("common.backToHome")}
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
