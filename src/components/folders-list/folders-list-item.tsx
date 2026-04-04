import type { Reading } from "@/lib/shiori";

import { FOLDERS_INDEX_OFFSET } from "@/utils/const";
import { cn, leftPad } from "@/utils/helpers";

import { SvgIconFolderTab } from "@/components/svg-icon";

import { Typography } from "@/components/typography";

type FoldersListItemProps = {
  index: number;
  name: string;
  links: ReadonlyArray<Reading>;
};

const FoldersListItem = ({
  index,
  name,
  links: _links,
}: FoldersListItemProps) => {
  const textTransform = index ? "capitalize" : "uppercase";

  return (
    <div
      className={cn(
        "group relative w-full",
        "transition-transform duration-300 ease-in-out",
        "-mt-8 py-16 first:mt-0 last:py-24 hover:-translate-y-16",
        "rounded-tr-3xl border-t border-blue-500 bg-gray-200",
        "after:absolute after:inset-x-0 after:top-16 after:py-16",
        "after:rounded-t-3xl after:border-t after:border-blue-500 after:bg-gray-200",
        "after:opacity-0 after:transition-all after:duration-300 after:ease-out after:delay-75",
        "hover:after:top-8 hover:after:opacity-100"
      )}
      style={{
        zIndex: index,
      }}
    >
      <div className="absolute bottom-full left-0 flex h-14 w-full items-center">
        <div className="relative z-10 flex items-start gap-4 px-6 select-none">
          <Typography variant="body2">
            {leftPad(index + FOLDERS_INDEX_OFFSET)}
          </Typography>
          <Typography variant="h2" color="accent" textTransform={textTransform}>
            {name}
          </Typography>
        </div>

        <SvgIconFolderTab
          size="inherit"
          className="absolute inset-0 max-h-full text-gray-200 drop-shadow-inset-top"
        />
      </div>
    </div>
  );
};

export default FoldersListItem;
