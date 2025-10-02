import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// library function for creating and merging classes with tailwindcss for shadcn-solid
export const cn = (...classLists: ClassValue[]) => twMerge(clsx(classLists));
