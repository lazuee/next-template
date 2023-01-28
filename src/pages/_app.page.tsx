import type { AppProps } from "next/app";
import Script from "next/script";

import * as Shared from "#/components/shared";
import * as Styles from "#/styles";

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Shared.Seo />
			<Styles.Global />
			<main>
				<Shared.Cursor />
				<Component {...pageProps} />
			</main>
			<div>
				<Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
				<Script src="/js/main.js" />
			</div>
		</>
	);
};

export default App;
