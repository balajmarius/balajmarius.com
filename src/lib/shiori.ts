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

type ShioriAPITag = ShioriAPITagsResponse["tags"][number];
type ShioriAPILink = ShioriAPILinksResponse["links"][number];

export type Reading = ShioriAPILink;

export type ReadingsByTag = Record<string, ReadonlyArray<Reading>>;

const instance = axios.create({
  baseURL: SHIORI_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.SHIORI_API_KEY}`,
  },
});

const getLinksByTag = async (tag: ShioriAPITag) => {
  const response = await instance.get<ShioriAPILinksResponse>("/links", {
    params: { tag: tag.id },
  });

  return [tag.name, response.data.links] as const;
};

export const getLinks = async (): Promise<ReadingsByTag> => {
  const tagsResponse = await instance.get<ShioriAPITagsResponse>("/tags");
  const linksByTag = await Promise.all(
    tagsResponse.data.tags.map(getLinksByTag)
  );

  return Object.fromEntries(linksByTag);
};
