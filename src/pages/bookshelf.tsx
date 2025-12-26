import type { HTMLAttributes, ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { getBooks, type Book } from "@/lib/books";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { SvgIconBack } from "@/components/SvgIcon";

type BookshelfProps = {
  books: Book[];
} & HTMLAttributes<HTMLElement>;

const Bookshelf = ({ books, ...props }: BookshelfProps) => {
  const t = useTranslations();

  console.log(books);

  return (
    <>
      <Head>
        <title>{t("bookshelf.title")}</title>
      </Head>

      <Section {...props}>
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

          <Link href="/" className="inline-block">
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
