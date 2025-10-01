import { useTranslations } from "next-intl";

import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

import { WritingsListItem } from "@/sections/Writings";

const Writings = () => {
  const t = useTranslations();

  return (
    <Section>
      <div className="space-y-16">
        <Typography variant="subtitle1">{t("writings.title")}</Typography>

        <div className="space-y-6">
          <div className="border-t border-gray-100">
            <WritingsListItem />
            <WritingsListItem />
            <WritingsListItem />
          </div>

          <div className="flex justify-end">
            <Link href="/writings" target="_self">
              {t("writings.moreWritings")}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Writings;
