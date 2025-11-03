import Link from "next/link";
import { format } from "date-fns";
import type { MouseEventHandler } from "react";

import { cn } from "@/utils/helpers";
import type { PostLabel } from "@/lib/posts";

import { Chip, type ChipColor } from "@/components/Chip";
import { Typography } from "@/components/Typography";

type ChipColorLabelMapping = Record<PostLabel, ChipColor>;

type PostListItemProps = {
  slug: string;
  title: string;
  author?: string;
  createdAt: Date;
  label: PostLabel;
  active: boolean;
  onMouseEnter: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave: MouseEventHandler<HTMLAnchorElement>;
};

const chipColorLabel: ChipColorLabelMapping = {
  Book: "info",
  LLMs: "success",
  Dev: "primary",
  TIL: "secondary",
};

const PostListItem = ({
  slug,
  title,
  author,
  createdAt,
  label,
  active,
  onMouseEnter,
  onMouseLeave,
}: PostListItemProps) => {
  return (
    <Link
      href={`/writings/${slug}`}
      className={cn(
        "group flex flex-col sm:flex-row gap-1.5 sm:justify-between py-3 transition-opacity ease-out-exponential",
        active ? "opacity-100" : "opacity-50"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="space-x-1 group-hover:text-blue-500">
        <Typography variant="body1" color="inherit" display="inline">
          {title}
        </Typography>
        {author ? (
          <Typography variant="subtitle1" color="inherit" display="inline">
            {author}
          </Typography>
        ) : null}
      </div>

      <div className="flex items-center gap-x-3">
        <Typography variant="body2" color="muted">
          {format(createdAt, "dd/MM")}
        </Typography>

        <Chip color={chipColorLabel[label]}>{label}</Chip>
      </div>
    </Link>
  );
};

export default PostListItem;
