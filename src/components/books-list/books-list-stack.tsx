import type { Book } from "@/lib/books";
import { BooksListStackItem } from "@/components/books-list";

import { cn } from "@/utils/helpers";

type BooksListStackProps = {
  books: Book[];
  animated?: boolean;
};

const BooksListStack = ({ books, animated }: BooksListStackProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1 max-w-2xl",
        animated ? "px-6 sm:px-12" : undefined
      )}
    >
      {books.map((book) => (
        <BooksListStackItem
          key={book.id}
          title={book.title}
          author={book.author}
          src={book.src}
          color={book.color}
          backgroundColor={book.backgroundColor}
          cardSize={book.cardSize}
          coverWidth={book.coverWidth}
          coverHeight={book.coverHeight}
          animated={animated}
        />
      ))}
    </div>
  );
};

export default BooksListStack;
