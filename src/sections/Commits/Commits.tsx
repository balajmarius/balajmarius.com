import GithubCalendar, { type Activity } from "react-github-calendar";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "usehooks-ts";

import { accounts, links } from "@/utils/links";

import { THIRTY_FIVE_WEEKS_IN_MS, NINE_TEEN_WEEKS_IN_MS } from "@/utils/const";

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
  const sm = useMediaQuery("(min-width: 640px)");

  const renderers = {
    data: (activity: ReadonlyArray<Activity>) => {
      const today = new Date().getTime();
      const weeksInMs = sm ? THIRTY_FIVE_WEEKS_IN_MS : NINE_TEEN_WEEKS_IN_MS;
      const weeksInMsAgo = new Date(today - weeksInMs);

      return activity.filter(
        (day: Activity) => new Date(day.date) >= weeksInMsAgo
      );
    },
  };

  return (
    <Section spacing="small">
      <div className="space-y-3">
        <GithubCalendar
          hideTotalCount
          hideMonthLabels
          hideColorLegend
          theme={theme}
          username={accounts.githubUsername}
          transformData={renderers.data}
        />

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
