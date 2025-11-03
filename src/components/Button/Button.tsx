import { ReactNode, ButtonHTMLAttributes } from "react";

import { cn } from "@/utils/helpers";

import type { ButtonVariant, ButtonVariantMapping } from "@/components/Button";

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  startIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariantClassNames: ButtonVariantMapping = {
  transparent: "cursor-pointer",
  default:
    "cursor-pointer rounded-sm px-2 py-1 text-gray-600 hover:bg-blue-500 hover:text-white",
};

const Button = ({
  children,
  variant = "default",
  startIcon,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "transition-colors ease-in",
        buttonVariantClassNames[variant],
        startIcon ? "group flex items-center gap-1" : null
      )}
      {...props}
    >
      {startIcon}
      {children}
    </button>
  );
};

export default Button;
