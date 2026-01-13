import { ReactNode, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export type IconButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = ({ children, className, ...props }: IconButtonProps) => {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center px-1 py-1 rounded-full bg-white cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
