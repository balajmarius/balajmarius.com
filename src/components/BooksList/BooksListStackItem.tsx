import { memo, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

import type { Book } from "@/lib/books";

import {
  BOOKSHELF_ANIMATION_DAMPING,
  BOOKSHELF_ANIMATION_STIFFNESS,
  BOOKSHELF_TRANSPARENCY_OUTSIDE_VIEW,
  BOOKSHELF_TRANSPARENCY_IN_VIEW,
} from "@/utils/const";

import { Typography } from "@/components/Typography";

type BooksListStackItemProps = Omit<
  Book,
  "id" | "paddingLeft" | "paddingRight"
>;

const BooksListStackItem = ({
  size,
  title,
  author,
  src,
  color,
  backgroundColor,
  coverWidth,
  coverHeight,
}: BooksListStackItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const transparency = useMotionValue(BOOKSHELF_TRANSPARENCY_OUTSIDE_VIEW);

  const opacity = useSpring(transparency, {
    damping: BOOKSHELF_ANIMATION_DAMPING,
    stiffness: BOOKSHELF_ANIMATION_STIFFNESS,
  });

  useEffect(() => {
    transparency.set(
      isInView
        ? BOOKSHELF_TRANSPARENCY_IN_VIEW
        : BOOKSHELF_TRANSPARENCY_OUTSIDE_VIEW
    );
  }, [isInView, transparency]);

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-between gap-8 max-w-full rounded-sm py-3 px-8 content-auto"
      style={{
        opacity,
        color,
        backgroundColor,
        width: size,
      }}
    >
      <div className="flex flex-col">
        <Typography variant="body1" color="inherit">
          {title}
        </Typography>
        {author ? (
          <Typography variant="caption" color="inherit">
            {author}
          </Typography>
        ) : null}
      </div>

      <Image
        src={src}
        alt={title}
        loading="lazy"
        className="rounded-md w-16 h-auto"
        width={coverWidth}
        height={coverHeight}
      />
    </motion.div>
  );
};

export default memo(BooksListStackItem);
