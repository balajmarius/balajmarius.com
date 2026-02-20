import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { getBooks } from "@/lib/books";

import BookshelfContent from "@/app/bookshelf/bookshelf-content";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("bookshelf.title"),
  };
};

const BookshelfPage = async () => {
  const books = await getBooks();

  return <BookshelfContent books={books} />;
};

export default BookshelfPage;
