"use client";

import { useScrollSmooth } from "@/hooks/use-scroll-smooth";
import type { Book } from "@/lib/books";

import { BooksListItem } from "@/components/books-list";

type BooksListProps = {
  books: Book[];
};

const BooksList = ({ books }: BooksListProps) => {
  const { ref, velocity } = useScrollSmooth<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="flex items-end gap-1 overflow-x-auto overflow-y-hidden px-6 overscroll-y-none touch-auto scrollbar-w-none sm:px-12 md:touch-pan-x"
    >
      {books.map((book) => (
        <BooksListItem
          key={book.id}
          velocity={velocity}
          title={book.title}
          author={book.author}
          src={book.src}
          color={book.color}
          backgroundColor={book.backgroundColor}
          cardSize={book.cardSize}
          paddingLeft={book.paddingLeft}
          paddingRight={book.paddingRight}
          coverWidth={book.coverWidth}
          coverHeight={book.coverHeight}
        />
      ))}
    </div>
  );
};

export default BooksList;
