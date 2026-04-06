import { useTranslations } from "next-intl";
import Image from "next/image";

import { Link } from "@/components/link";
import { SvgIconQuote } from "@/components/svg-icon";
import { Typography } from "@/components/typography";
import { cn } from "@/utils/helpers";

type FoldersListCardBaseProps = {
  title: string;
  url: string;
  summary: string | null;
  author: string | null;
};

type FoldersListCardArticleProps = FoldersListCardBaseProps & {
  variant?: "article";
  imageUrl?: never;
};

type FoldersListCardNoteProps = FoldersListCardBaseProps & {
  variant: "note";
  imageUrl?: never;
};

type FoldersListCardBookProps = FoldersListCardBaseProps & {
  variant: "book";
  imageUrl: string | null;
};

export type FoldersListCardProps =
  | FoldersListCardArticleProps
  | FoldersListCardNoteProps
  | FoldersListCardBookProps;

const FoldersListCard = ({
  variant = "article",
  title,
  url,
  summary,
  author,
  imageUrl,
}: FoldersListCardProps) => {
  const t = useTranslations();

  return (
    <div
      className={cn(
        "flex flex-col overflow-clip rounded-sm shadow-blue-950/20",
        variant === "article"
          ? "gap-6 px-6 py-12 bg-gray-300 shadow-2xl"
          : null,
        variant === "note" ? "gap-4 p-6 bg-yellow-100 shadow-2xl" : null,
        variant === "book" ? "gap-6 shadow-xl" : null
      )}
    >
      {variant === "book" && imageUrl ? (
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={600}
          loading="lazy"
          className="max-w-xs w-full rounded-sm object-cover"
        />
      ) : null}

      {variant === "note" ? (
        <>
          <SvgIconQuote size="medium" className="text-blue-500" />

          <div className="flex flex-col gap-6 pl-3">
            <Typography variant="body1">{title}</Typography>

            {author ? (
              <Typography
                variant="body1"
                display="block"
                className="text-right"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-500"
                >
                  {t("posts.author", { author })}
                </a>
              </Typography>
            ) : null}
          </div>
        </>
      ) : null}

      {variant === "article" ? (
        <>
          <Typography variant="h2">{title}</Typography>

          {summary ? (
            <Typography variant="body1" className="line-clamp-3">
              {summary}
            </Typography>
          ) : null}

          <Link href={url} target="_blank">
            {t("readings.readArticle")}
          </Link>
        </>
      ) : null}
    </div>
  );
};

export default FoldersListCard;
