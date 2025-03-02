import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// options
			pages: 'build', // Output folder (default: 'build')
			assets: 'build', // Where static assets go
			fallback: 'index.html', // Use if deploying a single-page app
			precompress: false // Optional: Enable gzip/brotli compression
		}),
	},
	prerender: {
		entries: ['*'] // Prerender all pages
	}
};

export default config;
