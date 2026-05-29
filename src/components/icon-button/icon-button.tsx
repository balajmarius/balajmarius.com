import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type IconButtonBaseProps = {
  children: ReactNode;
};

type IconButtonButtonProps = IconButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
  };

type IconButtonSpanProps = IconButtonBaseProps &
  HTMLAttributes<HTMLSpanElement> & {
    as: "span";
  };

export type IconButtonProps = IconButtonButtonProps | IconButtonSpanProps;

const IconButton = ({
  as: Component = "button",
  children,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <Component
      className={twMerge(
        "flex items-center justify-center rounded-full px-1 py-1 bg-white cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default IconButton;
