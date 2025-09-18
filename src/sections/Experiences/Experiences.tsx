import { useTranslations } from "next-intl";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

const Experiences = () => {
  const t = useTranslations();

  return (
    <Section>
      <div className="grid col-span-12">
        <div className="col-span-3">
          <Typography variant="subtitle1">{t("experiences.title")}</Typography>
        </div>
        <div className="col-span-9 space-y-6"></div>
      </div>
    </Section>
  );
};

export default Experiences;
