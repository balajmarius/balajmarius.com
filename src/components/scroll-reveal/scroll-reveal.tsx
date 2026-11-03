"use client";

import { useRef } from "react";

import { useInView } from "framer-motion";

import type { ScrollRevealProps } from "@/components/scroll-reveal/types";

import { cn } from "@/utils/helpers";
import { scrollRevealAnimation } from "@/utils/keyframes";

const ScrollReveal = ({ className, ...props }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, scrollRevealAnimation.viewport);

  return (
    <div
      ref={ref}
      className={cn(
        "backface-hidden",
        isInView ? "animate-content-entrance" : "opacity-0",
        className
      )}
      {...props}
    />
  );
};

export default ScrollReveal;
