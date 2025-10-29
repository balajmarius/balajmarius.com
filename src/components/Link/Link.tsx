import { ReactNode, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import type { LinkVariant, LinkVariantMapping } from "@/components/Link";
import { Typography } from "@/components/Typography";
import { SvgIconArrow } from "@/components/SvgIcon";

export type LinkProps = {
  href: string;
  children: ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
  variant?: LinkVariant;
} & HTMLAttributes<HTMLAnchorElement>;

const linkSvgIconVariantClassNames: LinkVariantMapping = {
  inherit: "text-inherit",
  default: "text-blue-500",
};

const linkTypographyVariantClassNames: LinkVariantMapping = {
  inherit: "group-hover:text-inherit",
  default: "transition-colors group-hover:text-blue-500",
};

const Link = ({
  children,
  href,
  target = "_self",
  variant = "default",
  ...props
}: LinkProps) => {
  return (
    <a
      href={href}
      target={target}
      className="group flex items-center gap-1"
      {...props}
    >
      <Typography
        variant="body1"
        color="inherit"
        className={cn(
          "whitespace-nowrap",
          linkTypographyVariantClassNames[variant]
        )}
      >
        {children}
      </Typography>

      <SvgIconArrow
        size="small"
        className={cn(
          "transition-transform group-hover:-translate-y-1",
          linkSvgIconVariantClassNames[variant]
        )}
      />
    </a>
  );
};

export default Link;
