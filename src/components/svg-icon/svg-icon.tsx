import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/helpers";

import type { SvgIconSize, SvgIconSizeMapping } from "@/components/svg-icon";

export type SvgIconProps = {
  children: ReactNode;
  size?: SvgIconSize;
  viewBox?: string;
  className?: HTMLAttributes<SVGSVGElement>["className"];
} & HTMLAttributes<SVGSVGElement>;

const svgIconSizeClassNames: SvgIconSizeMapping = {
  inherit: "size-auto",
  small: "size-4",
  medium: "size-6",
  large: "size-8",
};

const SvgIcon = ({
  children,
  className,
  size = "inherit",
  viewBox = "0 0 16 16",
  ...props
}: SvgIconProps) => {
  return (
    <svg
      viewBox={viewBox}
      fill="currentColor"
      className={cn(className, svgIconSizeClassNames[size])}
      {...props}
    >
      {children}
    </svg>
  );
};

export default SvgIcon;
