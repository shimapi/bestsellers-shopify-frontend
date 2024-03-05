const useApi = async () => {
	try {
		const response = await fetch(
			"https://bestsellers-backend.vercel.app/products/9057199063333",
			{
				headers: {
					"X-Shopify-Access-Token": import.meta.env.VITE_ACCESS_TOKEN,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error("Error fetching data: ", error);
	}
};

export default useApi;
