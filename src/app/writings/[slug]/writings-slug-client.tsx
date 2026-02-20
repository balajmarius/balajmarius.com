"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { SvgIconBack } from "@/components/svg-icon";
import { Typography } from "@/components/typography";

type PostContentProps = {
  title: string;
  author?: string;
  createdAt: string;
  children: ReactNode;
};

const PostContent = ({
  title,
  author,
  createdAt,
  children,
}: PostContentProps) => {
  const t = useTranslations();

  return (
    <Section>
      <div className="space-y-16">
        <Link href="/writings" className="inline-block">
          <Button startIcon={<SvgIconBack size="small" />}>
            <Typography variant="body1" color="inherit">
              {t("posts.backToWritings")}
            </Typography>
          </Button>
        </Link>

        <Typography variant="h1" display="block">
          {title}
          {author ? (
            <span className="font-serif italic text-blue-500">
              {t("posts.author", { author })}
            </span>
          ) : null}
        </Typography>

        <div className="grid grid-cols-1 gap-16 sm:grid-cols-12 sm:gap-6">
          <div className="col-span-1 sm:col-span-3">
            <Typography variant="subtitle1">{createdAt}</Typography>
          </div>
          <article className="col-span-1 space-y-6 sm:col-span-9">
            {children}
          </article>
        </div>

        <Link href="/writings" className="inline-block">
          <Button startIcon={<SvgIconBack size="small" />}>
            <Typography variant="body1" color="inherit">
              {t("posts.backToWritings")}
            </Typography>
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default PostContent;
