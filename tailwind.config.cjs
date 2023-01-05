const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			borderRadius: {
				DEFAULT: '0.5rem',
			},
			fontFamily: {
				sans: '"InterVariable", sans-serif',
			},
		},
	},

	plugins: [],
}

module.exports = config
