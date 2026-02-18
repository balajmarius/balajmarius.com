import type { HTMLAttributes, ReactNode } from "react";
import type {
	SectionSpacing,
	SectionSpacingMapping,
} from "@/components/Section";
import { cn } from "@/utils/helpers";

export type SectionProps = {
	children: ReactNode;
	spacing?: SectionSpacing;
} & HTMLAttributes<HTMLDivElement>;

const sectionSpacingClassNames: SectionSpacingMapping = {
	small: "pt-24",
	default: "pt-48",
};

const Section = ({ children, spacing = "default", ...props }: SectionProps) => {
	return (
		<section
			className={cn(
				"max-w-2xl px-6 sm:px-12",
				sectionSpacingClassNames[spacing],
			)}
			{...props}
		>
			{children}
		</section>
	);
};

export default Section;
