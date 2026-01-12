import type { ReactNode } from "react";

import { cn } from "@/utils/helpers";

import { Typography } from "@/components/Typography";

export type CardListItemProps = {
  label: string;
  value: ReactNode;
};

const CardListItem = ({ label, value }: CardListItemProps) => {
  return (
    <div className={cn("flex flex-col")}>
      <Typography variant="body2">{label}</Typography>
      <Typography variant="body1" color="accent" fontWeight="medium">
        {value}
      </Typography>
    </div>
  );
};

export default CardListItem;
