// ABOUTME: Loads and types bookshelf data from the JSON file.
// ABOUTME: Provides typed access to the book collection for static generation.

export type Book = {
  id: number;
  title: string;
};

export const getBooks = async () => {
  return (await import("@/data/books.json")).default as Book[];
};
