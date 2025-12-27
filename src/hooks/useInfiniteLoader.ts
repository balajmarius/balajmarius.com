import { useEffect, useRef } from "react";
import { useCounter } from "usehooks-ts";
import { useInView } from "framer-motion";

import { BOOKSHELF_BATCH_SIZE } from "@/utils/const";

export const useInfiniteLoader = <T>(data: T[]) => {
  const { count, increment } = useCounter();

  const sentinelRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sentinelRef);

  const items = data.slice(0, count * BOOKSHELF_BATCH_SIZE);
  const isPartial = items.length < data.length;

  useEffect(() => {
    if (isInView && isPartial) {
      increment();
    }
  }, [isInView, isPartial, increment]);

  return {
    items,
    sentinelRef,
    isPartial,
  } as const;
};
