import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from "@tailwindcss/vite";


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss()
	],
	build: {
		sourcemap: false,
	},
	server: {
		watch: {
			usePolling: true, // force polling (sometimes required for certain setups)
		},
	}
});
