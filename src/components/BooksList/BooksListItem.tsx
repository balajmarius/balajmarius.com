import Image from "next/image";

import type { Book } from "@/lib/books";
import { BOOKSHELF_COVER_SIZE } from "@/utils/const";

import { Typography } from "@/components/Typography";

type BooksListItemProps = Omit<Book, "id">;

const BooksListItem = ({
  title,
  author,
  src,
  color,
  backgroundColor,
  height,
  paddingLeft,
  paddingRight,
}: BooksListItemProps) => {
  return (
    <div
      className="flex items-center justify-between gap-8 pt-8 pb-8 rounded-sm writing-sideways-lr"
      style={{
        color,
        backgroundColor,
        height,
        paddingLeft,
        paddingRight,
      }}
    >
      <div className="flex flex-col">
        {author ? (
          <Typography variant="caption" color="inherit">
            {author}
          </Typography>
        ) : null}
        <Typography variant="body1" color="inherit">
          {title}
        </Typography>
      </div>

      <Image
        src={src}
        alt={title}
        className="rounded-md"
        width={BOOKSHELF_COVER_SIZE}
        height={BOOKSHELF_COVER_SIZE}
      />
    </div>
  );
};

export default BooksListItem;
