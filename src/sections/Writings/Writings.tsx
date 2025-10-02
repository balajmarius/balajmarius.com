import { useTranslations } from "next-intl";

import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import { Typography } from "@/components/Typography";

const Writings = () => {
  const t = useTranslations();

  return (
    <Section>
      <div className="space-y-16">
        <Typography variant="subtitle1">{t("writings.title")}</Typography>

        <div className="space-y-6">
          <div className="border-b border-gray-100"></div>

          <div className="flex justify-end">
            <Link href="/" target="_self">
              {t("writings.moreWritings")}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Writings;
