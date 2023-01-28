import { NextPage } from "next";
import { NextSeo } from "next-seo";
import tw from "twin.macro";

const Index: NextPage = () => {
	return (
		<Main>
			<NextSeo title="Home" />
			<Bold>I'm Lazy</Bold>
		</Main>
	);
};

const Main = tw.div`flex min-h-screen justify-center items-center`;

const Bold = tw.h2`font-bold text-black dark:text-white`;

export default Index;
