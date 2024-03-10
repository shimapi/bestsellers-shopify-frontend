import "./Product.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PathConstants from "../../routes/pathConstants";
import useApi from "../../custom-hooks/useApi";

const Product = () => {
	const params = useParams();
	console.log("params", params);
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const api = useApi({
		url: PathConstants.PRODUCTS + params.productID,
		method: "GET",
	});

	console.log(PathConstants.PRODUCTS + params.productID);

	useEffect(() => {
		let isCancelled = false;
		if (isLoading) {
			const fetchProduct = async () => {
				try {
					const response = await api;
					if (!isCancelled) {
						setProduct(response);
						console.log("product dentro de try", product);
						console.log("fetching products api 1", response);
					}
					setIsLoading(false);
					setError(null);
				} catch (error) {
					setError("Error fetching data: " + error);
					setIsLoading(false);
				}
			};
			console.log("product dentro de useEffect", product);
			fetchProduct();
			return () => {
				isCancelled = true;
			};
		}
	}, [isLoading, error, api]);
	console.log("product fuera de useEffect", product);

	return (
		<div>
			Product {params.productID}
			{product.data && (
				<>
					<p>ID: {product.data.id}</p>
					<p>Nombre: {product.data.title}</p>
					<p>Precio: {product.data.variants[0].price}</p>
					<p>Stock: {product.data.variants[0].inventory_quantity}</p>
					<p>Imagen: {product.data.image.src}</p>
					<p>Descripción: {product.data.body_html}</p>
					{product.data.images.length > 0 &&
						product.data.images.map((image, index) => (
							<p key={index}>
								Imagen {index + 1} - {image.src}
							</p>
						))}
				</>
			)}
		</div>
	);
};

export default Product;
