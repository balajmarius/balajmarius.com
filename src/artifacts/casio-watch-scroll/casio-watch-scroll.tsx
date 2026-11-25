"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";

import styles from "./styles.module.css";

const frameCount = 12;
const lastFrame = frameCount - 1;

// ABOUTME: The source sequence ends out of focus, so play it backwards.
const frames = Array.from({ length: frameCount }, (_, index) => {
  const frameNumber = String(frameCount - index).padStart(2, "0");
  return `/images/hacking-the-casio-f-91w/watch-scroll/${frameNumber}.webp`;
});

const CasioWatchScroll = () => {
  const sequenceRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sequenceRef,
    offset: ["start 0.5", "center 0.42"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reduceMotion) {
      return;
    }

    setFrame(Math.round(progress * lastFrame));
  });

  return (
    <div ref={sequenceRef} className={styles.sequence} aria-hidden="true">
      {frames.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={1120}
          height={840}
          loading="eager"
          fetchPriority={index === 0 ? "high" : undefined}
          className={styles.frame}
          data-visible={index <= frame}
        />
      ))}
    </div>
  );
};

export default CasioWatchScroll;
