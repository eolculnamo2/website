import preprocess from 'svelte-preprocess';
import { dirname } from 'path'
import { fileURLToPath } from 'url'
// import adapter from  '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-static'; // static may cause issues someday...

const filePath = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
	}
};

export default config;
