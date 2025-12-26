import { ReactNode, HTMLAttributes } from "react";

import { cn } from "@/utils/helpers";

import type {
  SectionSpacing,
  SectionSpacingMapping,
  SectionSize,
  SectionSizeMapping,
} from "@/components/Section";

export type SectionProps = {
  children: ReactNode;
  spacing?: SectionSpacing;
  size?: SectionSize;
} & HTMLAttributes<HTMLDivElement>;

const sectionSizeClassNames: SectionSizeMapping = {
  medium: "max-w-2xl",
  large: "max-w-7xl",
};

const sectionSpacingClassNames: SectionSpacingMapping = {
  small: "pt-24",
  default: "pt-48",
};

const Section = ({
  children,
  spacing = "default",
  size = "medium",
  ...props
}: SectionProps) => {
  return (
    <section
      className={cn(
        "px-6 sm:px-12",
        sectionSizeClassNames[size],
        sectionSpacingClassNames[spacing]
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
