import { useTranslations } from "next-intl";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

import { ExperienceListItem } from "@/sections/Experience";

const Experience = () => {
  const t = useTranslations();

  const jobs = [
    {
      title: t("experience.jobs.0.title"),
      role: t("experience.jobs.0.role"),
    },
    {
      title: t("experience.jobs.1.title"),
      role: t("experience.jobs.1.role"),
    },
    {
      title: t("experience.jobs.2.title"),
      role: t("experience.jobs.2.role"),
      duration: t("experience.jobs.2.duration"),
    },
    {
      title: t("experience.jobs.3.title"),
      role: t("experience.jobs.3.role"),
      duration: t("experience.jobs.3.duration"),
    },
    {
      title: t("experience.jobs.4.title"),
      role: t("experience.jobs.4.role"),
      duration: t("experience.jobs.4.duration"),
    },
  ];

  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-6">
        <div className="col-span-1 md:col-span-3">
          <Typography variant="subtitle1">{t("experience.title")}</Typography>
        </div>

        <div className="col-span-1 md:col-span-9 space-y-6">
          {jobs.map((job, index) => (
            <ExperienceListItem
              key={index}
              title={job.title}
              role={job.role}
              duration={job?.duration}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
