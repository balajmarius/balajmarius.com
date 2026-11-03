"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { useTranslations } from "next-intl";

import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

import { links } from "@/utils/links";

const About = () => {
  const t = useTranslations();

  const renderers = {
    teams: (chunks: ReactNode) => (
      <span className="text-blue-500">{chunks}</span>
    ),
    ui: (chunks: ReactNode) => (
      <span className="relative inline-block text-blue-500">{chunks}</span>
    ),
    animation: (chunks: ReactNode) => (
      <span className="relative inline-block">{chunks}</span>
    ),
    serif: (chunks: ReactNode) => (
      <span className="font-serif italic">{chunks}</span>
    ),
    url1: (chunks: ReactNode) => (
      <Link
        href={links.qed}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </Link>
    ),
    url2: (chunks: ReactNode) => (
      <Link
        href={links.sandbox}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </Link>
    ),
    url3: (chunks: ReactNode) => (
      <Link
        href={links.boxing}
        className="cursor-boxing-glove text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </Link>
    ),
    url4: (chunks: ReactNode) => (
      <Link
        href={links.goodreads}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </Link>
    ),
  };

  return (
    <Section id="about">
      <div className="space-y-8">
        <Typography variant="h1">
          <span className="block animate-content-entrance backface-hidden text-pretty">
            {t.rich("about.title", renderers)}
          </span>
          <span className="block animate-content-entrance backface-hidden text-pretty animation-delay-50">
            {t.rich("about.subtitle", renderers)}
          </span>
        </Typography>

        <div className="space-y-4 text-pretty">
          <div className="animate-content-entrance backface-hidden animation-delay-100">
            <Typography variant="body1">
              {t.rich("about.description.0", renderers)}
            </Typography>
          </div>
          <div className="animate-content-entrance backface-hidden animation-delay-150">
            <Typography variant="body1">
              {t.rich("about.description.1", renderers)}
            </Typography>
          </div>
          <div className="animate-content-entrance backface-hidden animation-delay-200">
            <Typography variant="body1">
              {t.rich("about.description.2", renderers)}
            </Typography>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
