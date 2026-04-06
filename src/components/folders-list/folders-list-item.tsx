import type { Reading } from "@/lib/shiori";

import { cn, leftPad } from "@/utils/helpers";
import { FOLDERS_INDEX_OFFSET } from "@/utils/const";

import { SvgIconFolderTab } from "@/components/svg-icon";

import { Typography } from "@/components/typography";

type FoldersListItemProps = {
  index: number;
  name: string;
  links: ReadonlyArray<Reading>;
  active: boolean;
  onClick: () => void;
};

const FoldersListItem = ({
  index,
  name,
  active,
  onClick,
}: FoldersListItemProps) => {
  return (
    <div
      className={cn(
        "group relative w-full",
        "rounded-tr-3xl bg-gray-200",
        active
          ? "transition-none"
          : "transition-transform duration-300 ease-in-out",
        active ? null : "first:mt-0 last:p-24",
        active ? null : "hover:-translate-y-16",
        active
          ? "p-12 border-t-transparent"
          : "cursor-pointer -mt-8 p-16 border-t border-blue-500",
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
      <div className="absolute bottom-full left-0 flex h-14 w-full items-center">
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
            active
              ? "transition-none"
              : "transition-all duration-300 ease-in-out",
            active ? "drop-shadow-none" : "drop-shadow-inset-top"
          )}
        />
      </div>
    </div>
  );
};

export default FoldersListItem;
