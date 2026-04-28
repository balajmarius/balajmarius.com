import { useTranslations } from "next-intl";

import { Link } from "@/components/link";
import { Typography } from "@/components/typography";
import { SvgIconVideo } from "@/components/svg-icon";

type FoldersListCardVideoProps = {
  title: string;
  url: string;
  summary: string | null;
};

const FoldersListCardVideo = ({ title, url }: FoldersListCardVideoProps) => {
  const t = useTranslations();

  return (
    <div className="drop-shadow-2xl">
      <div className="bg-gray-300">
        <div className="flex flex-col gap-3 px-6 py-3">
          <div className="flex items-center justify-center bg-blue-500 rounded-sm size-6">
            <SvgIconVideo size="small" className="text-gray-300" />
          </div>

          <Typography variant="subtitle1">{title}</Typography>
        </div>

        <div className="px-6 py-1">
          <Link href={url} target="_blank">
            {t("bookmarks.watchTheVideo")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoldersListCardVideo;
