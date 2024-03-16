import Card from "../Card/Card";
import "./Podium.scss";
import PathConstants from "@/routes/pathConstants";
import useApi from "@/custom-hooks/useApi.jsx";
import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import PodiumSkeleton from "./PodiumSkeleton";

const Podium = () => {
	const [product, setProduct] = useState([]);
	const api = useApi({ url: PathConstants.BEST, method: "GET" });

	useEffect(() => {
		const fetchProducts = async () => {
			const products = await api;
			setProduct(products);
		};
		fetchProducts();
	}, []);

	const sortingProducts = product.sort((a, b) => b.sales - a.sales);
	return (
		<>
			{product.length === 0 ? <PodiumSkeleton /> : null}
			<main className="podium">
				<div className="podium__container">
					{sortingProducts.slice(0, 3).map((product, index) => {
						return <Card key={index} winnerProduct={index} product={product} />;
					})}
					<div className="base"></div>
				</div>
			</main>
		</>
	);
};

export default Podium;
