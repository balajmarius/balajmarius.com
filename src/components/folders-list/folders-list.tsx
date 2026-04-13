"use client";

import { useState } from "react";

import type { Readings } from "@/lib/shiori";
import { isNullOrUndefined } from "@/utils/helpers";

import { FoldersListItem } from "@/components/folders-list";

type FoldersListProps = {
  readings: Readings;
};

const FoldersList = ({ readings }: FoldersListProps) => {
  const tags = Object.keys(readings);
  const [active, setActive] = useState<string | null>(null);

  const handleClick = (tag: string) => {
    if (active === tag) {
      return undefined;
    }
    setActive(tag);
  };

  return (
    <div className="max-w-6xl rounded-tr-3xl bg-gray-200">
      {tags.map((tag, index) => {
        if (isNullOrUndefined(active) || active === tag) {
          return (
            <FoldersListItem
              key={tag}
              index={index}
              name={tag}
              links={readings[tag]}
              active={active}
              onClick={() => handleClick(tag)}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default FoldersList;
