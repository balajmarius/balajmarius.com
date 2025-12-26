import { useEffect, useRef } from "react";
import Lenis from "lenis";

import { isNullOrUndefined } from "@/utils/helpers";

export const useHijackScroll = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (isNullOrUndefined(ref.current)) {
      return undefined;
    }

    const lenis = new Lenis({
      wrapper: ref.current,
      content: ref.current,
      orientation: "horizontal",
      gestureOrientation: "both",
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return ref;
};
