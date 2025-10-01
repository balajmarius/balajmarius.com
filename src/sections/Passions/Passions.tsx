import { useTranslations } from "next-intl";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

const Passions = () => {
  const t = useTranslations();

  return (
    <Section>
      <Typography variant="subtitle1">{t("passions.title")}</Typography>
    </Section>
  );
};

export default Passions;
