import take from "lodash.take";

import type { Reading } from "@/lib/shiori";

import { cn, leftPad } from "@/utils/helpers";
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
  "group-hover:delay-150 group-hover:-rotate-6",
  "group-hover:delay-200 group-hover:rotate-0",
  "group-hover:delay-250 group-hover:rotate-8",
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
  active: boolean;
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
  const previews = take([...links], FOLDERS_PREVIEW_LIMIT);

  return (
    <div
      className={cn(
        "group relative w-full rounded-tr-3xl bg-gray-200",
        active
          ? "border-t-transparent p-8 xl:p-12"
          : "-mt-8 cursor-pointer border-t border-blue-500 p-16 first:mt-0 last:p-24",
        active
          ? "transition-none"
          : "transition-transform duration-300 ease-in-out hover:-translate-y-16",
        active
          ? null
          : "before:absolute before:inset-x-0 before:top-32 before:-bottom-16 before:z-20 before:bg-gray-200",
        active
          ? "after:border-transparent"
          : "after:pointer-events-none after:absolute after:inset-x-0 after:top-16 after:bottom-0 after:z-20 after:py-16",
        active
          ? null
          : "after:rounded-t-3xl after:border-t after:border-blue-500 after:bg-gray-200",
        active
          ? null
          : "after:opacity-0 after:transition-all after:duration-300 after:ease-out after:delay-75",
        active ? null : "hover:after:top-8 hover:after:opacity-100"
      )}
      style={{
        zIndex: index,
      }}
      onClick={onClick}
    >
      <div className="absolute bottom-full left-0 -mb-px flex h-14 w-60 items-center">
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
            active ? "drop-shadow-none" : "drop-shadow-inset-top"
          )}
        />
      </div>

      {active ? (
        <div className="columns-2 lg:columns-3 xl:columns-4 gap-6">
          {links.map((link) => {
            const type = domainKind[link.domain] ?? "article";

            return (
              <div key={link.id} className="mb-6 break-inside-avoid">
                {renderers[type](link)}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="absolute -top-1/2 left-1/2 flex w-full max-w-2xl -translate-x-1/2">
          {previews.map((link, index) => {
            const type = domainKind[link.domain] ?? "article";

            return (
              <div
                key={link.id}
                className={cn(
                  "flex-1 delay-0 translate-y-16 scale-95 opacity-0 transition-all duration-250 ease-out",
                  "group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100",
                  foldersListRotationClassNames[index]
                )}
              >
                {renderers[type](link)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FoldersListItem;
