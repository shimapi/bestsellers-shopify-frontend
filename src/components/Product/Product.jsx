import "./Product.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PathConstants from "../../routes/pathConstants";
import useApi from "../../custom-hooks/useApi";

const Product = () => {
	const params = useParams();
	console.log("params", params);
	const [product, setProduct] = useState({});
	//const [loading, setLoading] = useState(true);
	const api = useApi({
		url: PathConstants.PRODUCTS + params.id,
		method: "GET",
	});

	console.log(PathConstants.PRODUCTS + params.id);
	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const productApi = await api;
				setProduct(productApi);
				//setLoading(false);
				console.log("product", product);
				console.log("JSON", JSON.stringify(productApi, null, 2));
			} catch (error) {
				console.error("Error fetching data:", error);
				//setLoading(false);
			}
		};
		fetchProduct();
		console.log("product", product);
	}, [params.id]);

	return (
		<div>
			Product {params.id}
			<p>{product.id}</p>
			<p>ID: {product.data.id}</p>
			<p>Nombre: {product.data.title}</p>
			<p>Precio: {product.data.variants[0].price}</p>
			<p>Stock: {product.data.variants[0].inventory_quantity}</p>
			<p>Imagen: {product.data.image.src}</p>
			<p>Descripción: {product.data.body_html}</p>
			{product.data.images.length > 0 ? (
				product.data.images.map((image, index) => (
					<p key={index}>
						Imagen {index + 1} - {image.src}
					</p>
				))
			) : (
				<p>No hay imágenes adicionales</p>
			)}
		</div>
	);
};

export default Product;
