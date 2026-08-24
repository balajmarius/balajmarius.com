import Image from "next/image";
import { useTranslations } from "next-intl";

import { cn } from "@/utils/helpers";
import {
  FAVICON_RESOLVER_URL,
  FOLDERS_CARD_FAVICON_SIZE,
  FOLDERS_CARD_FAVICON_SOURCE_SIZE,
} from "@/utils/const";

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

  // ABOUTME: resolves icons declared via <link rel="icon"> too, unlike /favicon.ico,
  // and is requested oversized so it stays crisp on high-density displays.
  const faviconUrl = `${FAVICON_RESOLVER_URL}?domain=${encodeURIComponent(domain)}&sz=${FOLDERS_CARD_FAVICON_SOURCE_SIZE}`;

  return (
    <div
      className={cn(
        "flex flex-col overflow-clip p-6 bg-gray-300 rounded-xs shadow-2xl shadow-blue-950/20",
        summary ? "gap-4" : "gap-3"
      )}
    >
      <div className="flex items-center gap-1">
        <Image
          src={faviconUrl}
          alt={domain}
          width={FOLDERS_CARD_FAVICON_SIZE}
          height={FOLDERS_CARD_FAVICON_SIZE}
          loading="lazy"
          className="shrink-0 size-4 object-contain"
        />

        <Typography variant="body2" color="muted">
          {domain}
        </Typography>
      </div>

      <Typography variant={summary ? "h2" : "subtitle1"}>{title}</Typography>

      {summary ? (
        <Typography variant="body1" className="line-clamp-3">
          {summary}
        </Typography>
      ) : null}

      <Link href={url} target="_blank">
        {t("bookmarks.readArticle")}
      </Link>
    </div>
  );
};

export default FoldersListCardArticle;
