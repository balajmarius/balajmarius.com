"use client";

import { lazy } from "react";

export const artifacts = {
  "claude-code-bash-mode": lazy(
    () => import("@/artifacts/claude-code-bash-mode")
  ),
};

export type ArtifactName = keyof typeof artifacts;
