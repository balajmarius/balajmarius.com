import type { HTMLAttributes, ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Card = ({ children }: CardProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-3xl px-3 py-3 bg-blue-100">
      {children}
    </div>
  );
};

export default Card;
