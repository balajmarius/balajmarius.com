export const TypographyVariants = [
  "h1",
  "h2",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "overline",
  "caption",
] as const;

export type TypographyVariant = (typeof TypographyVariants)[number];
export type TypographyVariantMapping = Record<TypographyVariant, string>;
