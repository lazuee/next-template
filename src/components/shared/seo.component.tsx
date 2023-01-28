import { DefaultSeo } from "next-seo";
import type { NextSeoProps } from "next-seo";
import { useRouter } from "next/router";

import * as Constants from "#/constants";

const Seo: React.FC = () => {
	const router = useRouter();
	const origin = typeof window === "undefined" ? "" : window.location.origin;
	const ranNum = Math.random().toString().substring(2, 14);

	const seo: NextSeoProps = {
		description: Constants.metadata.description,
		defaultTitle: Constants.metadata.title,
		titleTemplate: `%s • ${Constants.metadata.title}`,

		openGraph: {
			type: "website",
			locale: "en_US",
			url: origin,
			site_name: Constants.metadata.title,
			profile: {
				...Constants.metadata.author,
			},
			images: [
				{
					url: origin + Constants.metadata.banner,
					alt: "Banner",
					type: "image/png",
					height: 630,
					width: 1200,
				},
			],
		},
		twitter: {
			cardType: "summary_large_image",
			handle: `@${Constants.metadata.author.username}`,
			site: origin,
		},
		additionalLinkTags: [
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: origin + "/favicon/apple-touch-icon.png?v=" + ranNum,
			},
			{
				rel: "icon",
				sizes: "32x32",
				type: "image/png",
				href: origin + "/favicon/favicon-32x32.png?v=" + ranNum,
			},
			{
				rel: "icon",
				sizes: "192x192",
				type: "image/png",
				href:
					origin + "/favicon/android-chrome-192x192.png?v=" + ranNum,
			},
			{
				rel: "icon",
				sizes: "384x384",
				type: "image/png",
				href:
					origin + "/favicon/android-chrome-384x384.png?v=" + ranNum,
			},
			{
				rel: "icon",
				sizes: "16x16",
				type: "image/png",
				href: origin + "/favicon/favicon-16x16.png?v=" + ranNum,
			},
			{
				rel: "manifest",
				href: origin + "/favicon/site.webmanifest?v=" + ranNum,
			},
			{
				rel: "mask-icon",
				href: origin + "/favicon/safari-pinned-tab.svg?v=" + ranNum,
				color: "#4f6189",
			},
			{
				rel: "shortcut icon",
				href: origin + "/favicon/favicon.ico?v=" + ranNum,
			},
		],
		additionalMetaTags: [
			{
				name: "msapplication-TileColor",
				content: "#4f6189",
			},
			{
				name: "msapplication-TileImage",
				content: origin + "/favicon/mstile-150x150.png?v=" + ranNum,
			},
			{
				name: "msapplication-config",
				content: origin + "/favicon/browserconfig.xml?v=" + ranNum,
			},
			{
				name: "theme-color",
				content: "#4f6189",
			},
		],
	};
	return (
		<DefaultSeo
			{...seo}
			mobileAlternate={{
				media: "only screen and (max-width: 640px)",
				href: `${origin}${router.asPath === "/" ? "" : router.asPath}`,
			}}
		/>
	);
};

export default Seo;
