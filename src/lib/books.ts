// ABOUTME: Loads and types bookshelf data from the JSON file.
// ABOUTME: Provides typed access to the book collection for static generation.

export type Book = {
  id: string;
  title: string;
  author?: string;
  src: string;
  color: string;
  backgroundColor: string;
  size: number;
  paddingLeft: number;
  paddingRight: number;
  coverWidth: number;
  coverHeight: number;
};

export const getBooks = async () => {
  return (await import("@/data/books.json")).default as Book[];
};
