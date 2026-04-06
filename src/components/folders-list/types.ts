export const FoldersListCardVariants = ["link", "quote", "book"] as const;

export type FoldersListCardVariant = (typeof FoldersListCardVariants)[number];
export type FoldersListCardVariantMapping = Record<
  FoldersListCardVariant,
  string
>;
