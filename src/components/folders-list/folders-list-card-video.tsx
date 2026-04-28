import { useTranslations } from "next-intl";

import { SvgIconVideo } from "@/components/svg-icon";
import { Link } from "@/components/link";
import { Typography } from "@/components/typography";

type FoldersListCardVideoProps = {
  title: string;
  url: string;
  summary: string | null;
};

const FoldersListCardVideo = ({ title, url }: FoldersListCardVideoProps) => {
  const t = useTranslations();

  return (
    <div className="overflow-hidden rounded-xs bg-gray-300 shadow-2xl shadow-blue-950/20">
      <div className="flex flex-col gap-10 px-8 pt-8 pb-6">
        <div className="flex size-10 items-center justify-center rounded-sm bg-blue-500 text-white">
          <SvgIconVideo size="small" />
        </div>

        <Typography variant="h2" display="block">
          {title}
        </Typography>
      </div>

      <div className="relative border-t border-dashed border-gray-100 px-8 py-6 before:absolute before:top-0 before:left-0 before:size-7 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-gray-200 before:content-[''] after:absolute after:top-0 after:right-0 after:size-7 after:translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-gray-200 after:content-['']">
        <Link href={url} target="_blank">
          {t("bookmarks.watchVideo")}
        </Link>
      </div>
    </div>
  );
};

export default FoldersListCardVideo;
