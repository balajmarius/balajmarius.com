import Image from "next/image";

import {
  FOLDERS_CARD_IMAGE_HEIGHT,
  FOLDERS_CARD_IMAGE_WIDTH,
} from "@/utils/const";

import { isNullOrUndefined } from "@/utils/helpers";

type FoldersListCardBookProps = {
  title: string;
  url: string;
  imageUrl: string | null;
};

const FoldersListCardBook = ({
  title,
  url,
  imageUrl,
}: FoldersListCardBookProps) => {
  if (isNullOrUndefined(imageUrl)) {
    return null;
  }

  return (
    <div className="overflow-clip rounded-xs shadow-2xl shadow-blue-950/20">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full xl:max-w-xs"
      >
        <Image
          src={imageUrl}
          alt={title}
          width={FOLDERS_CARD_IMAGE_WIDTH}
          height={FOLDERS_CARD_IMAGE_HEIGHT}
          loading="lazy"
          className="w-full object-cover"
        />
      </a>
    </div>
  );
};

export default FoldersListCardBook;
