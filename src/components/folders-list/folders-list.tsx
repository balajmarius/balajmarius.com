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

  return (
    <div className="max-w-6xl bg-gray-200 rounded-tr-3xl">
      {tags.map((tag, index) => {
        if (isNullOrUndefined(active) || active === tag) {
          return (
            <FoldersListItem
              key={tag}
              index={index}
              name={tag}
              links={readings[tag]}
              active={active === tag}
              onClick={() => setActive(active === tag ? null : tag)}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default FoldersList;
