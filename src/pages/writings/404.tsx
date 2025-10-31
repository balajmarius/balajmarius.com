import Head from "next/head";
import Image from "next/image";
import type { ReactNode } from "react";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";
import { Button } from "@/components/Button";
import { Link } from "@/components/Link";
import { SvgIconBack } from "@/components/SvgIcon";

const WritingsError404 = () => {
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
          <Typography variant="h1">
            {t.rich("error404.thePageYouSeekDoesNotExist", renderers)}
          </Typography>

          <Image
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXRvdWU4ODVoem9lcW5qZW5wczhnajJyYng5eXdsaG5jeHpnNzZ6YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iGpkO05xWTl17Vhq6Y/giphy.gif"
            alt="404"
            width={480}
            height={480}
            className="w-full h-auto"
          />

          <Link href="/writings" className="block">
            <Button startIcon={<SvgIconBack size="small" />}>
              <Typography variant="body1" color="inherit">
                {t("posts.backToWritings")}
              </Typography>
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

WritingsError404.displayName = "WritingsError404";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      messages: (await import("@/copy/en-EN.json")).default,
    },
  };
};

export default WritingsError404;
