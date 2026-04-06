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

  // const linksByTag1 = await Promise.all(
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
          id: "6aff231f-b9df-4cc1-bf41-f08f73faff20",
          url: "https://www.amazon.com/Hundred-Page-Machine-Learning-Book-ebook/dp/B09Q15C9CQ?dib=eyJ2IjoiMSJ9.u6yLfs7jCvCCAnp7oDGI8qvWgHTJhtniXRkh35-e3gmH1AMvk8cqrsiQQU52Wye9oB9ltsW7g5JTvY0OuitsNuejBnXzbEdFDklfASNrZ87DY1M4lx3i-aYBwikD2aIVFZnM-zeGbpUXTUiNDoOlk7c4l2Wr1CxpouClL2gu910Rtta1t7mOsOM3Qo7ANfTz.ZyFqag58S9WLxZRnZeScwJwj3lM42y7Q7Gm6jgFvGJU&dib_tag=AUTHOR&psc=1&ref_=ast_author_dp_rw&th=1",
          title:
            "Amazon.com: The Hundred-Page Machine Learning Book (The Hundred-Page Books) eBook : Burkov, Andriy: Kindle Store",
          domain: "amazon.com",
          summary:
            "Amazon.com: The Hundred-Page Machine Learning Book (The Hundred-Page Books) eBook : Burkov, Andriy: Kindle Store",
          image_url: null,
          status: "created",
          created_at: "2026-04-04T11:29:58.689+00:00",
          updated_at: "2026-04-04T11:30:05.220205+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: null,
          discoverable_feed_url: null,
        },
        {
          id: "08aaac44-a850-4984-b5b1-c3b334d7471d",
          url: "https://x.com/leerob/status/2011810357942084085",
          title: "AI frameworks are getting complicated",
          domain: "x.com",
          summary: null,
          image_url: null,
          status: "created",
          created_at: "2026-03-23T17:27:21.192367+00:00",
          updated_at: "2026-03-23T17:27:22.697927+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: null,
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "@leerob",
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
      ],
    ],
    [
      "dev",
      [
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
          id: "f299c8ef-c6f2-40b8-afc1-bb7a4c5becd5",
          url: "https://dbreunig.com/2026/02/21/why-is-claude-an-electron-app.html",
          title: "Why is Claude an Electron App?",
          domain: "dbreunig.com",
          summary: "If code is free, why aren’t all apps native?",
          image_url: "/img/sf_beach_og.jpg",
          status: "created",
          created_at: "2026-02-26T09:15:18.719057+00:00",
          updated_at: "2026-03-06T01:55:51.269452+00:00",
          read_at: null,
          deleted_at: null,
          purged_at: null,
          source: "extension",
          hn_url: "https://news.ycombinator.com/item?id=47104973",
          file_type: null,
          file_mime_type: null,
          notion_page_id: null,
          author: "Drew Breunig",
          discoverable_feed_url: null,
        },
      ],
    ],
    [
      "design",
      [
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
      ],
    ],
    [
      "philosophy",
      [
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
      ],
    ],
  ];

  return Object.fromEntries(linksByTag);
};
