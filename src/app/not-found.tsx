"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { SvgIconBack } from "@/components/svg-icon";
import { Typography } from "@/components/typography";

const NotFound = () => {
  const t = useTranslations();

  return (
    <Section>
      <div className="space-y-8">
        <Typography variant="h1" display="block">
          {t.rich("error404.doesNotExist", {
            serif: (chunks: ReactNode) => (
              <span className="font-serif italic text-blue-500">{chunks}</span>
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
  );
};

export default NotFound;
