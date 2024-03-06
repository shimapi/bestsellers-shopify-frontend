import Card from "../Card/Card";
import "./Podium.scss";
//import { products } from "../../utils/data.js";
import PathConstants from "@/routes/pathConstants";
import useApi from "@/custom-hooks/useApi.jsx";
import { useEffect, useState } from "react";

const Podium = () => {
	const [product, setProduct] = useState([]);
	const api = useApi({ url: PathConstants.FETCH_URL + "best", method: "GET" });

	useEffect(() => {
		const fetchProducts = async () => {
			const products = await api;
			setProduct(products);
			console.log("PRODUCTS API", products);
		};
		fetchProducts();
	}, []);

	const sortingProducts = product.sort((a, b) => b.sales - a.sales);
	return (
		<>
			{sortingProducts.slice(0, 3).map((product, index) => {
				return <Card key={index} winnerProduct={index} product={product} />;
			})}
			<div className="base"></div>
		</>
	);
};

export default Podium;
