import type { Reading } from "@/lib/shiori";
import type { FoldersListCardVariant } from "@/components/folders-list";

import { cn, leftPad } from "@/utils/helpers";
import { FOLDERS_INDEX_OFFSET } from "@/utils/const";

import { FoldersListCard } from "@/components/folders-list";
import { SvgIconFolderTab } from "@/components/svg-icon";

import { Typography } from "@/components/typography";

const foldersListCardDomainVariant: Record<string, FoldersListCardVariant> = {
  "goodreads.com": "book",
  "bsky.app": "note",
  "x.com": "note",
} as const;

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
  return (
    <div
      className={cn(
        active ? "relative w-full" : "group relative w-full",
        "rounded-tr-3xl bg-gray-200",
        active
          ? "transition-none"
          : "transition-transform duration-300 ease-in-out",
        active ? null : "first:mt-0 last:p-24",
        active ? null : "hover:-translate-y-16",
        active
          ? "p-12 border-t-transparent"
          : "-mt-8 p-16 border-t border-blue-500 cursor-pointer",
        active
          ? "after:border-transparent"
          : "after:absolute after:inset-x-0 after:top-16 after:py-16",
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
      <div className="absolute bottom-full left-0 flex h-14 w-full -mb-px items-center">
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
        <div className="columns-4 gap-6">
          {links.map((link) => (
            <div key={link.id} className="mb-6 break-inside-avoid">
              <FoldersListCard
                title={link.title}
                variant={foldersListCardDomainVariant[link.domain]}
                url={link.url}
                summary={link.summary}
                author={link.author}
                imageUrl={link.image_url}
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FoldersListItem;
