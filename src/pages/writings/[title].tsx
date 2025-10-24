import fs from "fs";
import path from "path";
import Head from "next/head";
import { useTranslations } from "next-intl";
import matter from "gray-matter";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import { AppBar } from "@/components/AppBar";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

type WritingProps = {
  frontmatter: {
    title: string;
    author?: string;
    createdAt: string;
    label: string;
  };
  mdxSource: MDXRemoteSerializeResult;
};

const Writing = ({ frontmatter, mdxSource }: WritingProps) => {
  const t = useTranslations();

  return (
    <>
      <Head>
        <title>{frontmatter.title} - {t("metadata.title")}</title>
      </Head>

      <AppBar />

      <div className="pb-48">
        <Section>
          <div className="space-y-6">
            <div>
              <Typography variant="h1">{frontmatter.title}</Typography>
              {frontmatter.author && (
                <Typography variant="subtitle1">{frontmatter.author}</Typography>
              )}
            </div>
            
            <div className="prose">
              <MDXRemote {...mdxSource} />
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const postsDir = path.join(process.cwd(), "src/content/posts");
  const fileNames = fs.readdirSync(postsDir);

  const paths = fileNames.map((fileName) => ({
    params: { title: path.parse(fileName).name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: { title: string } }) => {
  const postsDir = path.join(process.cwd(), "src/content/posts");
  const filePath = path.join(postsDir, `${params.title}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter: {
        title: data.title,
        author: data.author || null,
        createdAt: data.createdAt.toISOString(),
        label: data.label,
      },
      mdxSource,
      messages: (await import("@/copy/en-EN.json")).default,
    },
  };
};

export default Writing;
