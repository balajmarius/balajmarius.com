export const SectionSpacings = ["default", "small"] as const;
export const SectionSizes = ["medium", "large"] as const;

export type SectionSpacing = (typeof SectionSpacings)[number];
export type SectionSpacingMapping = Record<SectionSpacing, string>;

export type SectionSize = (typeof SectionSizes)[number];
export type SectionSizeMapping = Record<SectionSize, string>;
