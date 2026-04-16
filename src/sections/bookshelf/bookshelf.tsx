"use client";

import take from "lodash.take";
import { useTranslations } from "next-intl";

import type { Book } from "@/lib/books";

import { BOOKS_LIMIT } from "@/utils/const";

import { BooksListStack } from "@/components/books-list";
import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

type BookshelfProps = {
  books: Book[];
};

const Bookshelf = ({ books }: BookshelfProps) => {
  const t = useTranslations();

  return (
    <Section>
      <div className="space-y-16">
        <Typography variant="subtitle1">{t("bookshelf.title")}</Typography>

        <div className="space-y-6">
          <BooksListStack books={take(books, BOOKS_LIMIT)} />

          <div className="flex justify-end">
            <Link href="/bookshelf">{t("bookshelf.moreBooks")}</Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Bookshelf;
