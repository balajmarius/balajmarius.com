"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import GithubCalendar, { type Props } from "react-github-calendar";

import { COMMITS_WEEKS_LIMIT, DAYS_IN_A_WEEK } from "@/utils/const";

import { accounts, links } from "@/utils/links";
import { cn, isNullOrUndefined } from "@/utils/helpers";

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
  const contentRef = useRef<HTMLDivElement>(null);

  const [className, setClassName] = useState<string | null>(null);
  const { calendarRef, pointerPosition, waves } = useCommitWaves();

  const handleScrollClassName = useCallback(() => {
    if (isNullOrUndefined(calendarRef.current)) {
      return;
    }

    const { scrollLeft, clientWidth, scrollWidth } = calendarRef.current;

    setClassName(
      cn(
        Boolean(scrollLeft) && "max-sm:before:opacity-100",
        scrollLeft + clientWidth < scrollWidth && "max-sm:after:opacity-100"
      )
    );
  }, [calendarRef]);

  useEffect(() => {
    if (
      isNullOrUndefined(calendarRef.current) ||
      isNullOrUndefined(contentRef.current)
    ) {
      return;
    }

    const observer = new ResizeObserver(handleScrollClassName);

    observer.observe(contentRef.current);
    observer.observe(calendarRef.current);

    return () => observer.disconnect();
  }, [calendarRef, handleScrollClassName]);

  const renderers: {
    data: Props["transformData"];
    block: Props["renderBlock"];
  } = {
    data: (days) => {
      return days.slice(-COMMITS_WEEKS_LIMIT * DAYS_IN_A_WEEK);
    },
    block: (block) => {
      return (
        <CommitsListItem
          block={block}
          pointerPosition={pointerPosition}
          waves={waves}
        />
      );
    },
  };

  return (
    <Section spacing="small">
      <div className="space-y-3">
        <div
          className={cn(
            "max-sm:relative max-sm:isolate sm:before:hidden sm:after:hidden",
            "before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-12",
            "before:bg-linear-to-r before:from-white before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 before:ease-in-out",
            "after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-12",
            "after:bg-linear-to-l after:from-white after:to-transparent after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out",
            className
          )}
        >
          <div
            ref={calendarRef}
            onScroll={handleScrollClassName}
            className="w-full max-w-full max-sm:overflow-x-auto max-sm:scrollbar-w-none sm:w-fit"
          >
            <div ref={contentRef} className="max-sm:w-max max-sm:pt-0.5">
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
          </div>
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
