export const SectionSpacings = ["default", "small"] as const;

export type SectionSpacing = (typeof SectionSpacings)[number];
export type SectionSpacingMapping = Record<SectionSpacing, string>;
