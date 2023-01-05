import type { LayoutServerLoad } from './$types'

export const load = (async () => {
	return {
		year: new Date().getFullYear(),
	}
}) satisfies LayoutServerLoad
