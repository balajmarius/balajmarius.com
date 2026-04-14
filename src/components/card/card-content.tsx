import type { HTMLAttributes, ReactNode } from "react";

export type CardContentProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const CardContent = ({ children }: CardContentProps) => {
  return <div className="space-y-6 p-3 bg-white rounded-2xl">{children}</div>;
};

export default CardContent;
