import { useState } from "react";
import type { Post } from "@/lib/posts";
import { isNullOrUndefined } from "@/utils/helpers";

import { Typography } from "@/components/Typography";
import { PostListItem } from "@/components/PostsList";

type PostsListProps = {
  posts: Record<string, Post[]>;
};

const PostsList = ({ posts }: PostsListProps) => {
  const years = Object.keys(posts).sort().reverse();

  const [slug, setSlug] = useState<string | null>(null);

  return (
    <div className="border-b border-gray-100">
      {years.map((year) => (
        <div
          key={year}
          className="grid grid-cols-12 gap-6 border-t border-gray-100"
        >
          <div className="col-span-2 py-3">
            <Typography variant="body2" color="muted">
              {year}
            </Typography>
          </div>

          <div className="col-span-10 divide-y divide-gray-100">
            {posts[year].map((post) => (
              <PostListItem
                key={post.slug}
                slug={post.slug}
                title={post.title}
                label={post.label}
                createdAt={post.createdAt}
                author={post.author}
                active={isNullOrUndefined(slug) || slug === post.slug}
                onMouseLeave={() => setSlug(null)}
                onMouseEnter={() => setSlug(post.slug)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
