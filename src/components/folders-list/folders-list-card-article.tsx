import { useTranslations } from "next-intl";

import { cn } from "@/utils/helpers";

import { Link } from "@/components/link";
import { Typography } from "@/components/typography";

type FoldersListCardArticleProps = {
  title: string;
  url: string;
  domain: string;
  summary: string | null;
};

const FoldersListCardArticle = ({
  title,
  url,
  domain,
  summary,
}: FoldersListCardArticleProps) => {
  const t = useTranslations();

  return (
    <div
      className={cn(
        "flex flex-col overflow-clip px-6 py-12 bg-gray-300 rounded-xs shadow-2xl shadow-blue-950/20",
        summary ? "gap-6" : "gap-3"
      )}
    >
      <Typography variant="body2" color="muted">
        {domain}
      </Typography>

      <Typography variant={summary ? "h2" : "subtitle1"}>{title}</Typography>

      {summary ? (
        <Typography variant="body1" className="line-clamp-3">
          {summary}
        </Typography>
      ) : null}

      <Link href={url} target="_blank">
        {t("readings.readArticle")}
      </Link>
    </div>
  );
};

export default FoldersListCardArticle;
