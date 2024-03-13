import "./Product.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PathConstants from "../../routes/pathConstants";
import useApi from "../../custom-hooks/useApi";

const Product = () => {
	const params = useParams();
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const api = useApi({
		url: PathConstants.PRODUCTS + params.productID,
		method: "GET",
	});

	useEffect(() => {
		let isCancelled = false;
		if (isLoading) {
			const fetchProduct = async () => {
				try {
					const response = await api;
					if (!isCancelled) {
						setProduct(response);
					}
					setIsLoading(false);
					setError(null);
				} catch (error) {
					setError("Error fetching data: " + error);
					setIsLoading(false);
				}
			};
			fetchProduct();
			return () => {
				isCancelled = true;
			};
		}
	}, [isLoading, error, api]);

	useEffect(() => {
		if (product.data) {
			document.title = product.data.title + " ✨ BestSellers";
		}
	}, [product]);

	console.log("product {}", product);

	return (
		<main className="product">
			{product.data && (
				<div className="product__container">
					<section className="product__images">
						<div className="product__main-image">
							<div className="product__main-image-border1"></div>
							<div className="product__main-image-photo">
								<img
									src={product.data.image.src}
									className="product__image"
									alt={product.data.title}
									/* 	onClick={handleModalOpen} */
								/>
							</div>
							<div className="product__main-image-border2"></div>
						</div>
						<div className="product__all-images">
							{product.data.images.length > 0 &&
								product.data.images.map((image, index) => (
									<div key={index} className="product__image-container">
										<img src={image.src} className="product__image" />
									</div>
								))}
						</div>
					</section>
					<section className="product__info">
						<span className="product__sku">
							SKU: {product.data.id} · {product.data.product_type}
						</span>
						<h1 className="product__title">{product.data.title}</h1>
						<span className="product__price">
							$ {product.data.variants[0].price}.-
						</span>

						<a
							href={`${PathConstants.SHOPIFY_PRODUCTS}${product.data.handle}`}
							className="button product__button"
							target="_blank"
						>
							Ir al producto
						</a>
						<section className="product__description">
							<div
								dangerouslySetInnerHTML={{ __html: product.data.body_html }}
							/>
						</section>
					</section>
				</div>
			)}
		</main>
	);
};

export default Product;
