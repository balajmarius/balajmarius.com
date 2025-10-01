import { ReactNode, HTMLAttributes } from "react";

import { Typography } from "@/components/Typography";
import { SvgIconArrow } from "@/components/SvgIcon";

export type LinkProps = {
  href: string;
  children: ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
} & HTMLAttributes<HTMLAnchorElement>;

const Link = ({ children, href, target = "_self", ...props }: LinkProps) => {
  return (
    <a href={href} target={target} className="flex items-center gap-1" {...props}>
      <Typography variant="body1" className="whitespace-nowrap">
        {children}
      </Typography>
      <SvgIconArrow size="small" className="text-blue-500" />
    </a>
  );
};

export default Link;
