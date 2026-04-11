import type { HTMLAttributes, ReactNode } from "react";

export type CardContentProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const CardContent = ({ children }: CardContentProps) => {
  return (
    <div className="space-y-6 rounded-2xl px-3 py-3 bg-white">{children}</div>
  );
};

export default CardContent;
