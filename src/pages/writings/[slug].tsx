import Head from "next/head";
import Link from "next/link";
import type { ComponentProps } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import { getPost, getPostSlugs } from "@/lib/posts";

import { SvgIconBack } from "@/components/SvgIcon";

import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

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
      <a className="border-b text-blue-500 hover:text-blue-400" {...props} />
    ),
    h2: (props: ComponentProps<"h2">) => (
      <h2 className="text-xl font-medium" {...props} />
    ),
    h3: (props: ComponentProps<"h3">) => (
      <h3 className="font-medium" {...props} />
    ),
    em: (props: ComponentProps<"em">) => (
      <em className="italic font-serif" {...props} />
    ),
    code: (props: ComponentProps<"code">) => (
      <code className="text-blue-500 font-roboto-mono" {...props} />
    ),
    pre: (props: ComponentProps<"pre">) => (
      <pre className="rounded-lg bg-gray-200 px-3 py-3" {...props} />
    ),
    ul: (props: ComponentProps<"ul">) => (
      <ul
        className="list-disc space-y-3 px-4 marker:text-blue-500"
        {...props}
      />
    ),
    ol: (props: ComponentProps<"ol">) => (
      <ol
        className="list-decimal space-y-3 px-4 marker:text-blue-500 marker:italic marker:font-serif"
        {...props}
      />
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
            {title}{" "}
            <span className="text-blue-500 font-serif italic">{author}</span>
          </Typography>

          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <Typography variant="subtitle1">{createdAt}</Typography>
            </div>
            <div className="col-span-9">
              <article className="space-y-6">
                <MDXRemote {...mdxSource} components={renderers} />
              </article>
            </div>
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
  const post = getPost(params?.slug as string);
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
