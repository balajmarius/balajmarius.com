import { useRef } from "react";
import { useTranslations } from "next-intl";
import GithubCalendar, { type Activity } from "react-github-calendar";

import { accounts, links } from "@/utils/links";

import { THIRTY_FIVE_WEEKS_IN_MS } from "@/utils/const";

import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import { SvgIconBranch } from "@/components/SvgIcon";

const theme = {
  dark: [
    "var(--color-blue-100)",
    "var(--color-blue-200)",
    "var(--color-blue-300)",
    "var(--color-blue-400)",
    "var(--color-blue-500)",
  ],
};

const Commits = () => {
  const t = useTranslations();
  const calendarRef = useRef<HTMLDivElement>(null);

  const renderers = {
    data: (activity: ReadonlyArray<Activity>) => {
      const today = new Date().getTime();
      const weeksInMsAgo = new Date(today - THIRTY_FIVE_WEEKS_IN_MS);

      return activity.filter(
        (day: Activity) => new Date(day.date) >= weeksInMsAgo
      );
    },
  };

  return (
    <Section spacing="small">
      <div className="space-y-3">
        <div ref={calendarRef}>
          <GithubCalendar
            hideTotalCount
            hideMonthLabels
            hideColorLegend
            theme={theme}
            username={accounts.githubUsername}
            transformData={renderers.data}
          />
        </div>

        <div className="flex items-start justify-end sm:justify-between sm:gap-3">
          <SvgIconBranch className="text-blue-500 hidden sm:block" />
          <Link href={links.github} rel="noopener noreferrer" target="_blank">
            {t("commits.viewOnGitHub")}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Commits;
