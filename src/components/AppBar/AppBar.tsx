import React, { useRef, HTMLAttributes } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useOnClickOutside, useBoolean } from "usehooks-ts";

import { cn } from "@/lib/utils";

import { SvgIconM, SvgIconHouse, SvgIconTrophy, SvgIconNotepad, SvgIconGlobe } from "@/components/SvgIcon";

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

  useOnClickOutside(ref, setFalse);

  return (
    <header
      className={cn(
        "fixed top-3 left-3 z-50 space-y-3 rounded-lg bg-gray-400/40 px-4 py-3 backdrop-blur transition-all ease-in-out",
        value ? "w-84" : "w-44"
      )}
      ref={ref}
    >
      <div className={cn("flex items-center justify-between", value ? "gap-0" : "gap-16")} {...props}>
        <Link href="/">
          <SvgIconM size="medium" />
        </Link>
        <Button onClick={value ? setFalse : setTrue}>
          <Typography variant="body1" color="inherit">
            {value ? t("appBar.close") : t("appBar.menu")}
          </Typography>
        </Button>
      </div>

      {value ? (
        <div className="space-y-3 rounded-sm bg-gray-400/40 px-3 py-3">
          {sections.map((section) => (
            <div
              key={section.label}
              className="flex cursor-pointer items-center gap-2 rounded-sm px-3 py-1 text-gray-600 transition-colors hover:bg-blue-500 hover:text-white"
            >
              {section.icon}
              <Typography variant="body1" color="inherit">
                {section.label}
              </Typography>
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
};

export default AppBar;
