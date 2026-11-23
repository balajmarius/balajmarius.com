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
  NON_POINTER_CLICK_DETAIL,
  COMMITS_WAVE_RADIUS_INITIAL,
  COMMITS_WAVE_SPEED,
  COMMITS_WAVE_RADIUS_PADDING,
} from "@/utils/const";

export type Point = {
  x: number;
  y: number;
};

export type Wave = {
  origin: Point;
  radius: MotionValue<number>;
};

export const getSvgCoordinates = (
  svg: SVGSVGElement,
  clientX: number,
  clientY: number
): Point | null => {
  const screenTransform = svg.getScreenCTM();

  if (isNullOrUndefined(screenTransform)) {
    return null;
  }

  return new DOMPoint(clientX, clientY).matrixTransform(
    screenTransform.inverse()
  );
};

export const useCommitWaves = (): {
  calendarRef: RefObject<HTMLDivElement | null>;
  pointerPosition: MotionValue<Point | null>;
  waves: Wave[];
} => {
  const pointerPosition = useMotionValue<Point | null>(null);

  const [waves, setWaves] = useState<Wave[]>([]);
  const [calendarRef, animate] = useAnimate<HTMLDivElement>();

  const handlePointerMove = (event: PointerEvent) => {
    const svg = calendarRef.current?.querySelector("svg");

    if (isNullOrUndefined(svg) || event.pointerType !== "mouse") {
      return;
    }

    pointerPosition.set(getSvgCoordinates(svg, event.clientX, event.clientY));
  };

  const handlePointerClear = () => {
    pointerPosition.set(null);
  };

  const handleClick = (event: MouseEvent) => {
    const svg = calendarRef.current?.querySelector("svg");

    if (isNullOrUndefined(svg) || event.detail === NON_POINTER_CLICK_DETAIL) {
      return;
    }

    const origin = getSvgCoordinates(svg, event.clientX, event.clientY);

    if (isNullOrUndefined(origin)) {
      return;
    }

    const { width, height } = svg.viewBox.baseVal;
    const horizontalReach = Math.max(origin.x, width - origin.x);
    const verticalReach = Math.max(origin.y, height - origin.y);
    const finalRadius =
      Math.hypot(horizontalReach, verticalReach) + COMMITS_WAVE_RADIUS_PADDING;

    const wave = {
      origin,
      radius: motionValue(COMMITS_WAVE_RADIUS_INITIAL),
    };

    // Add the wave so each cell
    // can subscribe to its radius.
    setWaves((prevWaves) => {
      return [...prevWaves, wave];
    });

    animate(wave.radius, finalRadius, {
      ease: "linear",
      duration: finalRadius / COMMITS_WAVE_SPEED,
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
    pointerPosition,
    waves,
  };
};
