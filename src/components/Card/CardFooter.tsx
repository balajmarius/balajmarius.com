import type { HTMLAttributes, ReactNode } from "react";

export type CardFooterProps = {
	children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const CardFooter = ({ children }: CardFooterProps) => {
	return <div className="flex items-center gap-1">{children}</div>;
};

export default CardFooter;
