import React, { type HtmlHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import type {
  TypographyFontWeight,
  TypographyFontWeightMapping,
  TypographyVariant,
  TypographyVariantMapping,
} from "@/components/Typography";

export type TypographyProps = {
  children: ReactNode;
  variant?: TypographyVariant;
  fontWeight?: TypographyFontWeight;
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

const defaultTypographyFontWeightClassNames: TypographyFontWeightMapping = {
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
};

const Typography = ({ variant = "body1", fontWeight = "normal", ...props }: TypographyProps) => {
  const Component = defaultTypographyVariantMapping[variant];

  return (
    <Component
      className={twMerge(
        defaultTypographyVariantClassNames[variant],
        defaultTypographyFontWeightClassNames[fontWeight]
      )}
      {...props}
    />
  );
};

export default Typography;
