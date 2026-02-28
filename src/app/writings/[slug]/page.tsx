import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";

import { getPost, getPostSlugs } from "@/lib/posts";
import { isNullOrUndefined } from "@/utils/helpers";

import PostContent from "@/app/writings/[slug]/writings-slug-client";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

const renderers = {
  p: (props: ComponentProps<"p">) => <p {...props} />,
  a: (props: ComponentProps<"a">) => (
    <a
      target="_blank"
      className="text-blue-500 border-b border-b-blue-300 hover:text-blue-400 hover:border-b-blue-200"
      {...props}
    />
  ),
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="pt-8 text-xl font-medium" {...props} />
  ),
  h3: (props: ComponentProps<"h3">) => (
    <h3 className="pt-4 font-medium" {...props} />
  ),
  em: (props: ComponentProps<"em">) => (
    <em className="font-serif italic" {...props} />
  ),
  pre: (props: ComponentProps<"pre">) => (
    <pre className="overflow-auto rounded-lg bg-gray-200 p-3" {...props} />
  ),
  code: (props: ComponentProps<"code">) => (
    <code className="font-roboto-mono text-md text-blue-500" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-none space-y-3 pl-6" {...props} />
  ),
  li: (props: ComponentProps<"li">) => (
    <li className="list-disc pl-2 marker:text-blue-500" {...props} />
  ),
  hr: (props: ComponentProps<"hr">) => (
    <hr className="my-8 border-gray-100" {...props} />
  ),
};

export const generateStaticParams = () => {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: PostPageProps): Promise<Metadata> => {
  const { slug } = await params;
  const post = getPost(slug);

  return {
    title: post?.title,
    openGraph: {
      title: post?.title,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title,
    },
  };
};

const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = await params;
  const post = getPost(slug);

  if (isNullOrUndefined(post)) {
    notFound();
  }

  return (
    <PostContent
      title={post.title}
      author={post.author}
      createdAt={post.createdAt}
    >
      <MDXRemote source={post.content} components={renderers} />
    </PostContent>
  );
};

export default PostPage;
