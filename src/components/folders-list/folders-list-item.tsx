import take from "lodash.take";

import type { Reading } from "@/lib/shiori";

import { cn, isNullOrUndefined, leftPad } from "@/utils/helpers";
import { FOLDERS_INDEX_OFFSET, FOLDERS_PREVIEW_LIMIT } from "@/utils/const";

import { SvgIconFolderTab } from "@/components/svg-icon";
import { Typography } from "@/components/typography";

import {
  FoldersListCardArticle,
  FoldersListCardBook,
  FoldersListCardNote,
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
  const previews = take([...links], FOLDERS_PREVIEW_LIMIT);

  return (
    <div
      className={cn(
        "group relative w-full rounded-tr-3xl bg-gray-200",
        open
          ? "p-8 border-t-transparent xl:p-12"
          : "-mt-8 p-16 border-t border-blue-500 cursor-pointer first:mt-0 last:p-24",
        open
          ? "transition-none"
          : "transition-transform duration-300 ease-in-out hover:-translate-y-16",
        isNullOrUndefined(active)
          ? "before:absolute before:z-20 before:inset-x-0 before:top-32 before:-bottom-16 before:bg-gray-200"
          : null
      )}
      style={{
        zIndex: index,
      }}
      onClick={onClick}
    >
      {isNullOrUndefined(active) ? (
        <div
          className={cn(
            "absolute z-20 inset-x-0 top-16 bottom-0 py-16 pointer-events-none",
            "rounded-t-3xl bg-gray-200",
            "transform-gpu transition-transform duration-300 ease-out",
            "group-hover:-translate-y-8",
            "after:absolute after:inset-0 after:rounded-t-3xl after:border-t after:border-blue-500",
            "after:opacity-0 after:transition-opacity after:duration-300 after:ease-out after:delay-75",
            "group-hover:after:opacity-100 group-hover:after:delay-0"
          )}
        />
      ) : null}

      <div className="absolute bottom-full left-0 flex items-center -mb-px h-14 w-60">
        <div className="relative z-10 flex items-start gap-4 px-6 select-none">
          <Typography variant="body2">
            {leftPad(index + FOLDERS_INDEX_OFFSET)}
          </Typography>
          <Typography
            variant="h2"
            color="accent"
            textTransform={index ? "capitalize" : "uppercase"}
          >
            {name}
          </Typography>
        </div>

        <SvgIconFolderTab
          size="inherit"
          className={cn(
            "absolute inset-0 max-h-full",
            "text-gray-200",
            open ? "drop-shadow-none" : "drop-shadow-inset-top"
          )}
        />
      </div>

      {isNullOrUndefined(active) ? (
        <div
          className={cn(
            "absolute z-10 -top-1/2 left-1/2 flex w-full max-w-2xl -translate-x-1/2",
            "pointer-events-none group-hover:pointer-events-auto"
          )}
        >
          {previews.map((link, index) => {
            const type = domainKind[link.domain] ?? "article";

            return (
              <div
                key={link.id}
                className={cn(
                  "flex-1 translate-y-16 scale-95 opacity-0 transition-all duration-200 ease-out delay-0",
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
        <div className="gap-6 columns-4">
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
