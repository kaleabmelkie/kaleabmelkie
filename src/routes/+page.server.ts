import type { Item } from '$lib/types/item'
import { Cache } from '$lib/utils/cache'
import rssToJson from 'rss-to-json'
import truncatise from 'truncatise'
import type { PageServerLoad } from './$types'

const itemsCache = new Cache<Item[]>(1000 * 60 * 60 * 24 * 14) // 2 weeks

export const load = (async () => {
	const itemsFromCache = itemsCache.get('default')
	if (itemsFromCache) {
		fetchAndCacheItems().catch(console.error) // don't wait
		return {
			items: itemsFromCache,
		}
	}

	return {
		items: await fetchAndCacheItems(),
	}
}) satisfies PageServerLoad

async function fetchAndCacheItems() {
	const parse =
		typeof rssToJson === 'object'
			? (rssToJson as unknown as { parse: typeof rssToJson }).parse
			: rssToJson

	let mediumItems: {
		title: string
		link: string
		author: string
		published: number
		created: number
		category: string[]
		content: string
		enclosures: string[]
		content_encoded: string
		// media: {}
	}[] = []
	try {
		const { items } = await parse('https://medium.com/feed/@kaleabmelkie', {})
		mediumItems = items
	} catch {
		// do nothing
	}

	let tweetItems: {
		title: string
		description: string
		link: string
		author: `@${string}`
		published: number
		created: number
		category: string[]
		enclosures: string[]
		// media: {}
	}[] = []
	try {
		const { items } = await parse('https://nitter.net/kaleab14/rss', {})
		tweetItems = items
	} catch {
		// do nothing
	}

	const items: Item[] = [
		...mediumItems.slice(0, 10).map((item) => ({
			published_at: item.published,
			link: item.link,
			title: item.title,
			excerpt_html: truncatise(
				item.content
					.replace(/<a /g, `<span `)
					.replace(/<\/a>/g, `</span>`)
					.replace(/ href=/g, ` aria-label=`)
					.replace(
						/<img /g,
						`<img alt="Article picture of: ${item.title}" height="192px" width="192px" `,
					)
					.replace(/\.medium\.com\/max\/[0-9]+\//g, '.medium.com/max/384/')
					.replace(/ width="[0-9]+"/g, ' width="192"'),
				{
					TruncateBy: 'paragraphs',
					TruncateLength: 2,
					StripHTML: false,
					Strict: true,
					Suffix: `<hr class="hr" /><a class="link" href="${item.link}">Continue reading on Medium »</a>`,
				},
			) as string,
		})),

		...tweetItems.slice(0, 10).map((item) => ({
			published_at: item.published,
			link: item.link,
			title: '{{TWEETER_ICON}}',
			excerpt_html: `<a class="text-lg md:text-xl cursor-pointer" rel="external" href="${
				item.link
			}"><span class="font-normal">${item.description
				.replace(/<a /g, '<span ')
				.replace(/<\/a>/g, '</span>')}</span></a>`
				.replace(
					/<img /g,
					`<img class="mt-4 md:mt-6" alt="Article picture of: ${item.title}" height="192px" width="192px" `,
				)
				.replace(/ style="max-width:250px;"/g, '')
				.replace(/nitter\.net/g, 'twitter.com')
				.replace(/https:\/\/twitter.com\/pic\//g, 'https://nitter.net/pic/'),
		})),
	]
		.sort((a, b) => b.published_at - a.published_at)
		.map((item, i) => ({
			...item,
			excerpt_html: item.excerpt_html.replace(
				/<img /g,
				`<img loading="${i < 1 ? 'eager' : 'lazy'}" `,
			),
		}))

	itemsCache.set('default', items)

	return items
}
