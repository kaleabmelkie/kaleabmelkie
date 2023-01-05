export class Cache<T> {
	readonly #items = new Map<string, { at: number; data: string }>([])

	constructor(public ttlInMs = 1000 * 60, clearExpiredOnInterval: boolean | number = false) {
		if (clearExpiredOnInterval !== false) {
			setInterval(
				() => this.clearExpired(),
				clearExpiredOnInterval === true ? ttlInMs : clearExpiredOnInterval,
			)
		}
	}

	get(key: string): T | null {
		const fromCache = this.#items.get(key)

		if (!fromCache) {
			return null
		} else if (Date.now() > fromCache.at + this.ttlInMs) {
			this.#items.delete(key)
			return null
		} else {
			return JSON.parse(fromCache.data) as T
		}
	}

	set(key: string, data: T): void {
		this.#items.set(key, { at: Date.now(), data: JSON.stringify(data) })
	}

	clearExpired(): void {
		this.#items.forEach((value, key) => {
			if (Date.now() > value.at + this.ttlInMs) {
				this.#items.delete(key)
			}
		})
	}
}
