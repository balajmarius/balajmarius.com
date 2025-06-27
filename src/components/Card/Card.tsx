import type { ReactNode, HTMLAttributes } from "react";
import cx from "classnames";

import type { CardColor, CardColorMapping } from "@/components/Card";

export type CardProps = {
  children: ReactNode;
  color: CardColor;
} & HTMLAttributes<HTMLDivElement>;

const defaultCardColorClassNames: CardColorMapping = {
  primary: "bg-blue-100",
  secondary: "bg-purple-100",
  success: "bg-green-100",
  info: "bg-yellow-100",
};

const Card = ({ children, color }: CardProps) => {
  return (
    <div className={cx("flex flex-col gap-3 py-3 px-3 rounded-3xl", defaultCardColorClassNames[color])}>{children}</div>
  );
};

export default Card;
