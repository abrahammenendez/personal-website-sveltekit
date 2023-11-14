import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	base: '/personal-website-sveltekit/',
	plugins: [sveltekit()],
	test: {
		include: ['**/*.{test,spec}.{js,ts}']
	}
});
