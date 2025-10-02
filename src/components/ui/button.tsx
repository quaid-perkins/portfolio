import { cn } from "~/libs/cn";
import type { ButtonRootProps } from "@kobalte/core/button";
import { Button as ButtonPrimitive } from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

// button component from shadcn-solid - https://shadcn-solid.com/docs/components/button
export const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md font-medium transition-[color,background-color,box-shadow] cursor-pointer focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-zinc-100 shadow hover:bg-zinc-200/90",
				destructive:
					"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
				ghost: "hover:bg-zinc-100",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-10 rounded-md px-8",
				slim: "p-2",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

type buttonProps<T extends ValidComponent = "button"> = ButtonRootProps<T> &
	VariantProps<typeof buttonVariants> & {
		class?: string;
	};

export const Button = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, buttonProps<T>>
) => {
	const [local, rest] = splitProps(props as buttonProps, [
		"class",
		"variant",
		"size",
	]);

	return (
		<ButtonPrimitive
			class={cn(
				buttonVariants({
					size: local.size,
					variant: local.variant,
				}),
				local.class
			)}
			{...rest}
		/>
	);
};
