//@ts-nocheck
import dynamic from "next/dynamic";
import React from "react";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
	ssr: false,
});

interface Props {}

const Cursor: React.FC<Props> = () => {
	return (
		<AnimatedCursor
			innerSize={6}
			outerSize={25}
			outerAlpha={0.2}
			innerScale={0.7}
			outerScale={4}
			trailingSpeed={15}
			color={"black"}
			innerStyle={{
				backgroundColor: "#eee",
			}}
			outerStyle={{
				backdropFilter: "invert(1)",
			}}
			clickables={[
				"a",
				"div.w-full.pl-5 > h1",
				'input[type="text"]',
				'input[type="email"]',
				'input[type="number"]',
				'input[type="submit"]',
				'input[type="image"]',
				"label[for]",
				"select",
				"textarea",
				"button",
			]}
		/>
	);
};

export default Cursor;
