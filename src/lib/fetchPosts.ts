import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  createdAt: Date;
  author?: string;
  content: string;
};

export type Posts = Record<string, ReadonlyArray<Post>>;

const postsDir = path.join(process.cwd(), "src/content/posts");

const formatPosts = (): Posts => {
  return {};
};

const fetchPosts = (): Posts => {
  const fileNames = fs.readdirSync(postsDir);

  fileNames.map((fileName) => {
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const fileSlug = path.parse(fileName).name;

    const { data, content } = matter(fileContents);

    return {
      content,
      slug: fileSlug,
      title: data.title,
      createdAt: data.createdAt,
      author: data.author,
    };
  });

  return formatPosts();
};

export default fetchPosts;
