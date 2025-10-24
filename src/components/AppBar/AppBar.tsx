import React, { useRef, HTMLAttributes } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useOnClickOutside, useBoolean } from "usehooks-ts";
import { twMerge } from "tailwind-merge";

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
      className={twMerge(
        "fixed top-3 left-3 bg-gray-400/40 backdrop-blur rounded-lg px-4 py-3 space-y-3",
        value ? "min-w-xs" : "min-w-auto"
      )}
      ref={ref}
    >
      <div className={twMerge("flex items-center justify-between", value ? "gap-0" : "gap-16")} {...props}>
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
        <div className="bg-gray-400/40 space-y-3 px-3 py-3 rounded-sm">
          {sections.map((section) => (
            <div
              key={section.label}
              className="hover:bg-blue-500 text-gray-600 hover:text-white flex items-center gap-2 py-1 px-3 rounded-sm cursor-pointer"
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
