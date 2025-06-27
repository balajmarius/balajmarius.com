import { ReactNode, HTMLAttributes } from "react";

export type IconButtonProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const IconButton = ({ children }: IconButtonProps) => {
  return <button className="bg-white  rounded-full flex items-center justify-center px-1 py-1">{children}</button>;
};

export default IconButton;
