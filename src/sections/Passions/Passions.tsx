import { useTranslations } from "next-intl";

import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

const Passions = () => {
  const t = useTranslations();

  return (
    <Section className="pb-48">
      <div className="space-y-16">
        <Typography variant="subtitle1">{t("passions.title")}</Typography>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12">
            <div className="bg-blue-100 size-full h-36" />
          </div>
          <div className="col-span-6">
            <div className="bg-blue-100 size-full h-36" />
          </div>
          <div className="col-span-6">
            <div className="bg-blue-100 size-full h-36" />
          </div>
          <div className="col-span-12">
            <div className="bg-blue-100 size-full h-36" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Passions;
