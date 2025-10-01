import GithubCalendar, { type Activity } from "react-github-calendar";
import { useTranslations } from "next-intl";

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

  const renderers = {
    data: (activity: ReadonlyArray<Activity>) => {
      const today = new Date().getTime();
      const thirtySixWeeksAgo = new Date(today - THIRTY_FIVE_WEEKS_IN_MS);

      return activity.filter((day: Activity) => new Date(day.date) >= thirtySixWeeksAgo);
    },
  };

  return (
    <Section spacing="small">
      <div className="space-y-3">
        <GithubCalendar
          hideTotalCount
          hideMonthLabels
          hideColorLegend
          username="balajmarius"
          theme={theme}
          transformData={renderers.data}
        />

        <div className="flex items-start justify-between gap-x-3">
          <SvgIconBranch className="text-blue-500" />
          <Link href="https://github.com/balajmarius" rel="noopener noreferrer" target="_blank">
            {t("commits.viewOnGitHub")}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Commits;
