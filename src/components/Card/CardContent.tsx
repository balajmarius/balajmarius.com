import type { ReactNode, HTMLAttributes } from "react";

export type CardContentProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const CardContent = ({ children }: CardContentProps) => {
  return <div className="bg-white py-3 px-3 rounded-2xl">{children}</div>;
};

export default CardContent;
