// ABOUTME: Utility functions for the application
// ABOUTME: Includes className merging with Tailwind CSS conflict resolution
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
