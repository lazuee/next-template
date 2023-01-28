import fetch from "isomorphic-unfetch";

async function fetcher(
	input: RequestInfo | URL,
	init?: RequestInit | undefined
) {
	return fetch(input, init).then((r) => r.json());
}

export default fetcher;
