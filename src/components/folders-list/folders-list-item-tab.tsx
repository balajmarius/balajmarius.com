import { useTranslations } from "next-intl";

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

  return (
    <div
      className={cn(
        "absolute bottom-full flex items-center justify-between -mb-px",
        open ? "inset-x-0" : "left-0"
      )}
    >
      <div className="relative isolate flex items-center gap-4 h-14 w-60 px-6 select-none">
        <SvgIconFolderTab
          size="inherit"
          className={cn(
            "absolute inset-0 -z-10 text-gray-200",
            open ? "drop-shadow-none" : "drop-shadow-inset-top"
          )}
        />
        <Typography variant="body2">
          {leftPad(folderIndex + FOLDERS_INDEX_OFFSET)}
        </Typography>
        <Typography
          variant="h2"
          color="accent"
          textTransform={folderIndex ? "capitalize" : "uppercase"}
        >
          {name}
        </Typography>
      </div>

      {open ? (
        <Button startIcon={<SvgIconBack size="small" />} onClick={onClose}>
          <Typography variant="body1" color="inherit">
            {t("readings.backToFolders")}
          </Typography>
        </Button>
      ) : null}
    </div>
  );
};

export default FoldersListItemTab;
