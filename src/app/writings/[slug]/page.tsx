import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { ComponentProps } from "react";
import { formatISO } from "date-fns/formatISO";
import remarkGfm from "remark-gfm";

import { getPost, getPostSlugs } from "@/lib/posts";

import { APP_URL } from "@/utils/const";
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
      className="border-b border-b-blue-300 text-blue-500 hover:border-b-blue-200 hover:text-blue-400"
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
    <li
      className="list-disc pl-2 marker:text-blue-500 [&>ul]:mt-3"
      {...props}
    />
  ),
  table: (props: ComponentProps<"table">) => (
    <table
      className="w-full border-collapse text-left xl:min-w-4xl"
      {...props}
    />
  ),
  thead: (props: ComponentProps<"thead">) => (
    <thead className="border-b border-gray-200" {...props} />
  ),
  tr: (props: ComponentProps<"tr">) => (
    <tr className="border-b border-gray-100 align-top" {...props} />
  ),
  th: (props: ComponentProps<"th">) => (
    <th className="pt-4 pb-3 px-3 font-serif font-normal italic" {...props} />
  ),
  td: (props: ComponentProps<"td">) => <td className="p-3" {...props} />,
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
  } as const;
};

const generateStructuredData = (
  post: NonNullable<ReturnType<typeof getPost>>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: formatISO(post.createdAt),
    author: {
      "@id": `${APP_URL}/#person`,
    },
    publisher: {
      "@id": `${APP_URL}/#person`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${APP_URL}/writings/${post.slug}`,
    },
  } as const;
};

const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = await params;
  const post = getPost(slug);

  if (isNullOrUndefined(post)) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData(post)),
        }}
      />

      <PostContent
        title={post.title}
        author={post.author}
        createdAt={post.createdAt}
      >
        <MDXRemote
          source={post.content}
          components={renderers}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </PostContent>
    </>
  );
};

export default PostPage;
