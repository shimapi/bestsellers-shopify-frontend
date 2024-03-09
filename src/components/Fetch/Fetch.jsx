//	ELIMINAR

import PathConstants from "@/routes/pathConstants";
import useApi from "@/custom-hooks/useApi.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Fetch = () => {
	const { id } = useParams();

	const [product, setProduct] = useState([]);
	const api = useApi({ url: PathConstants.PRODUCTS + id, method: "GET" });

	useEffect(() => {
		const fetchProducts = async () => {
			const products = await api;
			console.log("products", products);
			setProduct(products);
		};
		fetchProducts();
	}, []);

	const sortingProducts = product.sort((a, b) => b.sales - a.sales);
	return (
		<>
			<section className="top-products">
				{sortingProducts.slice(0, 10).map((product, index) => {
					return (
						<article className="top-products__product" key={index}>
							<img
								className="top-products__product-image"
								src={product.image.src}
								alt={product.title}
							/>
							<h4 className="top-products__product-name">{product.title}</h4>
							<h4 className="top-products__product-name">{product.id}</h4>
						</article>
					);
				})}
			</section>
		</>
	);
};

export default Fetch;
