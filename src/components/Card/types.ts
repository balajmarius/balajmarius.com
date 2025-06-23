export const CardVariants = [] as const;

export type CardVariant = (typeof CardVariants)[number];
export type CardVariantMapping = Record<CardVariant, string>;
