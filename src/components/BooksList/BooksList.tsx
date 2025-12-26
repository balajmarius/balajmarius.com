import type { Book } from "@/lib/books";
import { useHijackScroll } from "@/hooks/useHijackScroll";

import { BooksListItem } from "@/components/BooksList";

type BooksListProps = {
  books: Book[];
};

const BooksList = ({ books }: BooksListProps) => {
  const ref = useHijackScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="flex items-end gap-1 overflow-x-auto scrollbar-hide"
    >
      {books.map((book) => (
        <BooksListItem
          key={book.id}
          title={book.title}
          author={book.author}
          src={book.src}
          color={book.color}
          backgroundColor={book.backgroundColor}
          height={book.height}
          paddingLeft={book.paddingLeft}
          paddingRight={book.paddingRight}
        />
      ))}
    </div>
  );
};

export default BooksList;
