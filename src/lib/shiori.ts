import axios from "axios";

import { SHIORI_API_URL } from "@/utils/const";

type ShioriAPITagsResponse = {
  tags: ReadonlyArray<{
    id: string;
    name: string;
    position: number;
  }>;
};

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

export type Reading = ShioriAPILinksResponse["links"][number];

export type ReadingsByTag = Record<string, ReadonlyArray<Reading>>;

const instance = axios.create({
  baseURL: SHIORI_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.SHIORI_API_KEY}`,
  },
});

export const getReadings = async (): Promise<ReadingsByTag> => {
  const tagsResponse = await instance.get<ShioriAPITagsResponse>("/tags");

  const linksByTag = await Promise.all(
    tagsResponse.data.tags.map(async (tag) => {
      const response = await instance.get<ShioriAPILinksResponse>("/links", {
        params: { tag: tag.id },
      });
      return [tag.name, response.data.links] as const;
    })
  );

  return Object.fromEntries(linksByTag);
};
