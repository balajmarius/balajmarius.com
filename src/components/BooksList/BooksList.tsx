import type { Book } from "@/lib/books";

import { useScrollSmooth } from "@/hooks/useScrollSmooth";

import { BooksListItem } from "@/components/BooksList";

type BooksListProps = {
  books: Book[];
};

const BooksList = ({ books }: BooksListProps) => {
  const { ref, velocity } = useScrollSmooth<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="flex items-end gap-1 overflow-x-auto overflow-y-hidden overscroll-y-none touch-pan-x scrollbar-w-none px-6 sm:px-12"
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
