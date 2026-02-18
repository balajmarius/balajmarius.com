import type { HTMLAttributes, ReactNode } from "react";

export type CardContentProps = {
	children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const CardContent = ({ children }: CardContentProps) => {
	return (
		<div className="space-y-6 px-3 py-3 rounded-2xl bg-white">{children}</div>
	);
};

export default CardContent;
