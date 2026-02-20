import type { HTMLAttributes, ReactNode } from "react";
import type { SvgIconSize, SvgIconSizeMapping } from "@/components/svg-icon";
import { cn } from "@/utils/helpers";

export type SvgIconProps = {
  children: ReactNode;
  size?: SvgIconSize;
  viewBox?: string;
  className?: HTMLAttributes<SVGSVGElement>["className"];
} & HTMLAttributes<SVGSVGElement>;

const svgIconSizeClassNames: SvgIconSizeMapping = {
  inherit: "size-auto",
  small: "w-4 h-4",
  medium: "w-6 h-6",
  large: "w-8 h-8",
};

const SvgIcon = ({
  children,
  className,
  size = "inherit",
  viewBox = "0 0 16 16",
}: SvgIconProps) => {
  return (
    <svg
      viewBox={viewBox}
      fill="currentColor"
      className={cn(className, svgIconSizeClassNames[size])}
    >
      {children}
    </svg>
  );
};

export default SvgIcon;
