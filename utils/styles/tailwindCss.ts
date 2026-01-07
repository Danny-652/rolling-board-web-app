import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export const mergeClasses = (...classes: string[]): string =>
  twMerge(clsx(classes));
