import PathConstants from "@/routes/pathConstants";
import useApi from "@/custom-hooks/useApi.jsx";

const Fetch = () => {
	return (
		<div>
			{PathConstants.FETCH_URL}
			{console.log(useApi({ url: PathConstants.FETCH_URL, method: "GET" }))}
			{console.log(
				useApi({ url: PathConstants.FETCH_URL + "best", method: "GET" })
			)}
		</div>
	);
};

export default Fetch;
