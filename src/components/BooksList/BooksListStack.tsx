import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useCounter } from "usehooks-ts";

import type { Book } from "@/lib/books";

import { BooksListStackItem } from "@/components/BooksList";

const BATCH_SIZE = 8;

type BooksListStackProps = {
  books: Book[];
};

const BooksListStack = ({ books }: BooksListStackProps) => {
  const { count, increment } = useCounter();

  const sentinelRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sentinelRef);

  const visibleBooks = books.slice(0, count * BATCH_SIZE);
  const areBooksLeft = visibleBooks.length < books.length;

  useEffect(() => {
    if (isInView && areBooksLeft) {
      increment();
    }
  }, [isInView, areBooksLeft, increment]);

  return (
    <div className="flex flex-col items-center gap-1 px-6 sm:px-12 max-w-2xl">
      {visibleBooks.map((book) => (
        <BooksListStackItem
          key={book.id}
          title={book.title}
          author={book.author}
          src={book.src}
          color={book.color}
          backgroundColor={book.backgroundColor}
          size={book.size}
        />
      ))}

      {areBooksLeft ? <div ref={sentinelRef} /> : null}
    </div>
  );
};

export default BooksListStack;
