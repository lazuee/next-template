import ResetStyles from "./reset.style";
import { createGlobalStyle } from "styled-components";
import tw, { GlobalStyles as BaseStyles, theme } from "twin.macro";


export type CustomStyleProps = {
	reset?: boolean;
};

export const CustomStyles = createGlobalStyle<CustomStyleProps>`
    ${(props) => (props.reset ? ResetStyles() : "")}

	body {
		-webkit-tap-highlight-color: ${theme`colors.purple.500`};
		${tw`antialiased`}
		${tw`bg-neutral-200 dark:bg-neutral-900`}
	}
`;

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles reset={true} />
	</>
);

export default GlobalStyles;