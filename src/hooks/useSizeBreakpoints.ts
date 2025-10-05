import { createBreakpoints, Matches } from "@solid-primitives/media";

/*
	screen size breakpoints
	marked as true when the screen size is equal to or greater than the given pixel size
	values match tailwindcss - https://tailwindcss.com/docs/responsive-design
*/
const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

// screen size breakpoints for device dependent components
const useSizeBreakpoints = (): Matches<typeof breakpoints> =>
  createBreakpoints(breakpoints);

export default useSizeBreakpoints;
