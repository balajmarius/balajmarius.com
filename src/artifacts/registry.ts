"use client";

import dynamic from "next/dynamic";

export const artifacts = {
  "claude-code-bash-mode": dynamic(
    () => import("@/artifacts/claude-code-bash-mode")
  ),
};

export type ArtifactName = keyof typeof artifacts;
