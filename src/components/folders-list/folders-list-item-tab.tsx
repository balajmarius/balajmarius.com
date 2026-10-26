"use client";

import { useTranslations } from "next-intl";
import { useMediaQuery } from "usehooks-ts";

import { cn, leftPad } from "@/utils/helpers";
import { FOLDERS_INDEX_OFFSET } from "@/utils/const";

import { Button } from "@/components/button";
import { SvgIconBack, SvgIconFolderTab } from "@/components/svg-icon";
import { Typography } from "@/components/typography";

type FoldersListItemTabProps = {
  folderIndex: number;
  name: string;
  open: boolean;
  onClose: () => void;
};

const FoldersListItemTab = ({
  folderIndex,
  name,
  open,
  onClose,
}: FoldersListItemTabProps) => {
  const t = useTranslations();
  const lg = useMediaQuery("(min-width: 768px)");

  return (
    <div
      className={cn(
        "absolute bottom-full flex items-center justify-between md:-mb-px",
        open ? "inset-x-0" : "left-0"
      )}
    >
      <div className="relative isolate flex items-center gap-3 h-11 w-48 px-4 select-none md:gap-4 md:h-14 md:w-60 md:px-6">
        <SvgIconFolderTab
          size="inherit"
          className={cn(
            "absolute inset-0 -z-10 size-full text-gray-200",
            open ? "drop-shadow-none" : "drop-shadow-inset-top"
          )}
        />
        <Typography variant="body2" className="max-md:text-xs">
          {leftPad(folderIndex + FOLDERS_INDEX_OFFSET)}
        </Typography>
        <Typography
          variant="h2"
          color="accent"
          textTransform={folderIndex ? "capitalize" : "uppercase"}
          className="max-md:text-lg"
        >
          {name}
        </Typography>
      </div>

      {open ? (
        <Button startIcon={<SvgIconBack size="small" />} onClick={onClose}>
          <Typography variant="body1" color="inherit">
            {lg ? t("bookmarks.backToFolders") : t("bookmarks.back")}
          </Typography>
        </Button>
      ) : null}
    </div>
  );
};

export default FoldersListItemTab;
