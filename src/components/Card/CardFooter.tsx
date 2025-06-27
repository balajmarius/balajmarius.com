import type { ReactNode, HTMLAttributes } from "react";

export type CardFooterProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const CardFooter = ({ children }: CardFooterProps) => {
  return <div>{children}</div>;
};

export default CardFooter;
