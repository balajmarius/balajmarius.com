import React, { type HtmlHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import type { TypographyVariant, TypographyVariantMapping } from "@/components/Typography";

export interface TypographyProps extends HtmlHTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: TypographyVariant;
  cx?: React.ComponentProps<"h1" | "h2" | "h3" | "h4" | "p" | "span">["className"];
}

const defaultTypographyVariantMapping: TypographyVariantMapping = {
  h1: "h1",
  h2: "h2",
  subtitle1: "h3",
  subtitle2: "h4",
  body1: "p",
  body2: "p",
  overline: "span",
  caption: "span",
};

const defaultTypographyClassNames: TypographyVariantMapping = {
  h1: "text-3xl leading-12",
  h2: "text-2xl leading-8 italic font-medium font-serif",
  subtitle1: "text-base leading-6 italic font-medium font-serif",
  subtitle2: "text-base leading-6",
  body1: "text-base leading-6",
  body2: "text-sm leading-5",
  overline: "text-sm leading-5 italic font-medium font-serif",
  caption: "text-xs leading-4 italic font-medium font-serif",
};

const Typography = ({ variant = "body1", cx, ...props }: TypographyProps) => {
  const Component = defaultTypographyVariantMapping[variant];

  return <Component className={twMerge(defaultTypographyClassNames[variant], cx)} {...props} />;
};

export default Typography;
