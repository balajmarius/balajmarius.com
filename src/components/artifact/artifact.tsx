"use client";

import { Suspense } from "react";
import { useTranslations } from "next-intl";

import type { ArtifactProps } from "@/components/artifact/types";

import { cn } from "@/utils/helpers";
import { artifacts } from "@/artifacts/registry";

import { Typography } from "@/components/typography";

const Artifact = ({ name, title, className, ...props }: ArtifactProps) => {
  const t = useTranslations();
  const Component = artifacts[name];

  return (
    <div
      role="figure"
      className={cn("flex items-center justify-center w-full", className)}
      aria-label={title}
      {...props}
    >
      <Suspense
        fallback={
          <Typography color="muted" variant="body2">
            {t("common.loading")}
          </Typography>
        }
      >
        <Component />
      </Suspense>
    </div>
  );
};

export default Artifact;
