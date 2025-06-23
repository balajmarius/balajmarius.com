import type { ReactNode } from "react";

interface CardFooterProps {
  children: ReactNode;
}

const CardFooter = ({ children }: CardFooterProps) => {
  return <div>{children}</div>;
};

export default CardFooter;
