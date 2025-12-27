import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

import { isNullOrUndefined } from "@/utils/helpers";

export const useScrollSmooth = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    if (isNullOrUndefined(ref.current)) {
      return undefined;
    }

    const lenis = new Lenis({
      wrapper: ref.current,
      content: ref.current,
      gestureOrientation: "both",
      orientation: "horizontal",
    });

    lenis.on("scroll", (event: { velocity: number }) => {
      setVelocity(event.velocity);
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return {
    ref,
    velocity,
  } as const;
};
