import type { ReactNode, SVGAttributes } from "react";

import { cn } from "@/utils/helpers";

import type { SvgIconSize, SvgIconSizeMapping } from "@/components/svg-icon";

export type SvgIconProps = {
  children: ReactNode;
  size?: SvgIconSize;
  viewBox?: string;
  className?: SVGAttributes<SVGSVGElement>["className"];
} & SVGAttributes<SVGSVGElement>;

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
      className={cn(svgIconSizeClassNames[size], className)}
      {...props}
    >
      {children}
    </svg>
  );
};

export default SvgIcon;
