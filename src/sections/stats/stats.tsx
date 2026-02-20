"use client";

import { useTranslations } from "next-intl";
import { Fragment, type ReactNode } from "react";

import type { Workouts } from "@/lib/hevy";
import { links } from "@/utils/links";

import { Card, CardContent, CardFooter, CardListItem } from "@/components/card";
import { Chip } from "@/components/chip";
import { Divider } from "@/components/divider";
import { IconButton } from "@/components/icon-button";
import { Section } from "@/components/section";
import {
  SvgIconDumbell,
  SvgIconGlove,
  SvgIconHevy,
} from "@/components/svg-icon";
import { Typography } from "@/components/typography";

type StatsProps = {
  workouts: Workouts;
};

const Stats = ({ workouts }: StatsProps) => {
  const t = useTranslations();

  const sections = [
    {
      icon: <SvgIconDumbell size="small" />,
      title: t("stats.weights"),
      fields: [
        { label: t("stats.date"), value: workouts.weights?.createdAt },
        { label: t("stats.duration"), value: workouts.weights?.duration },
        { label: t("stats.volume"), value: workouts.weights?.volume },
      ],
    },
    {
      icon: <SvgIconGlove size="small" />,
      title: t("stats.boxing"),
      fields: [
        { label: t("stats.date"), value: workouts.boxing?.createdAt },
        { label: t("stats.duration"), value: workouts.boxing?.duration },
      ],
    },
  ] as const;

  return (
    <Section id="stats">
      <Card color="primary">
        <CardContent>
          <Typography variant="h2">
            {t("stats.latestTrainingSessions")}
          </Typography>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-12">
            {sections.map((section) => (
              <div key={section.title} className="space-y-3">
                <div className="flex items-center gap-1">
                  {section.icon}
                  <Typography variant="subtitle1">{section.title}</Typography>
                </div>
                <div className="flex gap-3">
                  {section.fields.map((field, i) => (
                    <Fragment key={field.label}>
                      {i > 0 && <Divider />}
                      <CardListItem label={field.label} value={field.value} />
                    </Fragment>
                  ))}
                </div>
              </div>
            ))}
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
