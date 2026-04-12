// import axios from "axios";

// import { SHIORI_API_URL } from "@/utils/const";

// type ShioriAPITagsResponse = {
//   tags: ReadonlyArray<{
//     id: string;
//     name: string;
//     position: number;
//   }>;
// };

type ShioriAPILinksResponse = {
  links: ReadonlyArray<{
    id: string;
    url: string;
    title: string;
    domain: string;
    summary: string | null;
    image_url: string | null;
    author: string | null;
    created_at: string;
  }>;
  total: number;
};

// type ShioriAPITag = ShioriAPITagsResponse["tags"][number];
type ShioriAPILink = ShioriAPILinksResponse["links"][number];

export type Reading = ShioriAPILink;
export type Readings = Record<string, ReadonlyArray<Reading>>;

// const instance = axios.create({
//   baseURL: SHIORI_API_URL,
//   headers: {
//     Authorization: `Bearer ${process.env.SHIORI_API_KEY}`,
//   },
// });

export const getReadings = async (): Promise<
  Record<string, ReadonlyArray<ShioriAPILink>>
> => {
  // const tagsResponse = await instance.get<ShioriAPITagsResponse>("/tags");

  // const linksByTag = await Promise.all(
  //   tagsResponse.data.tags.map(async (tag: ShioriAPITag) => {
  //     const response = await instance.get<ShioriAPILinksResponse>("/links", {
  //       params: { tag: tag.id },
  //     });
  //     return [tag.name, response.data.links] as const;
  //   })
  // );

  const linksByTag = [
    [
      "ai",
      [
        {
          id: "0d686a6b-eb8d-4f07-bb20-fb6ab5f445f5",
          url: "https://x.com/emilkowalski/status/2016136390178636051",
          title:
            "You might’ve seen this bug before where the hover state keeps flickering.  \n\nThe fix is to separate the trigger from the effect.",
          domain: "x.com",
          summary: null,
          image_url: null,
          status: "created",
          created_at: "2026-04-06T08:17:44.760066+00:00",
          updated_at: "2026-04-06T08:17:45.32617+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "@emilkowalski",
          discoverable_feed_url: null,
        },
        {
          id: "899d65d1-e325-44ae-b8e5-35a9d979e7b7",
          url: "https://www.goodreads.com/book/show/59794522-non-things",
          title: "Non-things: Upheaval in the Lifeworld",
          domain: "goodreads.com",
          summary: "We no longer inhabit earth and dwell under the sky: the…",
          image_url:
            "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1696925051i/183362913.jpg",
          status: "created",
          created_at: "2026-04-06T09:43:13.543881+00:00",
          updated_at: "2026-04-06T09:43:20.720452+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "Byung-Chul Han62 books5,202 followersFollowFollow",
          discoverable_feed_url: null,
        },
        {
          id: "92106fa7-3cbc-491d-9609-5ad72c85db89",
          url: "https://boristane.com/blog/the-software-development-lifecycle-is-dead",
          title: "The Software Development Lifecycle Is Dead",
          domain: "boristane.com",
          summary:
            "AI agents didn't make the SDLC faster. They killed it. All that's left is context.",
          image_url:
            "https://boristane.com/assets/blog/the-software-development-lifecycle-is-dead/og.png",
          status: "created",
          created_at: "2026-02-25T13:19:44.721095+00:00",
          updated_at: "2026-03-06T01:56:33.63731+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: "https://news.ycombinator.com/item?id=47103418",
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "Boris Tane",
          discoverable_feed_url: null,
        },
        {
          id: "86f0f598-d471-4a33-9683-bac75dbad709",
          url: "https://jakub.kr/work/using-ai-as-a-design-engineer",
          title: "Using AI as a design engineer",
          domain: "jakub.kr",
          summary: "How I use AI as a design engineer on a daily basis.",
          image_url:
            "https://jakub.kr/api/og?pageTitle=Using%20AI%20as%20a%20design%20engineer&category=Article",
          status: "created",
          created_at: "2026-03-23T17:21:50.084088+00:00",
          updated_at: "2026-03-23T17:21:53.754439+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: null,
          discoverable_feed_url: "https://jakub.kr/api/rss",
        },
        {
          id: "899d65d1-e325-44ae-b8e5-35a9d979e7b2",
          url: "https://www.goodreads.com/book/show/59794522-non-things",
          title: "Non-things: Upheaval in the Lifeworld",
          domain: "goodreads.com",
          summary: "We no longer inhabit earth and dwell under the sky: the…",
          image_url:
            "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1639948123i/58782897.jpg",
          status: "created",
          created_at: "2026-04-06T09:43:13.543881+00:00",
          updated_at: "2026-04-06T09:43:20.720452+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "Byung-Chul Han62 books5,202 followersFollowFollow",
          discoverable_feed_url: null,
        },
      ],
    ],
    [
      "dev",
      [
        {
          id: "0d686a6b-eb8d-4f07-bb20-fb6ab5f445f5",
          url: "https://x.com/emilkowalski/status/2016136390178636051",
          title:
            "You might’ve seen this bug before where the hover state keeps flickering.  \n\nThe fix is to separate the trigger from the effect.",
          domain: "x.com",
          summary: null,
          image_url: null,
          status: "created",
          created_at: "2026-04-06T08:17:44.760066+00:00",
          updated_at: "2026-04-06T08:17:45.32617+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "@emilkowalski",
          discoverable_feed_url: null,
        },
        {
          id: "899d65d1-e325-44ae-b8e5-35a9d979e7b7",
          url: "https://www.goodreads.com/book/show/59794522-non-things",
          title: "Non-things: Upheaval in the Lifeworld",
          domain: "goodreads.com",
          summary: "We no longer inhabit earth and dwell under the sky: the…",
          image_url:
            "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1696925051i/183362913.jpg",
          status: "created",
          created_at: "2026-04-06T09:43:13.543881+00:00",
          updated_at: "2026-04-06T09:43:20.720452+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "Byung-Chul Han62 books5,202 followersFollowFollow",
          discoverable_feed_url: null,
        },
        {
          id: "92106fa7-3cbc-491d-9609-5ad72c85db89",
          url: "https://boristane.com/blog/the-software-development-lifecycle-is-dead",
          title: "The Software Development Lifecycle Is Dead",
          domain: "boristane.com",
          summary:
            "AI agents didn't make the SDLC faster. They killed it. All that's left is context.",
          image_url:
            "https://boristane.com/assets/blog/the-software-development-lifecycle-is-dead/og.png",
          status: "created",
          created_at: "2026-02-25T13:19:44.721095+00:00",
          updated_at: "2026-03-06T01:56:33.63731+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: "https://news.ycombinator.com/item?id=47103418",
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "Boris Tane",
          discoverable_feed_url: null,
        },
        {
          id: "86f0f598-d471-4a33-9683-bac75dbad709",
          url: "https://jakub.kr/work/using-ai-as-a-design-engineer",
          title: "Using AI as a design engineer",
          domain: "jakub.kr",
          summary: "How I use AI as a design engineer on a daily basis.",
          image_url:
            "https://jakub.kr/api/og?pageTitle=Using%20AI%20as%20a%20design%20engineer&category=Article",
          status: "created",
          created_at: "2026-03-23T17:21:50.084088+00:00",
          updated_at: "2026-03-23T17:21:53.754439+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: null,
          discoverable_feed_url: "https://jakub.kr/api/rss",
        },
        {
          id: "899d65d1-e325-44ae-b8e5-35a9d979e7b2",
          url: "https://www.goodreads.com/book/show/59794522-non-things",
          title: "Non-things: Upheaval in the Lifeworld",
          domain: "goodreads.com",
          summary: "We no longer inhabit earth and dwell under the sky: the…",
          image_url:
            "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1639948123i/58782897.jpg",
          status: "created",
          created_at: "2026-04-06T09:43:13.543881+00:00",
          updated_at: "2026-04-06T09:43:20.720452+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "Byung-Chul Han62 books5,202 followersFollowFollow",
          discoverable_feed_url: null,
        },
      ],
    ],
    [
      "design",
      [
        {
          id: "0d686a6b-eb8d-4f07-bb20-fb6ab5f445f5",
          url: "https://x.com/emilkowalski/status/2016136390178636051",
          title:
            "You might’ve seen this bug before where the hover state keeps flickering.  \n\nThe fix is to separate the trigger from the effect.",
          domain: "x.com",
          summary: null,
          image_url: null,
          status: "created",
          created_at: "2026-04-06T08:17:44.760066+00:00",
          updated_at: "2026-04-06T08:17:45.32617+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "@emilkowalski",
          discoverable_feed_url: null,
        },
        {
          id: "899d65d1-e325-44ae-b8e5-35a9d979e7b7",
          url: "https://www.goodreads.com/book/show/59794522-non-things",
          title: "Non-things: Upheaval in the Lifeworld",
          domain: "goodreads.com",
          summary: "We no longer inhabit earth and dwell under the sky: the…",
          image_url:
            "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1696925051i/183362913.jpg",
          status: "created",
          created_at: "2026-04-06T09:43:13.543881+00:00",
          updated_at: "2026-04-06T09:43:20.720452+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "Byung-Chul Han62 books5,202 followersFollowFollow",
          discoverable_feed_url: null,
        },
        {
          id: "92106fa7-3cbc-491d-9609-5ad72c85db89",
          url: "https://boristane.com/blog/the-software-development-lifecycle-is-dead",
          title: "The Software Development Lifecycle Is Dead",
          domain: "boristane.com",
          summary:
            "AI agents didn't make the SDLC faster. They killed it. All that's left is context.",
          image_url:
            "https://boristane.com/assets/blog/the-software-development-lifecycle-is-dead/og.png",
          status: "created",
          created_at: "2026-02-25T13:19:44.721095+00:00",
          updated_at: "2026-03-06T01:56:33.63731+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: "https://news.ycombinator.com/item?id=47103418",
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "Boris Tane",
          discoverable_feed_url: null,
        },
        {
          id: "86f0f598-d471-4a33-9683-bac75dbad709",
          url: "https://jakub.kr/work/using-ai-as-a-design-engineer",
          title: "Using AI as a design engineer",
          domain: "jakub.kr",
          summary: "How I use AI as a design engineer on a daily basis.",
          image_url:
            "https://jakub.kr/api/og?pageTitle=Using%20AI%20as%20a%20design%20engineer&category=Article",
          status: "created",
          created_at: "2026-03-23T17:21:50.084088+00:00",
          updated_at: "2026-03-23T17:21:53.754439+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: null,
          discoverable_feed_url: "https://jakub.kr/api/rss",
        },
        {
          id: "899d65d1-e325-44ae-b8e5-35a9d979e7b2",
          url: "https://www.goodreads.com/book/show/59794522-non-things",
          title: "Non-things: Upheaval in the Lifeworld",
          domain: "goodreads.com",
          summary: "We no longer inhabit earth and dwell under the sky: the…",
          image_url:
            "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1639948123i/58782897.jpg",
          status: "created",
          created_at: "2026-04-06T09:43:13.543881+00:00",
          updated_at: "2026-04-06T09:43:20.720452+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "Byung-Chul Han62 books5,202 followersFollowFollow",
          discoverable_feed_url: null,
        },
      ],
    ],
    [
      "philosophy",
      [
        {
          id: "0d686a6b-eb8d-4f07-bb20-fb6ab5f445f5",
          url: "https://x.com/emilkowalski/status/2016136390178636051",
          title:
            "You might’ve seen this bug before where the hover state keeps flickering.  \n\nThe fix is to separate the trigger from the effect.",
          domain: "x.com",
          summary: null,
          image_url: null,
          status: "created",
          created_at: "2026-04-06T08:17:44.760066+00:00",
          updated_at: "2026-04-06T08:17:45.32617+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "@emilkowalski",
          discoverable_feed_url: null,
        },
        {
          id: "899d65d1-e325-44ae-b8e5-35a9d979e7b7",
          url: "https://www.goodreads.com/book/show/59794522-non-things",
          title: "Non-things: Upheaval in the Lifeworld",
          domain: "goodreads.com",
          summary: "We no longer inhabit earth and dwell under the sky: the…",
          image_url:
            "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1696925051i/183362913.jpg",
          status: "created",
          created_at: "2026-04-06T09:43:13.543881+00:00",
          updated_at: "2026-04-06T09:43:20.720452+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "Byung-Chul Han62 books5,202 followersFollowFollow",
          discoverable_feed_url: null,
        },
        {
          id: "92106fa7-3cbc-491d-9609-5ad72c85db89",
          url: "https://boristane.com/blog/the-software-development-lifecycle-is-dead",
          title: "The Software Development Lifecycle Is Dead",
          domain: "boristane.com",
          summary:
            "AI agents didn't make the SDLC faster. They killed it. All that's left is context.",
          image_url:
            "https://boristane.com/assets/blog/the-software-development-lifecycle-is-dead/og.png",
          status: "created",
          created_at: "2026-02-25T13:19:44.721095+00:00",
          updated_at: "2026-03-06T01:56:33.63731+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: "https://news.ycombinator.com/item?id=47103418",
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "Boris Tane",
          discoverable_feed_url: null,
        },
        {
          id: "86f0f598-d471-4a33-9683-bac75dbad709",
          url: "https://jakub.kr/work/using-ai-as-a-design-engineer",
          title: "Using AI as a design engineer",
          domain: "jakub.kr",
          summary: "How I use AI as a design engineer on a daily basis.",
          image_url:
            "https://jakub.kr/api/og?pageTitle=Using%20AI%20as%20a%20design%20engineer&category=Article",
          status: "created",
          created_at: "2026-03-23T17:21:50.084088+00:00",
          updated_at: "2026-03-23T17:21:53.754439+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: null,
          discoverable_feed_url: "https://jakub.kr/api/rss",
        },
        {
          id: "899d65d1-e325-44ae-b8e5-35a9d979e7b2",
          url: "https://www.goodreads.com/book/show/59794522-non-things",
          title: "Non-things: Upheaval in the Lifeworld",
          domain: "goodreads.com",
          summary: "We no longer inhabit earth and dwell under the sky: the…",
          image_url:
            "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1639948123i/58782897.jpg",
          status: "created",
          created_at: "2026-04-06T09:43:13.543881+00:00",
          updated_at: "2026-04-06T09:43:20.720452+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "Byung-Chul Han62 books5,202 followersFollowFollow",
          discoverable_feed_url: null,
        },
      ],
    ],
  ];

  return Object.fromEntries(linksByTag);
};
