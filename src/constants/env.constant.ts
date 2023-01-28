const isDev = process.env.NODE_ENV === "development";

interface ENV {
	isDev: boolean;
}

const env: ENV = {
	isDev
};

export default env;
