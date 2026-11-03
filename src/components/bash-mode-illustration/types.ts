import type { HTMLAttributes } from "react";

export const BashModeIllustrationModes = ["prompt", "bash"] as const;

export type BashModeIllustrationMode =
  (typeof BashModeIllustrationModes)[number];
export type BashModeIllustrationModeMapping = Record<
  BashModeIllustrationMode,
  string
>;

export type BashModeIllustrationFrame = {
  mode: BashModeIllustrationMode;
  input: string;
  hasOutput: boolean;
  duration: number;
};

export type BashModeIllustrationProps = HTMLAttributes<HTMLElement>;
