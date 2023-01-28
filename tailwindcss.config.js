/**
 * @template {import('tailwindcss').Config} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('tailwindcss').Config}}
 */
function defineTailwindConfig(config) {
	return config;
}

module.exports = defineTailwindConfig({
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: [],
});
