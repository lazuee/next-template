import useSWR from "swr";

import * as Libs from "#/libs";

function useFetcher<T extends unknown>(url: string, interval = 30000) {
	const { data, error } = useSWR<T>(url, Libs.fetcher, {
		refreshInterval: interval,
	});

	return {
		data,
		isLoading: !error && !data,
		isError: error,
	} as {
		data: T;
		isLoading: boolean;
		isError: any;
	};
}

export default useFetcher;
