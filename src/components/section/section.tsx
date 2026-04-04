import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/helpers";

import type {
  SectionSpacing,
  SectionSpacingMapping,
} from "@/components/section";

export type SectionProps = {
  children: ReactNode;
  spacing?: SectionSpacing;
} & HTMLAttributes<HTMLDivElement>;

const sectionSpacingClassNames: SectionSpacingMapping = {
  small: "pt-24",
  default: "pt-48",
};

const Section = ({
  children,
  spacing = "default",
  className,
  ...props
}: SectionProps) => {
  return (
    <section
      className={cn(
        "max-w-2xl px-6 sm:px-12",
        sectionSpacingClassNames[spacing],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
