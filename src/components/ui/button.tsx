import type { ComponentProps, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";
import { Root as ButtonPrimitive } from "@kobalte/core/button";
import type { VariantProps } from "cva";

import { cva } from "~/libs/cva";

/*
	button component variant configuration
*/
export const buttonVariants = cva({
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md cursor-pointer transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  variants: {
    variant: {
      default:
        "bg-purple-900 text-zinc-50 shadow-xs hover:bg-purple-900/90",
      destructive:
        "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline:
        "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary:
        "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      ghost: "hover:bg-zinc-100",
      link: "underline-offset-4 hover:underline",
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      slim: "max-h-9 p-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonProps<T extends ValidComponent = "button"> = ComponentProps<
  typeof ButtonPrimitive<T>
> &
  VariantProps<typeof buttonVariants>;

/*
	reusable button component with pre-defined variants  

	button component from unreleased beta version of shadcn-solid
	* https://github.com/hngngn/shadcn-solid/blob/feat/new-update/packages/tailwindcss/src/ui/v4/button.tsx
	* https://shadcn-solid-62l63mm2f-hngngns-projects.vercel.app/docs/components/button
*/
export const Button = <T extends ValidComponent = "button">(
  props: ButtonProps<T>,
) => {
  const [, rest] = splitProps(props as ButtonProps, [
    "class",
    "variant",
    "size",
  ]);

  return (
    <ButtonPrimitive
      data-slot="button"
      class={buttonVariants({
        variant: props.variant,
        size: props.size,
        class: props.class,
      })}
      {...rest}
    />
  );
};
