import type { HTMLAttributes, ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { getBooks, type Book } from "@/lib/books";
import { BOOKSHELF_COVER_SIZE } from "@/utils/const";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { SvgIconBack } from "@/components/SvgIcon";

type BookshelfProps = {
  books: Book[];
} & HTMLAttributes<HTMLElement>;

const Bookshelf = ({ books }: BookshelfProps) => {
  const t = useTranslations();

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

      <div className="space-y-16">
        <Typography variant="subtitle1" display="block">
          {t("bookshelf.books")}
        </Typography>

        <div className="flex flex-wrap items-end gap-x-1 gap-y-16">
          {books.map((book) => (
            <div
              key={book.id}
              className="flex justify-between items-center rounded-sm gap-8 pt-8 pb-8 [writing-mode:sideways-lr]"
              style={{
                backgroundColor: book.backgroundColor,
                color: book.color,
                height: book.height,
                paddingLeft: book.paddingLeft,
                paddingRight: book.paddingRight,
              }}
            >
              <div className="flex flex-col">
                {book.author ? (
                  <Typography variant="caption" color="inherit">
                    {book.author}
                  </Typography>
                ) : null}
                <Typography variant="body1" color="inherit">
                  {book.title}
                </Typography>
              </div>

              <Image
                src={book.src}
                alt={book.title}
                className="rounded-md"
                width={BOOKSHELF_COVER_SIZE}
                height={BOOKSHELF_COVER_SIZE}
              />
            </div>
          ))}
        </div>

        <Link href="/" className="inline-block">
          <Button startIcon={<SvgIconBack size="small" />}>
            <Typography variant="body1" color="inherit">
              {t("common.backToHome")}
            </Typography>
          </Button>
        </Link>
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
