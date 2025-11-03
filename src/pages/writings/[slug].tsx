import Head from "next/head";
import Link from "next/link";
import type { ComponentProps } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import { getPost, getPostSlugs } from "@/lib/posts";
import { isNullOrUndefined } from "@/utils/helpers";

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";
import { SvgIconBack } from "@/components/SvgIcon";

type PostPageProps = {
  title: string;
  author?: string;
  createdAt: string;
  label: string;
  mdxSource: MDXRemoteSerializeResult;
};

const PostPage = ({ title, author, createdAt, mdxSource }: PostPageProps) => {
  const t = useTranslations();

  const renderers = {
    p: (props: ComponentProps<"p">) => <p {...props} />,
    a: (props: ComponentProps<"a">) => (
      <a className="text-blue-500 border-b hover:text-blue-400" {...props} />
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
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Section>
        <div className="space-y-16">
          <Link href="/writings" className="inline-block">
            <Button startIcon={<SvgIconBack size="small" />}>
              <Typography variant="body1" color="inherit">
                {t("posts.backToWritings")}
              </Typography>
            </Button>
          </Link>

          <Typography variant="h1" display="block">
            {title}
            {author ? (
              <span className="font-serif italic text-blue-500">
                {t("posts.author", { author })}
              </span>
            ) : null}
          </Typography>

          <div className="grid grid-cols-1 gap-16 sm:grid-cols-12 sm:gap-6">
            <div className="col-span-1 sm:col-span-3">
              <Typography variant="subtitle1">{createdAt}</Typography>
            </div>
            <article className="col-span-1 space-y-6 sm:col-span-9">
              <MDXRemote {...mdxSource} components={renderers} />
            </article>
          </div>

          <Link href="/writings" className="inline-block">
            <Button startIcon={<SvgIconBack size="small" />}>
              <Typography variant="body1" color="inherit">
                {t("posts.backToWritings")}
              </Typography>
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
}) => {
  const post = getPost(params?.slug);

  if (isNullOrUndefined(post)) {
    return {
      notFound: true,
    };
  }

  const mdxSource = await serialize(post.content);

  return {
    props: {
      mdxSource,
      title: post.title,
      author: post.author,
      label: post.label,
      createdAt: post.createdAt,
      messages: (await import("@/copy/en-EN.json")).default,
    },
  };
};

export default PostPage;
