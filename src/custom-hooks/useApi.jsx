const useApi = async () => {
	try {
		const response = await fetch(
			"https://bestsellers-backend-pooe6815x-shimapis-projects.vercel.app/products",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},

				mode: "no-cors",
			}
		);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const responseData = await response.json();
		console.log(responseData);
	} catch (error) {
		console.error("Error fetching data: ", error);
	}
};

export default useApi;
