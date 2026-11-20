"use client";

import { useState, type RefObject } from "react";
import { useEventListener } from "usehooks-ts";
import {
  motionValue,
  useAnimate,
  useMotionValue,
  type MotionValue,
} from "framer-motion";

import { isNullOrUndefined } from "@/utils/helpers";

import {
  NON_POINTER_CLICK,
  COMMITS_WAVE_RADIUS_INITIAL,
  COMMITS_WAVE_SPEED,
  COMMITS_WAVE_FADE_DISTANCE,
} from "@/utils/const";

export type Point = {
  x: number;
  y: number;
};

export type Wave = {
  origin: Point;
  radius: MotionValue<number>;
};

const getSvgCoordinates = (event: MouseEvent, svg: SVGSVGElement): Point => {
  const bounds = svg.getBoundingClientRect();

  return {
    x: event.clientX - bounds.left,
    y: event.clientY - bounds.top,
  };
};

export const useCommitWaves = (): {
  calendarRef: RefObject<HTMLDivElement | null>;
  pointer: MotionValue<Point | null>;
  waves: Wave[];
} => {
  const pointer = useMotionValue<Point | null>(null);

  const [waves, setWaves] = useState<Wave[]>([]);
  const [calendarRef, animate] = useAnimate<HTMLDivElement>();

  const handlePointerMove = (event: PointerEvent) => {
    const svg = calendarRef.current?.querySelector("svg");

    if (isNullOrUndefined(svg) || event.pointerType !== "mouse") {
      return;
    }

    pointer.set(getSvgCoordinates(event, svg));
  };

  const handlePointerClear = () => {
    if (isNullOrUndefined(pointer.get())) {
      return;
    }

    pointer.set(null);
  };

  const handleClick = (event: MouseEvent) => {
    const svg = calendarRef.current?.querySelector("svg");

    if (isNullOrUndefined(svg) || event.detail === NON_POINTER_CLICK) {
      return;
    }

    const origin = getSvgCoordinates(event, svg);
    const horizontalReach = Math.max(
      origin.x,
      svg.viewBox.baseVal.width - origin.x
    );
    const verticalReach = Math.max(
      origin.y,
      svg.viewBox.baseVal.height - origin.y
    );
    const travelDistance =
      Math.hypot(horizontalReach, verticalReach) + COMMITS_WAVE_FADE_DISTANCE;

    const wave = {
      origin,
      radius: motionValue(COMMITS_WAVE_RADIUS_INITIAL),
    };

    // Add the wave so each cell
    // can subscribe to its radius.
    setWaves((prevWaves) => {
      return [...prevWaves, wave];
    });

    animate(wave.radius, travelDistance, {
      ease: "linear",
      duration: travelDistance / COMMITS_WAVE_SPEED,
      onComplete: () => {
        // Remove the completed wave
        // from the active list.
        setWaves((prevWaves) => {
          return prevWaves.filter((currentWave) => {
            return currentWave !== wave;
          });
        });
        wave.radius.destroy();
      },
    });
  };

  useEventListener("pointermove", handlePointerMove, calendarRef);
  useEventListener("pointerleave", handlePointerClear, calendarRef);
  useEventListener("pointercancel", handlePointerClear, calendarRef);
  useEventListener("click", handleClick, calendarRef);
  useEventListener("scroll", handlePointerClear);
  useEventListener("resize", handlePointerClear);

  return {
    calendarRef,
    pointer,
    waves,
  };
};
