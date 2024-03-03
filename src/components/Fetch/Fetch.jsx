import { fetchURL } from "../../utils/variables.jsx";
import useApi from "../../custom-hooks/useApi.jsx";

const Fetch = () => {
	return (
		<div>
			{fetchURL}
			{console.log(useApi())}
		</div>
	);
};

export default Fetch;
