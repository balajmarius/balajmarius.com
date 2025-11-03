import { ReactNode, HTMLAttributes } from "react";

import { cn } from "@/utils/helpers";

import type { SvgIconSize, SvgIconSizeMapping } from "@/components/SvgIcon";

export type SvgIconProps = {
  children: ReactNode;
  size?: SvgIconSize;
  className?: HTMLAttributes<SVGSVGElement>["className"];
} & HTMLAttributes<SVGSVGElement>;

const svgIconSizeClassNames: SvgIconSizeMapping = {
  inherit: "size-auto",
  small: "w-4 h-4",
  medium: "w-6 h-6",
  large: "w-8 h-8",
};

const SvgIcon = ({ children, className, size = "inherit" }: SvgIconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      className={cn(className, svgIconSizeClassNames[size])}
    >
      {children}
    </svg>
  );
};

export default SvgIcon;
