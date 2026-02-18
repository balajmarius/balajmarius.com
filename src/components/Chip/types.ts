export const ChipVariants = ["default", "outlined"] as const;
export const ChipColors = [
  "default",
  "primary",
  "secondary",
  "info",
  "success",
] as const;

export type ChipVariant = (typeof ChipVariants)[number];
export type ChipColor = (typeof ChipColors)[number];
export type ChipVariantMapping = Record<ChipVariant, string>;
export type ChipColorMapping = Record<ChipColor, string>;
