import { ReactNode, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import type { ButtonVariant, ButtonVariantMapping } from "@/components/Button";

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  startIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariantClassNames: ButtonVariantMapping = {
  transparent: "cursor-pointer",
  default: "py-1 px-2 rounded-sm text-gray-600 hover:bg-blue-500 hover:text-white cursor-pointer",
};

const Button = ({ children, variant = "default", startIcon, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(buttonVariantClassNames[variant], startIcon ? "group flex items-center gap-1" : null)}
      {...props}
    >
      {startIcon}
      {children}
    </button>
  );
};

export default Button;
