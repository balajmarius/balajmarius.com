import { useTranslations } from "next-intl";

import { SvgIconQuote } from "@/components/svg-icon";
import { Typography } from "@/components/typography";

type FoldersListCardNoteProps = {
  title: string;
  url: string;
  author: string | null;
};

const FoldersListCardNote = ({
  title,
  url,
  author,
}: FoldersListCardNoteProps) => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-4 overflow-clip rounded-xs bg-yellow-100 p-6 shadow-2xl shadow-blue-950/20">
      <SvgIconQuote size="medium" className="text-blue-500" />

      <div className="flex flex-col gap-6 pl-3">
        <Typography variant="body1">{title}</Typography>

        {author ? (
          <Typography variant="body1" display="block" className="text-right">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {t("common.author", { author })}
            </a>
          </Typography>
        ) : null}
      </div>
    </div>
  );
};

export default FoldersListCardNote;
