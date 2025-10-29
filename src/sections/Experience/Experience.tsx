import { useTranslations } from "next-intl";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

import { ExperienceListItem } from "@/sections/Experience";

const Experience = () => {
  const t = useTranslations();

  return (
    <Section>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Typography variant="subtitle1">{t("experience.title")}</Typography>
        </div>

        <div className="col-span-9 space-y-6">
          <ExperienceListItem
            title={t("experience.jobs.0.title")}
            role={t("experience.jobs.0.role")}
          />
          <ExperienceListItem
            title={t("experience.jobs.1.title")}
            role={t("experience.jobs.1.role")}
          />

          <ExperienceListItem
            title={t("experience.jobs.2.title")}
            role={t("experience.jobs.2.role")}
            duration={t("experience.jobs.2.duration")}
          />
          <ExperienceListItem
            title={t("experience.jobs.3.title")}
            role={t("experience.jobs.3.role")}
            duration={t("experience.jobs.3.duration")}
          />
          <ExperienceListItem
            title={t("experience.jobs.4.title")}
            role={t("experience.jobs.4.role")}
            duration={t("experience.jobs.4.duration")}
          />
        </div>
      </div>
    </Section>
  );
};

export default Experience;
