"use client";

import type { Readings } from "@/lib/shiori";

import { FoldersListItem } from "@/components/folders-list";

type FoldersListProps = {
  readings: Readings;
};

const FoldersList = ({ readings }: FoldersListProps) => {
  const tags = Object.keys(readings);

  return (
    <div className="max-w-6xl">
      {tags.map((tag, index) => (
        <FoldersListItem
          key={tag}
          index={index}
          name={tag}
          links={readings[tag]}
        />
      ))}
    </div>
  );
};

export default FoldersList;
