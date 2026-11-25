"use client";

import dynamic from "next/dynamic";

export const artifacts = {
  "casio-watch-scroll": dynamic(() => import("@/artifacts/casio-watch-scroll")),
  "claude-code-bash-mode": dynamic(
    () => import("@/artifacts/claude-code-bash-mode")
  ),
};

export type ArtifactName = keyof typeof artifacts;
