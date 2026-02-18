import {
  clamp,
  type MotionValue,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { memo, useEffect, useRef } from "react";
import { Typography } from "@/components/Typography";
import type { Book } from "@/lib/books";
import {
  BOOKSHELF_ANIMATION_DAMPING,
  BOOKSHELF_ANIMATION_STIFFNESS,
  BOOKSHELF_FACTOR,
  BOOKSHELF_ROTATE_MAX,
  BOOKSHELF_ROTATE_OUTSIDE_VIEW,
} from "@/utils/const";

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
  cardSize,
  paddingLeft,
  paddingRight,
  coverWidth,
  coverHeight,
}: BooksListItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const tilt = useMotionValue(BOOKSHELF_ROTATE_OUTSIDE_VIEW);

  const rotate = useSpring(tilt, {
    damping: BOOKSHELF_ANIMATION_DAMPING,
    stiffness: BOOKSHELF_ANIMATION_STIFFNESS,
  });

  useEffect(() => {
    if (isInView) {
      tilt.set(
        clamp(
          -BOOKSHELF_ROTATE_MAX,
          BOOKSHELF_ROTATE_MAX,
          velocity.get() * BOOKSHELF_FACTOR
        )
      );

      return velocity.on("change", (value) => {
        tilt.set(
          clamp(
            -BOOKSHELF_ROTATE_MAX,
            BOOKSHELF_ROTATE_MAX,
            value * BOOKSHELF_FACTOR
          )
        );
      });
    }

    tilt.set(BOOKSHELF_ROTATE_OUTSIDE_VIEW);
  }, [isInView, velocity, tilt]);

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-between gap-8 rounded-sm pt-8 pb-8 writing-sideways-lr"
      style={{
        rotate,
        color,
        backgroundColor,
        paddingLeft,
        paddingRight,
        height: cardSize,
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
        loading="lazy"
        className="rounded-md w-16 h-auto"
        width={coverWidth}
        height={coverHeight}
      />
    </motion.div>
  );
};

export default memo(BooksListItem);
