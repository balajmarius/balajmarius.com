// ABOUTME: Type definitions for Button component
// ABOUTME: Defines button variants and their CSS class mappings
export const ButtonVariants = ["default", "transparent"] as const;

export type ButtonVariant = (typeof ButtonVariants)[number];
export type ButtonVariantMapping = Record<ButtonVariant, string>;
