import Link from "next/link";
import { ReactNode } from "react";
import { useTranslations } from "next-intl";

import { links } from "@/utils/links";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

const About = () => {
  const t = useTranslations();

  const renderers = {
    ui: (chunks: ReactNode) => <span className="text-blue-500">{chunks}</span>,
    ai: (chunks: ReactNode) => <span className="text-blue-500">{chunks}</span>,
    serif: (chunks: ReactNode) => <span className="font-serif italic">{chunks}</span>,
    url1: (chunks: ReactNode) => (
      <Link href={links.github} className="text-blue-500" target="_blank" rel="noopener noreferrer">
        {chunks}
      </Link>
    ),
    url2: (chunks: ReactNode) => (
      <Link href={links.sandbox} className="text-blue-500" target="_blank" rel="noopener noreferrer">
        {chunks}
      </Link>
    ),
    url3: (chunks: ReactNode) => (
      <Link href={links.viitorul} className="text-blue-500" target="_blank" rel="noopener noreferrer">
        {chunks}
      </Link>
    ),
    url4: (chunks: ReactNode) => (
      <Link href={links.goodreads} className="text-blue-500" target="_blank" rel="noopener noreferrer">
        {chunks}
      </Link>
    ),
  };

  return (
    <Section>
      <div className="space-y-8">
        <Typography variant="h1">
          <span className="whitespace-break-spaces">{t.rich("about.title", renderers)}</span>
        </Typography>

        <div className="space-y-4">
          <Typography variant="body1">{t.rich("about.description.0", renderers)}</Typography>
          <Typography variant="body1">{t.rich("about.description.1", renderers)}</Typography>
          <Typography variant="body1">{t.rich("about.description.2", renderers)}</Typography>
        </div>
      </div>
    </Section>
  );
};

export default About;
