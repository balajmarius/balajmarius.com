import type { HTMLAttributes } from "react";

import type { ArtifactName } from "@/artifacts/registry";

export type ArtifactProps = {
  name: ArtifactName;
  title: string;
  height?: number;
} & HTMLAttributes<HTMLDivElement>;
