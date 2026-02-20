import cx from "classnames";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: Parameters<typeof cx>) => {
  return twMerge(cx(...inputs));
};

export const isNullOrUndefined = <T>(
  value: T | null | undefined
): value is null | undefined => {
  return value === null || value === undefined;
};

export const toMinutes = (value: number) => {
  return new Intl.NumberFormat("en", {
    style: "unit",
    unit: "minute",
  }).format(value);
};

export const toKilograms = (value: number) => {
  return new Intl.NumberFormat("en", {
    style: "unit",
    unit: "kilogram",
  }).format(value);
};
