import { format } from "date-fns";

import type { Post, PostLabel } from "@/lib/fetchPosts";

import { Chip, type ChipColor } from "@/components/Chip";
import { Typography } from "@/components/Typography";

type ChipColorLabelMapping = Record<PostLabel, ChipColor>;

type WritingsListItemProps = {
  year: string;
  posts: Post[];
};

const chipColorLabel: ChipColorLabelMapping = {
  Book: "info",
  LLMs: "success",
  Dev: "primary",
  TIL: "secondary",
};

const WritingsListItem = ({ year, posts }: WritingsListItemProps) => {
  return (
    <div className="grid grid-cols-12 gap-6 border-t border-gray-100">
      <div className="col-span-2 py-3">
        <Typography variant="body2" color="muted">
          {year}
        </Typography>
      </div>

      <div className="col-span-10 divide-y divide-gray-100">
        {posts.map((post) => (
          <div key={post.slug} className="flex justify-between py-3">
            <div className="space-x-1">
              <Typography variant="body1" display="inline">
                {post.title}
              </Typography>
              {post.author ? (
                <Typography variant="subtitle1" display="inline">
                  {post.author}
                </Typography>
              ) : null}
            </div>

            <div className="flex items-center gap-x-3">
              <Typography variant="body2" color="muted">
                {format(post.createdAt, "dd/MM")}
              </Typography>
              <Chip color={chipColorLabel[post.label]}>{post.label}</Chip>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WritingsListItem;
