import env from "./env.constant";

interface Author {
	firstName: string;
	lastName: string;
	username: string;
	gender: string;
}

interface Metadata {
	author: Author;
	url: string;
	banner: string;
	description: string;
	title: string;
}

const metadata: Metadata = {
	author: {
		firstName: "John Marlo",
		lastName: "Lapiz",
		username: "lazuee",
		gender: "male",
	},
	url: env.url,
	banner: "/img/banner.png",
	description: "NextJS Template for creating websites",
	title: "NextJS",
};

export default metadata;
