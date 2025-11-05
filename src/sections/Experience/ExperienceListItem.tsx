import { useTranslations } from "next-intl";

import { SvgIconDot } from "@/components/SvgIcon";

import { Chip } from "@/components/Chip";
import { Typography } from "@/components/Typography";

export type ExperienceListItemProps = {
  title: string;
  role: string;
  duration?: string;
};

const ExperienceListItem = ({
  title,
  role,
  duration,
}: ExperienceListItemProps) => {
  const t = useTranslations();

  return (
    <div className="space-y-1">
      <Typography variant="body1" fontWeight="medium">
        {title}
      </Typography>

      <div className="flex flex-row items-center gap-3">
        <Typography variant="body1">{role}</Typography>

        <div className="flex-grow border-t border-gray-100" />

        {duration ? (
          <Chip variant="outlined">{duration}</Chip>
        ) : (
          <div className="flex items-center gap-1">
            <SvgIconDot size="small" className="text-blue-500" />
            <Typography variant="body2">{t("experience.today")}</Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceListItem;
