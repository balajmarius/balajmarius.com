import type { ReactNode } from "react";

interface CardContentProps {
  children: ReactNode;
}

const CardContent = ({ children }: CardContentProps) => {
  return <div className="bg-white py-3 px-3 rounded-2xl">{children}</div>;
};

export default CardContent;
