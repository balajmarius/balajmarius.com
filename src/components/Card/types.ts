export const CardVariants = [] as const;
export const CardColors = ["primary", "secondary", "info", "success"] as const;

export type CardVariant = (typeof CardVariants)[number];
export type CardColor = (typeof CardColors)[number];
export type CardVariantMapping = Record<CardVariant, string>;
export type CardColorMapping = Record<CardColor, string>;
