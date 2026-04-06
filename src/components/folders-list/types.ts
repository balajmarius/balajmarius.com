export const FoldersListCardVariants = ["article", "note", "book"] as const;

export type FoldersListCardVariant = (typeof FoldersListCardVariants)[number];
export type FoldersListCardVariantMapping = Record<
  FoldersListCardVariant,
  string
>;
