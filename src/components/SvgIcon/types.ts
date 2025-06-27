export const SvgIconSizes = ["inherit", "small", "medium", "large"] as const;

export type SvgIconSize = (typeof SvgIconSizes)[number];
export type SvgIconSizeMapping = Record<SvgIconSize, string>;
