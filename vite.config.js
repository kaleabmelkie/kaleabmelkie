import { partytownVite } from '@builder.io/partytown/utils'
import { sveltekit } from '@sveltejs/kit/vite'
import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		partytownVite({
			dest: path.join(__dirname, 'static', '~partytown'),
		}),
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
	},
}

export default config
