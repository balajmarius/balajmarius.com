import { BooksListStackItem } from "@/components/BooksList";
import type { Book } from "@/lib/books";

type BooksListStackProps = {
  books: Book[];
};

const BooksListStack = ({ books }: BooksListStackProps) => {
  return (
    <div className="flex flex-col items-center gap-1 px-6 sm:px-12 max-w-2xl">
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
        />
      ))}
    </div>
  );
};

export default BooksListStack;
