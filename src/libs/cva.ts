import { defineConfig } from "cva";
import { twMerge } from "tailwind-merge";

// configuration to use tailwind-merge with cva
export const { cva, cx, compose } = defineConfig({
  hooks: {
    onComplete: (className) => twMerge(className),
  },
});
