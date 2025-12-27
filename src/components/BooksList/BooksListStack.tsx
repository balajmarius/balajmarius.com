import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useCounter } from "usehooks-ts";

import type { Book } from "@/lib/books";
import { BOOKSHELF_BATCH_SIZE } from "@/utils/const";

import { BooksListStackItem } from "@/components/BooksList";

type BooksListStackProps = {
  books: Book[];
};

const BooksListStack = ({ books }: BooksListStackProps) => {
  const { count, increment } = useCounter();

  const sentinelRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sentinelRef);

  const stack = books.slice(0, count * BOOKSHELF_BATCH_SIZE);
  const areVisibleBooksLeft = stack.length < books.length;

  useEffect(() => {
    if (isInView && areVisibleBooksLeft) {
      increment();
    }
  }, [isInView, areVisibleBooksLeft, increment]);

  return (
    <div className="flex flex-col items-center gap-1 px-6 sm:px-12 max-w-2xl">
      {stack.map((book) => (
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

      {areVisibleBooksLeft ? <div ref={sentinelRef} /> : null}
    </div>
  );
};

export default BooksListStack;
