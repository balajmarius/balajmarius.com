export const TypographyVariants = [
  "h1",
  "h2",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "overline",
  "caption",
  "small",
] as const;

export type TypographyVariant = (typeof TypographyVariants)[number];
export type TypographyVariantMapping = Record<TypographyVariant, string>;

export const TypographyFontWeights = ["normal", "medium", "bold"] as const;

export type TypographyFontWeight = (typeof TypographyFontWeights)[number];
export type TypographyFontWeightMapping = Record<TypographyFontWeight, string>;

export const TypographyColors = ["default", "muted", "inherit"] as const;

export type TypographyColor = (typeof TypographyColors)[number];
export type TypographyColorMapping = Record<TypographyColor, string>;

export const TypographyDisplays = ["inline", "inline-block", "block"] as const;

export type TypographyDisplay = (typeof TypographyDisplays)[number];
export type TypographyDisplayMapping = Record<TypographyDisplay, string>;
