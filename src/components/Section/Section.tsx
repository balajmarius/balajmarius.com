import { ReactNode, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import type { SectionSpacing, SectionSpacingMapping } from "@/components/Section";

export type SectionProps = {
  children: ReactNode;
  spacing?: SectionSpacing;
} & HTMLAttributes<HTMLDivElement>;

const sectionSpacingClassNames: SectionSpacingMapping = {
  default: "pt-48",
  small: "pt-24",
};

const Section = ({ children, spacing = "default", className, ...props }: SectionProps) => {
  return (
    <section className={twMerge("max-w-2xl px-12", className, sectionSpacingClassNames[spacing])} {...props}>
      {children}
    </section>
  );
};

export default Section;
