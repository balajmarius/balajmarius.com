import Link from "next/link";
import { useRef, HTMLAttributes } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useOnClickOutside, useEventListener, useBoolean } from "usehooks-ts";

import { cn } from "@/utils/helpers";
import { Keys } from "@/utils/keyboard";
import { appBarAnimation } from "@/utils/keyframes";

import {
  SvgIconM,
  SvgIconHouse,
  SvgIconTrophy,
  SvgIconNotepad,
  SvgIconGlobe,
} from "@/components/SvgIcon";

import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";

export type AppBarProps = {} & HTMLAttributes<HTMLElement>;

const AppBar = ({ ...props }: AppBarProps) => {
  const { value, setTrue, setFalse } = useBoolean();

  const t = useTranslations();
  const ref = useRef<HTMLElement>(null!);

  const sections = [
    { label: t("appBar.intro"), icon: <SvgIconHouse size="small" /> },
    { label: t("appBar.experiences"), icon: <SvgIconTrophy size="small" /> },
    { label: t("appBar.writings"), icon: <SvgIconNotepad size="small" /> },
    { label: t("appBar.contact"), icon: <SvgIconGlobe size="small" /> },
  ];

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === Keys.ESCAPE) {
      setFalse();
    }
  };

  useOnClickOutside(ref, setFalse);
  useEventListener("keydown", handleKeyDown);

  return (
    <header
      className={cn(
        "fixed top-3 left-3 z-50 rounded-lg bg-gray-400/40 px-4 py-3 backdrop-blur transition-all duration-400 ease-out-exponential",
        value ? "w-84" : "w-44"
      )}
      ref={ref}
    >
      <div
        className={cn(
          "flex items-center justify-between",
          value ? "gap-0" : "gap-16"
        )}
        {...props}
      >
        <Link href="/">
          <SvgIconM size="medium" />
        </Link>
        <Button onClick={value ? setFalse : setTrue}>
          <Typography variant="body1" color="inherit">
            {value ? t("appBar.close") : t("appBar.menu")}
          </Typography>
        </Button>
      </div>

      <AnimatePresence>
        {value ? (
          <motion.div
            {...appBarAnimation.container}
            className="overflow-hidden"
          >
            <motion.div
              {...appBarAnimation.innerContainer}
              className="space-y-3 rounded-sm bg-gray-400/40 px-3 py-3"
            >
              {sections.map((section, index) => (
                <motion.div
                  key={section.label}
                  initial={appBarAnimation.item.initial}
                  animate={appBarAnimation.item.animate}
                  transition={appBarAnimation.item.transition(index)}
                  className="flex cursor-pointer items-center gap-2 rounded-sm px-3 py-1 text-gray-600 transition-colors hover:bg-blue-500 hover:text-white"
                >
                  {section.icon}
                  <Typography variant="body1" color="inherit">
                    {section.label}
                  </Typography>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default AppBar;
