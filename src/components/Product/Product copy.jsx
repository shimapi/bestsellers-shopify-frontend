import "./Product.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PathConstants from "../../routes/pathConstants";
import useApi from "../../custom-hooks/useApi";
import "react-loading-skeleton/dist/skeleton.css";
import ProductSkeleton from "./ProductSkeleton";
import Modal from "../Modal/Modal";
import useCloseModal from "@/custom-hooks/useCloseModal";

const Product = () => {
	const params = useParams();
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalImage, setModalImage] = useState(null);
	const [handleImgID, setHandleImgID] = useState(null);

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
	}, [api, error, isLoading]);

	useEffect(() => {
		if (product.data) {
			document.title = product.data.title + " ✨ BestSellers";
		}
	}, [product]);

	const handleOpenModal = (e) => {
		if (e.target.dataset.src) {
			setModalImage(e.target.dataset.src);
			setHandleImgID(e.target.id);
		} else if (e.target.src) {
			setModalImage(e.target.src);
			setHandleImgID(e.target.id);
		}
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	useCloseModal(handleCloseModal);
	return (
		<main className="product">
			{isLoading && <ProductSkeleton />}
			{product.data && (
				<div className="product__container">
					<section className="product__images">
						{/** si hay imágenes, que me muestre SOLO la primera con toda
						 * esta estructura
						 * muestra la posición 0
						 */}
						<div className="product__main-image">
							<div className="product__main-image-border1"></div>
							<div className="product__main-image-photo">
								<img
									src={product.data.images[0].src}
									className="product__image"
									alt={product.data.title}
									loading="lazy"
									id={product.data.images[0].position - 1}
									onClick={handleOpenModal}
								/>
							</div>
							<div
								className="product__main-image-border2"
								onClick={handleOpenModal}
								data-src={product.data.image.src}
							></div>
						</div>

						{/* si hay mas imagenes, que muestre esto
						desde la posición 1 */}
						<div className="product__all-images">
							{product.data.images.length > 0 &&
								product.data.images.map((image, index) => {
									return (
										<div key={index} className="product__image-container">
											<img
												src={image.src}
												className="product__image"
												loading="lazy"
												onClick={handleOpenModal}
												id={image.position - 1}
												alt={product.data.title}
											/>
										</div>
									);
								})}
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
			{isModalOpen && (
				<Modal
					image={modalImage}
					handleCloseModal={handleCloseModal}
					product={product}
					handleImgID={handleImgID}
				/>
			)}
		</main>
	);
};

export default Product;
