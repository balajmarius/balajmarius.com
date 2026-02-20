"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { type ReactNode, useState } from "react";

import type { Book } from "@/lib/books";

import { BooksList, BooksListStack } from "@/components/books-list";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import {
  SvgIconBack,
  SvgIconBookshelf,
  SvgIconBookshelfStack,
} from "@/components/svg-icon";
import { Typography } from "@/components/typography";

type BookshelfContentProps = {
  books: Book[];
};

const BookshelfContent = ({ books }: BookshelfContentProps) => {
  const t = useTranslations();
  const [variant, setVariant] = useState<"shelf" | "stack">("shelf");

  const options = [
    {
      variant: "shelf",
      label: t("bookshelf.shelf"),
      icon: <SvgIconBookshelf size="small" />,
    },
    {
      variant: "stack",
      label: t("bookshelf.stack"),
      icon: <SvgIconBookshelfStack size="small" />,
    },
  ] as const;

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
          <div className="flex items-center justify-between">
            <Typography variant="subtitle1" display="block">
              {t("bookshelf.booksOnMyShelf", { count: books.length })}
            </Typography>

            <div className="flex items-center gap-1 bg-gray-400/40 backdrop-blur rounded-lg px-1 py-1">
              {options.map((option) => (
                <Button
                  key={option.variant}
                  startIcon={option.icon}
                  active={option.variant === variant}
                  onClick={() => setVariant(option.variant)}
                >
                  <Typography variant="body1" color="inherit">
                    {option.label}
                  </Typography>
                </Button>
              ))}
            </div>
          </div>
        </Section>

        {variant === "stack" ? (
          <BooksListStack books={books} />
        ) : (
          <BooksList books={books} />
        )}
      </div>
    </>
  );
};

export default BookshelfContent;
