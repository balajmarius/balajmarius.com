import { memo, useEffect, useRef } from "react";
import Image from "next/image";
import {
  clamp,
  motion,
  MotionValue,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";

import type { Book } from "@/lib/books";

import {
  BOOKSHELF_COVER_SIZE,
  BOOKSHELF_FACTOR,
  BOOKSHELF_ROTATE,
  BOOKSHELF_ROTATE_OUTISDE_VIEW,
  BOOKSHELF_ROTATE_DAMPING,
  BOOKSHELF_ROTATE_STIFFNESS,
} from "@/utils/const";

import { Typography } from "@/components/Typography";

type BooksListItemProps = Omit<Book, "id"> & {
  velocity: MotionValue<number>;
};

const BooksListItem = ({
  title,
  velocity,
  author,
  src,
  color,
  backgroundColor,
  height,
  paddingLeft,
  paddingRight,
}: BooksListItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const tilt = useMotionValue(BOOKSHELF_ROTATE_OUTISDE_VIEW);

  const rotate = useSpring(tilt, {
    damping: BOOKSHELF_ROTATE_DAMPING,
    stiffness: BOOKSHELF_ROTATE_STIFFNESS,
  });

  useEffect(() => {
    if (isInView) {
      tilt.set(
        clamp(
          -BOOKSHELF_ROTATE,
          BOOKSHELF_ROTATE,
          velocity.get() * BOOKSHELF_FACTOR
        )
      );

      return velocity.on("change", (value) => {
        tilt.set(
          clamp(-BOOKSHELF_ROTATE, BOOKSHELF_ROTATE, value * BOOKSHELF_FACTOR)
        );
      });
    }

    tilt.set(BOOKSHELF_ROTATE_OUTISDE_VIEW);
  }, [isInView, velocity, tilt]);

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-between gap-8 rounded-sm pt-8 pb-8 writing-sideways-lr"
      style={{
        rotate,
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
        unoptimized
        src={src}
        alt={title}
        loading="lazy"
        className="rounded-md"
        width={BOOKSHELF_COVER_SIZE}
        height={BOOKSHELF_COVER_SIZE}
      />
    </motion.div>
  );
};

export default memo(BooksListItem);
