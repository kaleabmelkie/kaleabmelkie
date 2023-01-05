import type { LayoutServerLoad } from './$types'

export const prerender = true
export const csr = false

export const load = (async () => {
	return {
		year: new Date().getFullYear(),
	}
}) satisfies LayoutServerLoad
