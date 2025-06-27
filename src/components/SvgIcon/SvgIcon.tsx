import { ReactNode, HTMLAttributes } from "react";

export type SvgIconProps = {
  children: ReactNode;
  className?: HTMLAttributes<SVGSVGElement>["className"];
} & HTMLAttributes<SVGSVGElement>;

const SvgIcon = ({ children, className }: SvgIconProps) => {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      {children}
    </svg>
  );
};

export default SvgIcon;
