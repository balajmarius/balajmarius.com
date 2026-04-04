import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type IconButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({ children, className, ...props }: IconButtonProps) => {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center rounded-full px-1 py-1 bg-white cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
