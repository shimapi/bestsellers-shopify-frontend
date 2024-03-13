import Card from "../Card/Card";
import "./Podium.scss";
import PathConstants from "@/routes/pathConstants";
import useApi from "@/custom-hooks/useApi.jsx";
import { useEffect, useState } from "react";

const Podium = () => {
	const [product, setProduct] = useState([]);
	const api = useApi({ url: PathConstants.BEST, method: "GET" });

	useEffect(() => {
		const fetchProducts = async () => {
			const products = await api;
			setProduct(products);
		};
		fetchProducts();
	}, [api]);

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
