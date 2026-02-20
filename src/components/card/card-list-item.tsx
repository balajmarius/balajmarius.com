import type { ReactNode } from "react";

import { Typography } from "@/components/typography";

export type CardListItemProps = {
  label: string;
  value?: ReactNode;
};

const CardListItem = ({ label, value }: CardListItemProps) => {
  return (
    <div className="flex flex-col">
      <Typography variant="body2">{label}</Typography>
      {value ? (
        <Typography variant="body1" color="accent" fontWeight="medium">
          {value}
        </Typography>
      ) : null}
    </div>
  );
};

export default CardListItem;
