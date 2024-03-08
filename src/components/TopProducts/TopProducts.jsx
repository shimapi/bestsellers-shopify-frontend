import Title from "../Title/Title";
import "./TopProducts.scss";
import PathConstants from "@/routes/pathConstants";
import useApi from "@/custom-hooks/useApi.jsx";
import { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import TopProductsSkeleton from "./TopProductsSkeleton";
import Skeleton from "react-loading-skeleton";

const TopProducts = () => {
	const [product, setProduct] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const api = useApi({ url: PathConstants.FETCH_URL + "best", method: "GET" });

	useEffect(() => {
		const fetchProducts = async () => {
			const products = await api;
			setProduct(products);
			setIsLoading(false);
		};
		fetchProducts();
	}, []);

	const sortingProducts = product.sort((a, b) => b.sales - a.sales);
	return (
		<>
			<section className="top-products">
				{<Title sentence="Top 10" /> || <Skeleton />}
				<div className="top-products__container">
					{isLoading && <TopProductsSkeleton cards={10} />}
					{sortingProducts.slice(0, 10).map((product, index) => {
						return (
							<article className="top-products__product" key={index}>
								<img
									className="top-products__product-image"
									src={product.image.src}
									alt={product.title}
								/>
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
