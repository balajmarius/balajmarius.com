import type { ReactNode } from "react";
import { useTranslations } from "next-intl";

import type { Workouts } from "@/lib/hevy";

import { links } from "@/utils/links";

import {
  SvgIconHevy,
  SvgIconDumbell,
  SvgIconGlove,
} from "@/components/SvgIcon";

import { Chip } from "@/components/Chip";
import { Divider } from "@/components/Divider";
import { Card, CardContent, CardFooter, CardListItem } from "@/components/Card";
import { Section } from "@/components/Section";
import { IconButton } from "@/components/IconButton";
import { Typography } from "@/components/Typography";

type StatsProps = {
  workouts: Workouts;
};

const Stats = ({ workouts }: StatsProps) => {
  const t = useTranslations();

  return (
    <Section id="stats">
      <Card color="primary">
        <CardContent>
          <Typography variant="h2">
            {t("stats.latestTrainingSessions")}
          </Typography>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-12">
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
                  value={workouts.weights?.createdAt}
                />
                <Divider />
                <CardListItem
                  label={t("stats.duration")}
                  value={workouts.weights?.duration}
                />
                <Divider />
                <CardListItem
                  label={t("stats.volume")}
                  value={workouts.weights?.volume}
                />
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
                  value={workouts.boxing?.createdAt}
                />
                <Divider />
                <CardListItem
                  label={t("stats.duration")}
                  value={workouts.boxing?.duration}
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <a href={links.hevy} target="_blank" rel="noopener noreferrer" aria-label="Hevy">
            <IconButton>
              <SvgIconHevy size="small" />
            </IconButton>
          </a>

          <Chip color="default">
            <Typography variant="body2">
              {t.rich("stats.workouts", {
                count: workouts.count,
                serif: (chunks: ReactNode) => (
                  <span className="font-serif italic">{chunks}</span>
                ),
              })}
            </Typography>
          </Chip>
        </CardFooter>
      </Card>
    </Section>
  );
};

export default Stats;
