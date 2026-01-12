import type { HTMLAttributes, ReactNode } from "react";

export type ChipProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Chip = ({ children }: ChipProps) => {
  return (
    <div className="rounded-3xl bg-white px-3 py-0.5 text-sm text-gray-600">
      {children}
    </div>
  );
};

export default Chip;
