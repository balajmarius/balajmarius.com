import { ReactNode, HTMLAttributes } from "react";

import { cn } from "@/utils/helpers";

import type {
  SectionSpacing,
  SectionSpacingMapping,
} from "@/components/Section";

export type SectionProps = {
  children: ReactNode;
  spacing?: SectionSpacing;
} & HTMLAttributes<HTMLDivElement>;

const sectionSpacingClassNames: SectionSpacingMapping = {
  default: "pt-48",
  small: "pt-24",
};

const Section = ({ children, spacing = "default", ...props }: SectionProps) => {
  return (
    <section
      className={cn(
        "max-w-2xl px-6 sm:px-12",
        sectionSpacingClassNames[spacing]
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
