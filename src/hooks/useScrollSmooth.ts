import { useEffect, useRef } from "react";
import { MotionValue, useMotionValue } from "framer-motion";
import Lenis from "lenis";

import { isNullOrUndefined } from "@/utils/helpers";
import { BOOKSHELF_VELOCITY_INITIAL } from "@/utils/const";

export const useScrollSmooth = <T extends HTMLElement>(): {
  ref: React.RefObject<T | null>;
  velocity: MotionValue<number>;
} => {
  const ref = useRef<T>(null);
  const velocity = useMotionValue(BOOKSHELF_VELOCITY_INITIAL);

  useEffect(() => {
    if (isNullOrUndefined(ref.current)) {
      return;
    }

    const lenis = new Lenis({
      wrapper: ref.current,
      content: ref.current,
      gestureOrientation: "both",
      orientation: "horizontal",
    });

    lenis.on("scroll", (event: { velocity: number }) => {
      velocity.set(event.velocity);
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [velocity]);

  return {
    ref,
    velocity,
  };
};
