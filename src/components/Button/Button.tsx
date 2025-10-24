import { ReactNode, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import type { ButtonVariant, ButtonVariantMapping } from "@/components/Button";

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariantClassNames: ButtonVariantMapping = {
  default: "py-1 px-2 rounded-sm text-gray-600 hover:bg-blue-500 hover:text-white cursor-pointer",
  transparent: "cursor-pointer",
};

const Button = ({ children, variant = "default", className, ...props }: ButtonProps) => {
  return (
    <button className={twMerge(buttonVariantClassNames[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
