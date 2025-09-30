import { ReactNode, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import type { SectionSpacing, SectionSpacingMapping } from "@/components/Section";

export type SectionProps = {
  children: ReactNode;
  spacing?: SectionSpacing;
} & HTMLAttributes<HTMLDivElement>;

const defaultSectionSpacingClassNames: SectionSpacingMapping = {
  default: "pt-48",
  small: "pt-24",
};

const Section = ({ children, spacing = "default", ...props }: SectionProps) => {
  return (
    <section className={twMerge("max-w-2xl px-12", defaultSectionSpacingClassNames[spacing])} {...props}>
      {children}
    </section>
  );
};

export default Section;
