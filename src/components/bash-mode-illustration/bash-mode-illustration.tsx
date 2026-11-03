"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import type {
  BashModeIllustrationFrame,
  BashModeIllustrationModeMapping,
  BashModeIllustrationProps,
} from "@/components/bash-mode-illustration";

import { cn } from "@/utils/helpers";
import { bashModeIllustrationAnimation } from "@/utils/keyframes";

const frames: BashModeIllustrationFrame[] = [
  { mode: "prompt", input: "", hasOutput: false, duration: 1600 },
  { mode: "bash", input: "", hasOutput: false, duration: 1000 },
  { mode: "bash", input: "l", hasOutput: false, duration: 220 },
  { mode: "bash", input: "ls", hasOutput: false, duration: 800 },
  { mode: "prompt", input: "", hasOutput: true, duration: 3200 },
];

const outputLines = ["README.md  package.json", "public     src"];

const promptBoxClassNames: BashModeIllustrationModeMapping = {
  prompt: "border-gray-500",
  bash: "border-orange-200",
};

const promptSymbolClassNames: BashModeIllustrationModeMapping = {
  prompt: "text-gray-300",
  bash: "text-orange-200",
};

const promptSymbols: BashModeIllustrationModeMapping = {
  prompt: ">",
  bash: "!",
};

const promptHints: BashModeIllustrationModeMapping = {
  prompt: "? for shortcuts",
  bash: "! for bash mode",
};

const BashModeIllustration = ({
  className,
  ...props
}: BashModeIllustrationProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setFrameIndex((index) => (index + 1) % frames.length);
    }, frames[frameIndex].duration);

    return () => clearTimeout(timeout);
  }, [frameIndex, shouldReduceMotion]);

  const frame = frames[shouldReduceMotion ? frames.length - 1 : frameIndex];

  return (
    <div
      role="img"
      aria-label="A terminal running Claude Code: typing ! switches the prompt to bash mode, then ls lists the files"
      className={cn("flex justify-center py-6 perspective-distant", className)}
      {...props}
    >
      <motion.div
        className="relative w-full max-w-xs rotate-x-12 -rotate-y-12 transform-3d"
        {...(shouldReduceMotion ? {} : bashModeIllustrationAnimation.float)}
      >
        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl bg-blue-500" />
        <div className="relative overflow-hidden rounded-xl border-2 border-gray-600 bg-gray-600 text-left">
          <div className="flex items-center gap-1.5 border-b-2 border-gray-600 bg-gray-200 px-3 py-2">
            <span className="size-2.5 rounded-full bg-orange-200" />
            <span className="size-2.5 rounded-full bg-orange-300" />
            <span className="size-2.5 rounded-full bg-green-200" />
          </div>

          <div className="flex h-40 flex-col gap-2 p-3 font-mono text-xs text-gray-300">
            <p className="text-orange-300">✻ Claude Code</p>

            <div className="flex-1 space-y-0.5">
              <AnimatePresence>
                {frame.hasOutput
                  ? [`! ls`, ...outputLines].map((line, index) => (
                      <motion.p
                        key={line}
                        className={cn(
                          "whitespace-pre",
                          index === 0 ? "text-orange-200" : "text-gray-100"
                        )}
                        initial={bashModeIllustrationAnimation.line.initial}
                        animate={bashModeIllustrationAnimation.line.animate}
                        exit={bashModeIllustrationAnimation.line.exit}
                        transition={bashModeIllustrationAnimation.line.transition(
                          index
                        )}
                      >
                        {line}
                      </motion.p>
                    ))
                  : null}
              </AnimatePresence>
            </div>

            <div
              className={cn(
                "flex items-center gap-2 rounded-md border px-2 py-1 transition-colors duration-300",
                promptBoxClassNames[frame.mode]
              )}
            >
              <motion.span
                key={frame.mode}
                className={promptSymbolClassNames[frame.mode]}
                {...bashModeIllustrationAnimation.symbol}
              >
                {promptSymbols[frame.mode]}
              </motion.span>
              <span>
                {frame.input}
                <motion.span
                  className="inline-block h-3 w-1.5 translate-y-0.5 bg-gray-300"
                  {...(shouldReduceMotion
                    ? {}
                    : bashModeIllustrationAnimation.cursor)}
                />
              </span>
            </div>

            <p
              className={cn(
                "transition-colors duration-300",
                frame.mode === "bash" ? "text-orange-200" : "text-gray-500"
              )}
            >
              {promptHints[frame.mode]}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BashModeIllustration;
