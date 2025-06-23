import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <div className="bg-yellow-100 flex flex-col gap-3 py-3 px-3 rounded-3xl">{children}</div>;
};

export default Card;
