"use client";

import { AnimatePresence, motion } from "framer-motion";
import take from "lodash.take";
import { useBoolean } from "usehooks-ts";

import type { Reading } from "@/lib/shiori";

import { foldersListAnimation } from "@/utils/keyframes";

import { cn, isNullOrUndefined } from "@/utils/helpers";
import { FOLDERS_PREVIEW_LIMIT } from "@/utils/const";

import {
  FoldersListCardArticle,
  FoldersListCardBook,
  FoldersListCardNote,
  FoldersListItemTab,
} from "@/components/folders-list";

const domainKind: Record<string, "book" | "note"> = {
  "x.com": "note",
  "bsky.app": "note",
  "goodreads.com": "book",
} as const;

const renderers = {
  book: (link: Reading) => (
    <FoldersListCardBook
      title={link.title}
      url={link.url}
      imageUrl={link.image_url}
    />
  ),
  note: (link: Reading) => (
    <FoldersListCardNote
      title={link.title}
      url={link.url}
      author={link.author}
    />
  ),
  article: (link: Reading) => (
    <FoldersListCardArticle
      title={link.title}
      url={link.url}
      domain={link.domain}
      summary={link.summary}
    />
  ),
};

type FoldersListItemProps = {
  folderIndex: number;
  name: string;
  active: string | null;
  links: ReadonlyArray<Reading>;
  onOpen: () => void;
};

const FoldersListItem = ({
  folderIndex,
  name,
  active,
  links,
  onOpen,
}: FoldersListItemProps) => {
  const { value, setTrue, setFalse } = useBoolean();

  const open = active === name;
  const closed = isNullOrUndefined(active);
  const previews = take(links, FOLDERS_PREVIEW_LIMIT);

  const handleClick = () => {
    setFalse();
    onOpen();
  };

  return (
    <div
      className={cn(
        "relative w-full bg-gray-200 rounded-tr-3xl",
        open
          ? "p-8 border-t-transparent xl:p-12"
          : "-mt-8 p-16 border-t border-blue-500 cursor-pointer first:mt-0 last:p-24",
        open
          ? "transition-none"
          : "transform-gpu transition-transform duration-300 ease-in-out hover:-translate-y-16 before:absolute before:inset-x-0 before:top-32 before:-bottom-16 before:z-20 before:bg-gray-200"
      )}
      style={{
        zIndex: folderIndex,
      }}
      onMouseEnter={setTrue}
      onMouseLeave={setFalse}
      onClick={closed ? handleClick : undefined}
    >
      {closed ? (
        <motion.div
          {...foldersListAnimation.overlay(value)}
          className="absolute inset-x-0 top-16 bottom-0 z-20 py-16 bg-gray-200 rounded-t-3xl pointer-events-none"
        >
          <motion.div
            {...foldersListAnimation.overlayBorder(value)}
            className="absolute inset-0 border-t border-blue-500 rounded-t-3xl"
          />
        </motion.div>
      ) : null}

      <FoldersListItemTab
        open={open}
        name={name}
        folderIndex={folderIndex}
        onClose={handleClick}
      />

      {closed ? (
        <motion.div
          {...foldersListAnimation.preview.container(value)}
          className="absolute top-0 left-1/2 z-10 flex w-full max-w-2xl -translate-y-24 -translate-x-1/2"
        >
          {previews.map((link, index) => {
            const type = domainKind[link.domain] ?? "article";

            return (
              <motion.div
                key={link.id}
                className="flex-1"
                variants={foldersListAnimation.preview.item.variants}
                custom={foldersListAnimation.preview.custom(folderIndex, index)}
              >
                {renderers[type](link)}
              </motion.div>
            );
          })}
        </motion.div>
      ) : null}

      <AnimatePresence>
        {open ? (
          <motion.div
            key="content"
            {...foldersListAnimation.content}
            className="columns-1 gap-6 md:columns-2 xl:columns-4"
          >
            {links.map((link) => {
              const type = domainKind[link.domain] ?? "article";

              return (
                <div key={link.id} className="mb-6 break-inside-avoid">
                  {renderers[type](link)}
                </div>
              );
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default FoldersListItem;
