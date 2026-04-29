export type Reading = {
  id: string;
  url: string;
  title: string;
  domain: string;
  summary: string | null;
  image_url: string | null;
  author: string | null;
  created_at: string;
};

export type Readings = Record<string, ReadonlyArray<Reading>>;

const mockReadings = {
  Videos: [
    {
      id: "video-1",
      url: "https://www.youtube.com/watch?v=PUv66718DII",
      title: "Inventing on Principle",
      domain: "youtube.com",
      summary:
        "Bret Victor on immediate feedback, creative tools, and seeing ideas while you build them.",
      image_url: null,
      author: "Bret Victor",
      created_at: "2012-10-09T00:00:00.000Z",
    },
    {
      id: "video-2",
      url: "https://www.youtube.com/watch?v=SxdOUGdseq4",
      title: "Simple Made Easy",
      domain: "youtube.com",
      summary:
        "Rich Hickey draws a clean line between simplicity and familiarity, and why software gets worse when we confuse them.",
      image_url: null,
      author: "Rich Hickey",
      created_at: "2011-04-12T00:00:00.000Z",
    },
    {
      id: "video-3",
      url: "https://www.youtube.com/watch?v=WFJ_kM8AztQ",
      title: "Growing a Language",
      domain: "youtube.com",
      summary:
        "Guy Steele explores how programming languages evolve and why expressive tools change the way we think.",
      image_url: null,
      author: "Guy Steele",
      created_at: "2014-07-09T00:00:00.000Z",
    },
  ],
  Articles: [
    {
      id: "article-1",
      url: "https://paulgraham.com/greatwork.html",
      title: "How to Do Great Work",
      domain: "paulgraham.com",
      summary:
        "A practical essay on curiosity, taste, and sustained attention as the foundation of meaningful work.",
      image_url: null,
      author: "Paul Graham",
      created_at: "2023-07-01T00:00:00.000Z",
    },
    {
      id: "article-2",
      url: "https://writings.stephenwolfram.com/2017/11/what-is-a-thing/",
      title: "What Is a Thing?",
      domain: "writings.stephenwolfram.com",
      summary:
        "A dense but rewarding piece on abstraction, identity, and how we carve concepts out of continuous reality.",
      image_url: null,
      author: "Stephen Wolfram",
      created_at: "2017-11-09T00:00:00.000Z",
    },
    {
      id: "article-3",
      url: "https://www.robinsloan.com/notes/home-cooked-app/",
      title: "An App Can Be a Home-Cooked Meal",
      domain: "robinsloan.com",
      summary:
        "Robin Sloan argues for small, personal software built with care instead of software optimized only for scale.",
      image_url: null,
      author: "Robin Sloan",
      created_at: "2024-02-19T00:00:00.000Z",
    },
  ],
  Notes: [
    {
      id: "note-1",
      url: "https://x.com/shreyas/status/1610334145501394944",
      title:
        "The internet rewards strong opinions, but the best builders keep their mind updateable.",
      domain: "x.com",
      summary: null,
      image_url: null,
      author: "shreyas",
      created_at: "2023-01-03T00:00:00.000Z",
    },
    {
      id: "note-2",
      url: "https://bsky.app/profile/danluu.com/post/3l4kdfph7qs2r",
      title:
        "A useful taste test for tooling: does it make the common path calmer or just more configurable?",
      domain: "bsky.app",
      summary: null,
      image_url: null,
      author: "Dan Luu",
      created_at: "2024-11-10T00:00:00.000Z",
    },
    {
      id: "note-3",
      url: "https://x.com/sama/status/1671606245498857473",
      title:
        "Small groups with conviction and unusually fast feedback loops still beat heavyweight planning.",
      domain: "x.com",
      summary: null,
      image_url: null,
      author: "sama",
      created_at: "2023-06-21T00:00:00.000Z",
    },
  ],
} satisfies Readings;

export const getReadings = async (): Promise<Readings> => {
  return mockReadings;
};
