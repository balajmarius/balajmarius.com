"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

import { cn } from "@/utils/helpers";
import { scrollTransforms } from "@/utils/keyframes";

import { AppBar } from "@/sections/app-bar";
import { Footer } from "@/sections/footer";

type ScrollContainerProps = {
  children: ReactNode;
  className: string;
};

const ScrollContainer = ({ children, className }: ScrollContainerProps) => {
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    scrollTransforms.scale.enter,
    scrollTransforms.scale.exit
  );
  const borderRadius = useTransform(
    scrollYProgress,
    scrollTransforms.borderRadius.enter,
    scrollTransforms.borderRadius.exit
  );

  return (
    <>
      <AppBar />

      <motion.main
        className={cn(
          className,
          "min-h-screen overflow-hidden pb-48 bg-white selection:bg-blue-500 selection:text-white origin-bottom"
        )}
        style={{
          scale,
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius,
        }}
      >
        {children}
      </motion.main>

      <Footer ref={footerRef} />
    </>
  );
};

export default ScrollContainer;
