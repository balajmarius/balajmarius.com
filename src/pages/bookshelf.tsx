import { type HTMLAttributes, type ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { getBooks, type Book } from "@/lib/books";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";
import { BooksList } from "@/components/BooksList";

type BookshelfProps = {
  books: Book[];
} & HTMLAttributes<HTMLElement>;

const Bookshelf = ({ books }: BookshelfProps) => {
  const t = useTranslations();

  const renderers = {
    serif: (chunks: ReactNode) => (
      <span className="font-serif italic text-blue-500">{chunks}</span>
    ),
    url: (chunks: ReactNode) => (
      <Link href="#contact" className="text-blue-500">
        {chunks}
      </Link>
    ),
  };

  return (
    <div className="space-y-16">
      <Head>
        <title>{t("bookshelf.title")}</title>
      </Head>

      <Section>
        <div className="space-y-8">
          <Typography variant="h1" display="block">
            {t.rich("bookshelf.onMyBookshelf", renderers)}
          </Typography>
          <Typography variant="body1" display="block">
            {t.rich("bookshelf.personalCollectionOfBooks", renderers)}
          </Typography>
        </div>
      </Section>

      <BooksList books={books} />
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      books: await getBooks(),
      messages: (await import("@/copy/en-EN.json")).default,
    },
  };
};

export default Bookshelf;
