import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { format } from "date-fns";

import { links } from "@/utils/links";

import { Chip } from "@/components/Chip";
import { Card, CardContent, CardFooter, CardListItem } from "@/components/Card";
import { Section } from "@/components/Section";
import { IconButton } from "@/components/IconButton";
import { Typography } from "@/components/Typography";
import { Divider } from "@/components/Divider";

import {
  SvgIconHevy,
  SvgIconDumbell,
  SvgIconGlove,
} from "@/components/SvgIcon";

type Workout = {
  time: string;
  createdAt: string;
  volume: number;
};

type StatsProps = {
  workoutsCount: number;
  workout: Workout;
};

const Stats = ({ workoutsCount, workout }: StatsProps) => {
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
                  value={format(new Date(workout.createdAt), "MMM d")}
                />
                <Divider />
                <CardListItem label={t("stats.time")} value={workout.time} />
                <Divider />
                <CardListItem
                  label={t("stats.volume")}
                  value={`${workout.volume.toLocaleString()} kg`}
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

          <Chip color="default">
            <Typography variant="body2">
              {t.rich("stats.workouts", {
                count: workoutsCount,
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
