export const LinkVariants = ["default", "inherit"] as const;

export type LinkVariant = (typeof LinkVariants)[number];
export type LinkVariantMapping = Record<LinkVariant, string>;
