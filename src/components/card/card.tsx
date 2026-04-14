import type { HTMLAttributes, ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Card = ({ children }: CardProps) => {
  return (
    <div className="flex flex-col gap-3 p-3 bg-blue-100 rounded-3xl">
      {children}
    </div>
  );
};

export default Card;
