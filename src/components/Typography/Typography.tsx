import React, { type HtmlHTMLAttributes, ReactNode } from "react";

import type { TypographyVariant, TypographyVariantMapping } from "@/components/Typography";

export type TypographyProps = {
  children: ReactNode;
  variant?: TypographyVariant;
} & HtmlHTMLAttributes<HTMLSpanElement>;

const defaultTypographyVariantMapping: TypographyVariantMapping = {
  h1: "h1",
  h2: "h2",
  subtitle1: "h3",
  subtitle2: "h4",
  body1: "p",
  body2: "p",
  overline: "span",
  caption: "small",
};

const defaultTypographyVariantClassNames: TypographyVariantMapping = {
  h1: "text-3xl leading-12",
  h2: "text-2xl leading-8 italic font-serif",
  subtitle1: "text-base leading-6 italic font-serif",
  subtitle2: "text-base leading-6",
  body1: "text-base leading-6",
  body2: "text-sm leading-5",
  overline: "text-sm leading-5 italic font-serif",
  caption: "text-xs leading-4 italic font-serif",
};

const Typography = ({ variant = "body1", ...props }: TypographyProps) => {
  const Component = defaultTypographyVariantMapping[variant];

  return <Component className={defaultTypographyVariantClassNames[variant]} {...props} />;
};

export default Typography;
