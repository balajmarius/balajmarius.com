import { useEffect, useRef, type HTMLAttributes, type ReactNode } from "react";
import Lenis from "lenis";
import Head from "next/head";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { getBooks, type Book } from "@/lib/books";
import { BOOKSHELF_COVER_SIZE } from "@/utils/const";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";
import { isNullOrUndefined } from "@/utils/helpers";

type BookshelfProps = {
  books: Book[];
} & HTMLAttributes<HTMLElement>;

const Bookshelf = ({ books }: BookshelfProps) => {
  const t = useTranslations();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const visibleBooksRef = useRef<Set<Element>>(new Set());

  useEffect(() => {
    if (isNullOrUndefined(scrollContainerRef.current)) {
      return undefined;
    }

    const lenis = new Lenis({
      wrapper: scrollContainerRef.current,
      content: scrollContainerRef.current,
      orientation: "horizontal",
      gestureOrientation: "both",
    });

    const bookElements =
      scrollContainerRef.current.querySelectorAll("[data-book]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleBooksRef.current.add(entry.target);
          } else {
            visibleBooksRef.current.delete(entry.target);
          }
        });
      },
      { root: scrollContainerRef.current, threshold: 0 }
    );

    bookElements.forEach((book) => observer.observe(book));

    lenis.on("scroll", ({ velocity }: { velocity: number }) => {
      const angle = Math.max(-3, Math.min(3, velocity * 0.5));
      visibleBooksRef.current.forEach((book) => {
        (book as HTMLElement).style.transform = `rotate(${angle}deg)`;
      });
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>{t("bookshelf.title")}</title>
      </Head>

      <Section>
        <div className="space-y-8">
          <Typography variant="h1" display="block">
            {t.rich("bookshelf.onMyBookshelf", {
              serif: (chunks: ReactNode) => (
                <span className="font-serif italic text-blue-500">
                  {chunks}
                </span>
              ),
            })}
          </Typography>

          <Typography variant="body1" display="block">
            {t("bookshelf.personalCollectionOfBooks")}
          </Typography>
        </div>
      </Section>

      <div className="space-y-16">
        <div className="px-6 sm:px-12 pt-24">
          <Typography variant="subtitle1" display="block">
            {t("bookshelf.books")}
          </Typography>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex items-end gap-x-1 overflow-x-auto px-6 sm:px-12 scrollbar-hide"
        >
          {books.map((book) => (
            <div
              key={book.id}
              data-book
              className="flex justify-between items-center rounded-sm gap-8 pt-8 pb-8 [writing-mode:sideways-lr] transition-transform duration-300 ease-out"
              style={{
                backgroundColor: book.backgroundColor,
                color: book.color,
                height: book.height,
                paddingLeft: book.paddingLeft,
                paddingRight: book.paddingRight,
              }}
            >
              <div className="flex flex-col">
                {book.author ? (
                  <Typography variant="caption" color="inherit">
                    {book.author}
                  </Typography>
                ) : null}
                <Typography variant="body1" color="inherit">
                  {book.title}
                </Typography>
              </div>

              <Image
                src={book.src}
                alt={book.title}
                className="rounded-md"
                width={BOOKSHELF_COVER_SIZE}
                height={BOOKSHELF_COVER_SIZE}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      books: await getBooks(),
      messages: (await import("@/copy/en-EN.json")).default,
    },
  };
};

export default Bookshelf;
