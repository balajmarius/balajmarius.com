import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { getReadings } from "@/lib/shiori";

import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { SvgIconBack } from "@/components/svg-icon";
import { Typography } from "@/components/typography";
import { FoldersList } from "@/components/folders-list";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("readings.title"),
  };
};

const ReadingsPage = async () => {
  const t = await getTranslations();
  const links = await getReadings();

  const renderers = {
    serif: (chunks: ReactNode) => (
      <span className="font-serif italic text-blue-500">{chunks}</span>
    ),
  };

  return (
    <>
      <Section>
        <div className="space-y-8">
          <Link href="/" className="inline-block">
            <Button startIcon={<SvgIconBack size="small" />}>
              <Typography variant="body1" color="inherit">
                {t("common.backToHome")}
              </Typography>
            </Button>
          </Link>

          <Typography variant="h1" display="block">
            {t.rich("readings.thingsWorthReading", renderers)}
          </Typography>
          <Typography variant="body1" display="block">
            {t("readings.personalCommonplaceBook")}
          </Typography>
        </div>
      </Section>

      <Section className="border-b border-b-blue-100 max-w-full">
        <FoldersList readings={links} />
      </Section>
    </>
  );
};

export default ReadingsPage;
