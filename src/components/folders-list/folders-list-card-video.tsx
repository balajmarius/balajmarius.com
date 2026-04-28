import { useTranslations } from "next-intl";

import { Link } from "@/components/link";
import { Typography } from "@/components/typography";
import {
  SvgIconMiddleCap,
  SvgIconTopCap,
  SvgIconVideo,
} from "@/components/svg-icon";

type FoldersListCardVideoProps = {
  title: string;
  url: string;
  summary: string | null;
};

const FoldersListCardVideo = ({ title, url }: FoldersListCardVideoProps) => {
  const t = useTranslations();

  return (
    <div className="overflow-hidden drop-shadow-2xl">
      <SvgIconTopCap size="inherit" className="w-full text-gray-300" />

      <div className="flex flex-col gap-3 px-6 py-3 bg-gray-300">
        <div className="size-6 bg-blue-500 rounded-sm flex items-center justify-center">
          <SvgIconVideo size="small" className="text-gray-300" />
        </div>
        <Typography variant="subtitle1">{title}</Typography>
      </div>

      <SvgIconMiddleCap size="inherit" className="w-full text-gray-300" />

      <div className="px-6 py-1 bg-gray-300">
        <Link href={url} target="_blank">
          {t("bookmarks.watchTheVideo")}
        </Link>
      </div>

      <SvgIconTopCap
        size="inherit"
        className="w-full text-gray-300 rotate-180"
      />
    </div>
  );
};

export default FoldersListCardVideo;
