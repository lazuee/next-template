const isProd = process.env.NODE_ENV !== "development";

interface ENV {
	url: `https://${string}`;
}

const env: ENV = {
	url:
		isProd && `${process.env.NEXT_PUBLIC_URL}`.startsWith("https")
			? process.env.NEXT_PUBLIC_URL
			: "https://localhost:3000",
};

export default env;
