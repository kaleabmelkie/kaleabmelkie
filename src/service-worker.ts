import { build, files, version } from '$service-worker'

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`

const ASSETS = [
	...build, // the app itself
	...files, // everything in `static`
]

self.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE)
		await cache.addAll(ASSETS)
	}

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	event.waitUntil?.(addFilesToCache())
})

self.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key)
		}
	}

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	event.waitUntil?.(deleteOldCaches())
})

self.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	if (event.request?.method !== 'GET') return

	async function respond() {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const url = new URL(event.request?.url)
		const cache = await caches.open(CACHE)

		// `build`/`files` can always be served from the cache
		if (ASSETS.includes(url.pathname)) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			return cache.match(event.request)
		}

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const response = await fetch(event.request)

			if (response.status === 200) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				cache.put(event.request, response.clone())
			}

			return response
		} catch {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			return cache.match(event.request)
		}
	}

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	event.respondWith?.(respond())
})
