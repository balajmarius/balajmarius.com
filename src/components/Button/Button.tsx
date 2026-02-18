import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ButtonVariant, ButtonVariantMapping } from "@/components/Button";
import { cn } from "@/utils/helpers";

export type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  startIcon?: ReactNode;
  active?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariantClassNames: ButtonVariantMapping = {
  transparent: "cursor-pointer",
  default:
    "cursor-pointer rounded-sm px-2 py-1 text-gray-600 hover:bg-blue-500 hover:text-white",
};

const buttonActiveClassNames: ButtonVariantMapping = {
  transparent: "bg-transparent",
  default: "bg-blue-500 text-white",
};

const Button = ({
  children,
  variant = "default",
  startIcon,
  active,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "transition-colors ease-in",
        buttonVariantClassNames[variant],
        active ? buttonActiveClassNames[variant] : null,
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
