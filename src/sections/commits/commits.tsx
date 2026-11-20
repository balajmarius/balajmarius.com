"use client";

import { useTranslations } from "next-intl";
import GithubCalendar, { type Props } from "react-github-calendar";

import { COMMIT_WEEKS_LIMIT, DAYS_IN_A_WEEK } from "@/utils/const";
import { accounts, links } from "@/utils/links";

import { useCommitWaves } from "@/hooks/use-commit-waves";

import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { CommitsListItem } from "@/sections/commits";
import { SvgIconBranch } from "@/components/svg-icon";

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

  const { calendarRef, pointer, waves } = useCommitWaves();

  const renderers: {
    data: Props["transformData"];
    block: Props["renderBlock"];
  } = {
    data: (days) => {
      return days.slice(-COMMIT_WEEKS_LIMIT * DAYS_IN_A_WEEK);
    },
    block: (block) => {
      return <CommitsListItem block={block} pointer={pointer} waves={waves} />;
    },
  };

  return (
    <Section spacing="small">
      <div className="space-y-3">
        <div ref={calendarRef} className="w-fit max-w-full">
          <GithubCalendar
            hideTotalCount
            hideMonthLabels
            hideColorLegend
            theme={theme}
            username={accounts.githubUsername}
            transformData={renderers.data}
            renderBlock={renderers.block}
          />
        </div>

        <div className="flex items-start justify-end sm:justify-between sm:gap-3">
          <SvgIconBranch className="text-blue-500 max-sm:hidden" />
          <Link href={links.github} rel="noopener noreferrer" target="_blank">
            {t("commits.viewOnGitHub")}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Commits;
