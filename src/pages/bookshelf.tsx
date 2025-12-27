import { type ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { getBooks, type Book } from "@/lib/books";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";
import { Button } from "@/components/Button";
import { SvgIconBack } from "@/components/SvgIcon";
import { BooksListStack } from "@/components/BooksList";

type BookshelfProps = {
  books: Book[];
};

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
    <>
      <Head>
        <title>{t("bookshelf.title")}</title>
      </Head>

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
            {t.rich("bookshelf.onMyBookshelf", renderers)}
          </Typography>
          <Typography variant="body1" display="block">
            {t.rich("bookshelf.personalCollectionOfBooks", renderers)}
          </Typography>
        </div>
      </Section>

      <div className="space-y-16">
        <Section spacing="small">
          <Typography variant="subtitle1" display="block">
            {t("bookshelf.booksOnMyShelf", { count: books.length })}
          </Typography>
        </Section>

        <BooksListStack books={books} />
      </div>
    </>
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
