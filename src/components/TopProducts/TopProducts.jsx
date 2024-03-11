import Title from "../Title/Title";
import "./TopProducts.scss";
import PathConstants from "@/routes/pathConstants";
import useApi from "@/custom-hooks/useApi.jsx";
import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import TopProductsSkeleton from "./TopProductsSkeleton";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const TopProducts = () => {
	const [product, setProduct] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const api = useApi({ url: PathConstants.AMOUR, method: "GET" });

	useEffect(() => {
		if (isLoading) {
			const fetchProducts = async () => {
				try {
					const response = await api;
					console.log("fetching products api 1", response);
					setProduct(response);
					setIsLoading(false);
					setError(null);
				} catch (error) {
					setError("Error fetching data: " + error);
					setIsLoading(false);
				}
			};
			fetchProducts();
		}
	}, [isLoading, error, api]);

	const sortingProducts = product.sort((a, b) => b.sales - a.sales);

	return (
		<>
			<section className="top-products">
				{<Title sentence="Los más amados" /> || <Skeleton />}
				<div className="top-products__container">
					{isLoading && <TopProductsSkeleton cards={10} />}
					{sortingProducts.slice(0, 10).map((product, index) => {
						console.log(product);
						return (
							<Link
								to={`/products/${product.id}`}
								className="top-products__product-link"
								key={index}
							>
								<article className="top-products__product" key={index}>
									<img
										className="top-products__product-image"
										src={product.image.src}
										alt={product.title}
									/>

									<h4 className="top-products__product-name">
										{product.title}
									</h4>
								</article>
							</Link>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default TopProducts;
