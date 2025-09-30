import GithubCalendar, { type Activity } from "react-github-calendar";

import { THIRTY_SIX_WEEKS_IN_MS } from "@/utils/const";

import { Section } from "@/components/Section";

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
  const renderers = {
    data: (activity: ReadonlyArray<Activity>) => {
      const today = new Date().getTime();
      const thirtySixWeeksAgo = new Date(today - THIRTY_SIX_WEEKS_IN_MS);

      return activity.filter((day: Activity) => new Date(day.date) >= thirtySixWeeksAgo);
    },
  };

  return (
    <Section spacing="small">
      <div className="space-y-3">
        <GithubCalendar
          hideMonthLabels
          hideTotalCount
          hideColorLegend
          username="balajmarius"
          theme={theme}
          transformData={renderers.data}
        />
      </div>
    </Section>
  );
};

export default Commits;
