import { defineConfig } from "@solidjs/start/config";

// vite plugin inports
import tailwindcss from "@tailwindcss/vite";

// config file for 'solid-start / vinxi / vite'
export default defineConfig({
	vite: {
		plugins: [
			// tailwindcss plugin for utility classes in 'JSX / TSX'
			tailwindcss(),
		],
	},
});
