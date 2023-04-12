export interface Props {
	/**
	 * Used for Discord, PWA…
	 *
	 * **Default**: `undefined`
	 * */
	siteName?: string;

	/**
	 * Used for window / tab title, search engines results, social networks…
	 *
	 * **Default**: `undefined`
	 * */
	title?: string;

	/**
	 * Used for search engines results, social networks…
	 *
	 * **Default**: `undefined`
	 * */
	description?: string;

	/**
	 * Image URL, preferably absolute and 1200x630px  \
	 * Used for social networks…
	 *
	 * **Default**: `undefined`
	 * */
	image?: string;

	/**
	 * Favicon URL
	 *
	 * **Default**: `undefined`
	 * */
	favicon?: string;

	/**
	 * **Default**: `undefined`
	 * */
	author?: string;

	/**
	 * **Default**: `undefined`
	 * */
	copyright?: string;

	/**
	 * Reference the `sitemap-index.xml`
	 * which is generated by `@astrojs/sitemap`
	 *
	 * Otherwise crawlers likely prefer `sitemap.xml`
	 *
	 * **Default**: `true`
	 * */
	astroSitemap?: boolean;

	/**
	 * **Default**: `Astro.url`
	 *
	 * (with base from `site` in Astro root config.)
	 * */
	canonicalUrl?: string;

	/**
	 * **Default**: `'website'`
	 * */
	type?: string;

	/**
	 * Adds
	 * `<meta name="generator" content={Astro.generator} />`
	 *
	 * **Default**: `true`
	 * */
	astroGenerator?: boolean;
}
