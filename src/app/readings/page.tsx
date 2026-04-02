import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("readings.title"),
  };
};

const ReadingsPage = async () => {
  return null;
};

export default ReadingsPage;
