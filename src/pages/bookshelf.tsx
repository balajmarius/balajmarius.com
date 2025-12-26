import Head from "next/head";
import Link from "next/link";
import { useEffect, type HTMLAttributes, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { useCounter, useIntersectionObserver } from "usehooks-ts";

import { BOOKS_BATCH_SIZE } from "@/utils/const";
import { getBooks, type Book } from "@/lib/books";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { SvgIconBack } from "@/components/SvgIcon";

type BookshelfProps = {
  books: Book[];
} & HTMLAttributes<HTMLElement>;

const Bookshelf = ({ books }: BookshelfProps) => {
  const t = useTranslations();

  const { count, increment } = useCounter();
  const { isIntersecting, ref } = useIntersectionObserver();

  useEffect(() => {
    if (isIntersecting) {
      increment();
    }
  }, [isIntersecting, increment]);

  return (
    <>
      <Head>
        <title>{t("bookshelf.title")}</title>
      </Head>

      <Section>
        <div className="space-y-8">
          <Typography variant="h1" display="block">
            {t.rich("bookshelf.onMyBookshelf", {
              serif: (chunks: ReactNode) => (
                <span className="font-serif italic text-blue-500">
                  {chunks}
                </span>
              ),
            })}
          </Typography>

          <Typography variant="body1" display="block">
            {t("bookshelf.personalCollectionOfBooks")}
          </Typography>
        </div>
      </Section>

      <Section size="large">
        <div className="space-y-16">
          <Typography variant="subtitle1" display="block">
            {t("bookshelf.books")}
          </Typography>

          <div className="grid grid-cols-4 gap-x-4 gap-y-16 px-12">
            {books.slice(0, count * BOOKS_BATCH_SIZE).map((book) => (
              <div key={book.id} className="rounded-3xl">
                {book.title}
              </div>
            ))}
          </div>

          <Link href="/" className="inline-block" ref={ref}>
            <Button startIcon={<SvgIconBack size="small" />}>
              <Typography variant="body1" color="inherit">
                {t("common.backToHome")}
              </Typography>
            </Button>
          </Link>
        </div>
      </Section>
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
