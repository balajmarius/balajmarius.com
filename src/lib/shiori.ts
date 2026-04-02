import axios from "axios";

import { SHIORI_API_URL } from "@/utils/const";

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

export type Reading = {
  id: string;
  url: string;
  title: string;
  domain: string;
  summary: string | null;
  imageUrl: string | null;
  author: string | null;
  createdAt: string;
};

const instance = axios.create({
  baseURL: SHIORI_API_URL,
  headers: {
    Authorization: process.env.SHIORI_API_KEY,
  },
});

export const getReadings = async () => {
  const response = await instance.get<ShioriAPILinksResponse>("/links");

  return response.data.links.map((link) => ({
    id: link.id,
    url: link.url,
    title: link.title,
    domain: link.domain,
    summary: link.summary,
    imageUrl: link.image_url,
    author: link.author,
    createdAt: link.created_at,
  }));
};
