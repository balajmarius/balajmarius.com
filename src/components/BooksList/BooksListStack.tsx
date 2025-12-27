import type { Book } from "@/lib/books";

import { useInfiniteLoader } from "@/hooks/useInfiniteLoader";

import { BooksListStackItem } from "@/components/BooksList";

type BooksListStackProps = {
  books: Book[];
};

const BooksListStack = ({ books }: BooksListStackProps) => {
  const { items, sentinelRef, isPartial } = useInfiniteLoader(books);

  return (
    <div className="flex flex-col items-center gap-1 px-6 sm:px-12 max-w-2xl">
      {items.map((book) => (
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
      {isPartial ? <div ref={sentinelRef} /> : null}
    </div>
  );
};

export default BooksListStack;
