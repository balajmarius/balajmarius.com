import React, { type HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/helpers";

import type {
  TypographyFontWeight,
  TypographyFontWeightMapping,
  TypographyVariant,
  TypographyVariantMapping,
  TypographyColor,
  TypographyColorMapping,
  TypographyDisplay,
  TypographyDisplayMapping,
} from "@/components/Typography";

export type TypographyProps = {
  children: ReactNode;
  color?: TypographyColor;
  variant?: TypographyVariant;
  display?: TypographyDisplay;
  fontWeight?: TypographyFontWeight;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "className">;

const typographyVariantMapping: TypographyVariantMapping = {
  h1: "h1",
  h2: "h2",
  subtitle1: "h2",
  subtitle2: "h4",
  body1: "p",
  body2: "p",
  overline: "span",
  caption: "small",
  small: "small",
};

const typographyVariantClassNames: TypographyVariantMapping = {
  h1: "text-3xl leading-12",
  h2: "text-2xl leading-8 italic font-serif",
  subtitle1: "text-base leading-6 italic font-serif",
  subtitle2: "text-base leading-6",
  body1: "text-base leading-6",
  body2: "text-sm leading-5",
  overline: "text-sm leading-5 italic font-serif",
  caption: "text-xs leading-4 italic font-serif",
  small: "text-xs leading-4",
};

const typographyFontWeightClassNames: TypographyFontWeightMapping = {
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
};

const typographyColorClassNames: TypographyColorMapping = {
  default: "text-gray-600",
  muted: "text-gray-500",
  inherit: "text-inherit",
};

const typographyDisplayClassNames: TypographyDisplayMapping = {
  inline: "inline",
  "inline-block": "inline-block",
  block: "block",
};

const Typography = ({
  variant = "body1",
  fontWeight = "normal",
  color = "default",
  display = "inline-block",
  ...props
}: TypographyProps) => {
  const Component = typographyVariantMapping[variant];

  return (
    <Component
      className={cn(
        typographyVariantClassNames[variant],
        typographyFontWeightClassNames[fontWeight],
        typographyColorClassNames[color],
        typographyDisplayClassNames[display]
      )}
      {...props}
    />
  );
};

export default Typography;
