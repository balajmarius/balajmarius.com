import { useTranslations } from "next-intl";

import { Link } from "@/components/link";
import { SvgIconQuote } from "@/components/svg-icon";
import { Typography } from "@/components/typography";

type FoldersListCardBaseProps = {
  title: string;
  url: string;
};

type FoldersListCardLinkProps = FoldersListCardBaseProps & {
  variant?: "link";
  summary: string | null;
  imageUrl?: never;
  author?: never;
};

type FoldersListCardQuoteProps = FoldersListCardBaseProps & {
  variant: "quote";
  author: string | null;
  summary?: never;
  imageUrl?: never;
};

type FoldersListCardBookProps = FoldersListCardBaseProps & {
  variant: "book";
  imageUrl: string | null;
  summary?: never;
  author?: never;
};

export type FoldersListCardProps =
  | FoldersListCardLinkProps
  | FoldersListCardQuoteProps
  | FoldersListCardBookProps;

const FoldersListCard = ({
  variant = "link",
  title,
  url,
  summary,
  author,
}: FoldersListCardProps) => {
  const t = useTranslations();

  if (variant === "link") {
    return (
      <div className="flex flex-col gap-6 overflow-clip px-6 py-12 rounded-sm bg-gray-300">
        <Typography variant="h2">{title}</Typography>

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
  }

  if (variant === "quote") {
    return (
      <div className="flex flex-col gap-4 overflow-clip p-6 rounded-sm bg-yellow-100">
        <SvgIconQuote size="medium" className="text-blue-500" />

        <div className="flex flex-col gap-6 pl-3">
          <Typography variant="body1">{title}</Typography>

          {author ? (
            <Typography variant="body1" display="block" className="text-right">
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
      </div>
    );
  }

  return null;
};

export default FoldersListCard;
