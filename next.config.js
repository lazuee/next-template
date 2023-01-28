const dotenv = require("dotenv");
dotenv.config();

const withPWA = require("next-pwa");
const withTwin = require("./withTwin");
const isDev = process.env.NODE_ENV === "development";

/**
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
	const pwa = withPWA({
		dest: "public",
		disable: isDev,
	})(config);
	const twin = withTwin(pwa);

	return twin;
}

module.exports = defineNextConfig({
	pageExtensions: ["page.tsx", "page.jsx"],
	poweredByHeader: false,
	reactStrictMode: true,
	trailingSlash: true,
	experimental: {},
	webpack: (config, { dev, isServer }) => {
		if (!isServer) config.resolve.fallback.fs = false;

		// Replace React with Preact only in client production build
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: "preact/compat",
				"react-dom/test-utils": "preact/test-utils",
				"react-dom": "preact/compat",
			});
		}

		return config;
	},
});
