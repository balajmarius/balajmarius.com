import { ReactNode, HTMLAttributes } from "react";

import { Typography } from "@/components/Typography";
import { SvgIconArrow } from "@/components/SvgIcon";
import type { LinkVariant, LinkVariantMapping } from "@/components/Link";

export type LinkProps = {
  href: string;
  children: ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
  variant?: LinkVariant;
} & HTMLAttributes<HTMLAnchorElement>;

const linkVariantClassNames: LinkVariantMapping = {
  default: "text-blue-500",
  inherit: "text-inherit",
};

const Link = ({ children, href, target = "_self", variant = "default", ...props }: LinkProps) => {
  return (
    <a href={href} target={target} className="flex items-center gap-1" {...props}>
      <Typography variant="body1" className="whitespace-nowrap">
        {children}
      </Typography>
      <SvgIconArrow size="small" className={linkVariantClassNames[variant]} />
    </a>
  );
};

export default Link;
