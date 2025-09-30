import { useTranslations } from "next-intl";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

const Writings = () => {
  const t = useTranslations();

  return (
    <Section>
      <Typography variant="subtitle1">{t("writings.title")}</Typography>
    </Section>
  );
};

export default Writings;
