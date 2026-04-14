import take from "lodash.take";

import type { Reading } from "@/lib/shiori";

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

const foldersListRotationClassNames = [
  "group-hover:-rotate-6 group-hover:delay-150",
  "group-hover:rotate-0 group-hover:delay-200",
  "group-hover:rotate-8 group-hover:delay-250",
] as const;

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
  index: number;
  name: string;
  active: string | null;
  links: ReadonlyArray<Reading>;
  onClick: () => void;
};

const FoldersListItem = ({
  index,
  name,
  active,
  links,
  onClick,
}: FoldersListItemProps) => {
  const open = active === name;
  const closed = isNullOrUndefined(active);
  const previews = take(links, FOLDERS_PREVIEW_LIMIT);

  return (
    <div
      className={cn(
        "group relative w-full bg-gray-200 rounded-tr-3xl",
        open
          ? "p-8 border-t-transparent xl:p-12"
          : "-mt-8 p-16 border-t border-blue-500 cursor-pointer first:mt-0 last:p-24",
        open
          ? "transition-none"
          : "transform-gpu transition-transform duration-300 ease-in-out hover:-translate-y-16",
        closed
          ? "before:absolute before:inset-x-0 before:top-32 before:-bottom-16 before:z-20 before:bg-gray-200"
          : null
      )}
      style={{
        zIndex: index,
      }}
      onClick={onClick}
    >
      {closed ? (
        <div
          className={cn(
            "absolute inset-x-0 top-16 bottom-0 z-20 py-16 pointer-events-none",
            "bg-gray-200 rounded-t-3xl",
            "transform-gpu transition-transform duration-300 ease-out",
            "group-hover:-translate-y-8",
            "after:absolute after:inset-0 after:border-t after:border-blue-500 after:rounded-t-3xl",
            "after:opacity-0 after:transition-opacity after:duration-300 after:ease-out after:delay-75",
            "group-hover:after:opacity-100 group-hover:after:delay-0"
          )}
        />
      ) : null}

      <FoldersListItemTab
        open={open}
        name={name}
        index={index}
        onClose={onClick}
      />

      {closed ? (
        <div
          className={cn(
            "absolute -top-24 left-1/2 z-10 flex w-full max-w-2xl -translate-x-1/2",
            "pointer-events-none group-hover:pointer-events-auto"
          )}
        >
          {previews.map((link, index) => {
            const type = domainKind[link.domain] ?? "article";

            return (
              <div
                key={link.id}
                className={cn(
                  "flex-1 opacity-0 translate-y-16 scale-95 transform-gpu transition-all duration-200 ease-out",
                  "group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100",
                  foldersListRotationClassNames[index]
                )}
              >
                {renderers[type](link)}
              </div>
            );
          })}
        </div>
      ) : null}

      {open ? (
        <div className="columns-1 gap-6 md:columns-2 xl:columns-4">
          {links.map((link) => {
            const type = domainKind[link.domain] ?? "article";

            return (
              <div key={link.id} className="mb-6 break-inside-avoid">
                {renderers[type](link)}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default FoldersListItem;
