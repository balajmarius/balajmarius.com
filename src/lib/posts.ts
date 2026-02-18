import fs from "node:fs";
import path from "node:path";
import { compareDesc } from "date-fns/compareDesc";
import { getYear } from "date-fns/getYear";
import matter from "gray-matter";
import groupBy from "lodash.groupby";

import { isNullOrUndefined } from "@/utils/helpers";

export type Post = {
	slug: string;
	title: string;
	author?: string;
	createdAt: Date;
	label: "Book" | "LLMs" | "Dev" | "TIL";
};

const postsDir = path.join(process.cwd(), "src/content/posts");

export const getPosts = () => {
	const fileNames = fs
		.readdirSync(postsDir)
		.filter((fileName) => fileName.endsWith(".md"));

	const posts = fileNames
		.map((fileName) => {
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
		})
		.sort((post1, post2) => compareDesc(post1.createdAt, post2.createdAt));

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
		return;
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
	} catch {}
};
