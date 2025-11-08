import Link from "next/link";
import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { links } from "@/utils/links";
import { titleAnimation } from "@/utils/keyframes";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

const About = () => {
  const t = useTranslations();

  const renderers = {
    ai: (chunks: ReactNode) => <span className="text-blue-500">{chunks}</span>,
    ui: (chunks: ReactNode) => (
      <span className="relative inline-block text-blue-500">{chunks}</span>
    ),
    animation: (chunks: ReactNode) => (
      <span className="relative inline-block">{chunks}</span>
    ),
    serif: (chunks: ReactNode) => (
      <span className="font-serif italic">{chunks}</span>
    ),
    letterDown: (chunks: ReactNode) => (
      <motion.span
        variants={titleAnimation.letterDown}
        transition={titleAnimation.transition}
        className="absolute left-0 top-0 inline-block"
      >
        {chunks}
      </motion.span>
    ),
    letterUp: (chunks: ReactNode) => (
      <motion.span
        variants={titleAnimation.letterUp}
        transition={titleAnimation.transition}
        className="inline-block"
      >
        {chunks}
      </motion.span>
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
        href={links.viitorul}
        className="text-blue-500"
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
      <motion.div className="space-y-8" initial="rest" whileHover="hover">
        <Typography variant="h1">
          <motion.span className="whitespace-break-spaces">
            {t.rich("about.title", renderers)}
          </motion.span>
        </Typography>

        <div className="space-y-4">
          <Typography variant="body1">
            {t.rich("about.description.0", renderers)}
          </Typography>
          <Typography variant="body1">
            {t.rich("about.description.1", renderers)}
          </Typography>
          <Typography variant="body1">
            {t.rich("about.description.2", renderers)}
          </Typography>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
