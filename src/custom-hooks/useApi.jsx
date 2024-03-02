import { useState, useEffect } from "react";
import fetchURL from "../utils/variables.jsx";

const useApi = () => {
	// este es un hook que trae informacion de la API que esta en una url.
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// useEffect es un hook que se ejecuta despues de que el componente se renderiza.
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(fetchURL);
				const data = await response.json();
				setData(data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				setError(error);
			}
		};
		fetchData();
	}, []);
	return { data, loading, error };
};

export default useApi;
