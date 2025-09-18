import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => ({
  locale: "en-EN",
  messages: await import("@/copy/en-EN.json"),
}));
