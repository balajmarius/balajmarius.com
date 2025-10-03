import fs from "fs";
import path from "path";
import matter from "gray-matter";
import groupBy from "lodash.groupby";
import { getYear } from "date-fns/getYear";

export type PostLabel = "Book" | "LLMs" | "Dev" | "TIL";

export type Post = {
  slug: string;
  title: string;
  author?: string;
  createdAt: Date;
  label: PostLabel;
};

const postsDir = path.join(process.cwd(), "src/content/posts");

const fetchPosts = () => {
  const fileNames = fs.readdirSync(postsDir);

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

export default fetchPosts;
