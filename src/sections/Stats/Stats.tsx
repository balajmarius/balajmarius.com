import { useTranslations } from "next-intl";
import { format } from "date-fns";

import { links } from "@/utils/links";

import { Card, CardContent, CardFooter, CardListItem } from "@/components/Card";
import { Typography } from "@/components/Typography";
import { Section } from "@/components/Section";
import { IconButton } from "@/components/IconButton";
import { Divider } from "@/components/Divider";

import {
  SvgIconHevy,
  SvgIconDumbell,
  SvgIconGlove,
} from "@/components/SvgIcon";

const Stats = () => {
  const t = useTranslations();

  return (
    <Section id="stats">
      <Card color="primary">
        <CardContent>
          <Typography variant="h2">
            {t("stats.latestTrainingSessions")}
          </Typography>

          <div className="flex gap-12">
            <div className="space-y-3">
              <div className="flex items-center gap-1">
                <SvgIconDumbell size="small" />
                <Typography variant="subtitle1">
                  {t("stats.weights")}
                </Typography>
              </div>

              <div className="flex gap-3">
                <CardListItem
                  label={t("stats.date")}
                  value={format(new Date("2025-01-12"), "MMM d")}
                />
                <Divider />
                <CardListItem label={t("stats.time")} value="52 min" />
                <Divider />
                <CardListItem label={t("stats.volume")} value="10.252 kg" />
                <Divider />
                <CardListItem label={t("stats.sets")} value="15" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-1">
                <SvgIconGlove size="small" />
                <Typography variant="subtitle1">{t("stats.boxing")}</Typography>
              </div>

              <div className="flex gap-3">
                <CardListItem
                  label={t("stats.date")}
                  value={format(new Date("2025-01-09"), "MMM d")}
                />
                <Divider />
                <CardListItem label={t("stats.time")} value="2:52 hrs" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <a href={links.hevy} target="_blank" rel="noopener noreferrer">
            <IconButton>
              <SvgIconHevy size="small" />
            </IconButton>
          </a>
        </CardFooter>
      </Card>
    </Section>
  );
};

export default Stats;
