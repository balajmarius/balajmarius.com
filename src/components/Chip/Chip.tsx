import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/helpers";

import type {
  ChipVariantMapping,
  ChipColor,
  ChipColorMapping,
} from "@/components/Chip";

type ChipBaseProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

type ChipDefaultProps = ChipBaseProps & {
  variant?: "default";
  color: ChipColor;
};

type ChipOutlinedProps = ChipBaseProps & {
  variant: "outlined";
  color?: never;
};

export type ChipProps = ChipDefaultProps | ChipOutlinedProps;

const chipVariantClassNames: ChipVariantMapping = {
  default: "outline-0",
  outlined: "bg-transparent outline outline-gray-100",
};

const chipColorClassNames: ChipColorMapping = {
  default: "bg-white",
  success: "bg-green-100",
  primary: "bg-blue-100",
  secondary: "bg-purple-100",
  info: "bg-yellow-100",
};

const Chip = ({ children, variant = "default", color = "info" }: ChipProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl px-3 py-0.5 text-sm text-gray-600",
        chipColorClassNames[color],
        chipVariantClassNames[variant]
      )}
    >
      {children}
    </div>
  );
};

export default Chip;
