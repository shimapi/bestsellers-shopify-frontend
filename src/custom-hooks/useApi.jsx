const useApi = async ({ url, method }) => {
	const urlProp = url;
	const methodProp = method;
	try {
		const response = await fetch(urlProp, {
			method: methodProp,
			headers: {
				"Content-Type": "application/json",
				"X-Shopify-Access-Token": import.meta.env.VITE_ACCESS_TOKEN,
				"Access-Control-Allow-Origin": "*",
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching data: ", error);
	}
};

export default useApi;
