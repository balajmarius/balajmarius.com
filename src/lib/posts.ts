import fs from "node:fs";
import path from "node:path";
import groupBy from "lodash.groupby";
import matter from "gray-matter";
import { getYear } from "date-fns/getYear";

import { isNullOrUndefined } from "@/utils/helpers";

export type PostLabel = "Book" | "LLMs" | "Dev" | "TIL";

export type Post = {
  slug: string;
  title: string;
  author?: string;
  createdAt: Date;
  label: PostLabel;
};

const postsDir = path.join(process.cwd(), "src/content/posts");

const getPosts = () => {
  const fileNames = fs
    .readdirSync(postsDir)
    .filter((fileName) => fileName.endsWith(".md"));

  const posts = fileNames.map((fileName) => {
    const fileSlug = path.parse(fileName).name;
    const filePath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const {
      data: { title, createdAt, author, label },
    } = matter(fileContents);

    return {
      title,
      createdAt,
      author,
      label,
      slug: fileSlug,
    };
  });

  return groupBy<Post>(posts, (post) => getYear(post.createdAt));
};

export const getPostSlugs = () => {
  const fileNames = fs
    .readdirSync(postsDir)
    .filter((fileName) => fileName.endsWith(".md"));
  const fileSlugs = fileNames.map((fileName) => path.parse(fileName).name);

  return fileSlugs;
};

export const getPost = (slug?: string | string[]) => {
  if (isNullOrUndefined(slug)) {
    return null;
  }

  try {
    const filePath = path.join(postsDir, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const {
      data: { title, createdAt, author, label },
      content,
    } = matter(fileContents);

    return {
      title,
      createdAt,
      author,
      label,
      slug,
      content,
    };
  } catch {
    return null;
  }
};

export default getPosts;
