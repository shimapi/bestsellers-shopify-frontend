import Title from "../Title/Title";
import "./TopProducts.scss";
import PathConstants from "@/routes/pathConstants";
import useApi from "@/custom-hooks/useApi.jsx";
import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import TopProductsSkeleton from "./TopProductsSkeleton";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
//import Product from "../Product/Product";

const TopProducts = () => {
	const [product, setProduct] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const api = useApi({ url: PathConstants.BEST, method: "GET" });

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
				{<Title sentence="Top 10" /> || <Skeleton />}
				<div className="top-products__container">
					{isLoading && <TopProductsSkeleton cards={10} />}
					{sortingProducts.slice(0, 2).map((product, index) => {
						console.log(product);
						return (
							<article className="top-products__product" key={index}>
								<img
									className="top-products__product-image"
									src={product.image.src}
									alt={product.title}
								/>

								<Link to={PathConstants.PRODUCTS + product.id}>
									<h4 className="top-products__product-name">{product.id}</h4>{" "}
								</Link>
								<h4 className="top-products__product-name">{product.id}</h4>

								<h4 className="top-products__product-name">{product.title}</h4>
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default TopProducts;
