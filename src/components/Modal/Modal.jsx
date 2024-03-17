import { useEffect, useState } from "react";
// Swiper
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
register();
// end of Swiper
import "./Modal.scss";

const Modal = ({ image, handleCloseModal, product, handleImgID }) => {
	console.log("image", image);
	console.log("handleImgID", handleImgID);
	const [isModalOpen, setIsModalOpen] = useState("modal-closed");

	useEffect(() => {
		if (image) {
			setIsModalOpen("modal-active");
		}
	}, [image]);

	return (
		<div className={`modal ${isModalOpen}`}>
			<span className="modal__close" onClick={handleCloseModal}>
				&#x2715;
			</span>
			<div className="modal__container">
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					a11y={false}
					simulateTouch={false}
					navigation={true}
					key={handleImgID}
					effect={"fade"}
					keyboard={{
						enabled: true,
					}}
					shortSwipes={false}
					initialSlide={handleImgID}
					modules={[Keyboard, Pagination, Navigation]}
					className="mySwiper"
				>
					{product.data.images.length > 0 &&
						product.data.images.map((image, index) => {
							console.log("handleImgID desde map en modal", handleImgID);
							return (
								<SwiperSlide className="product__image-container" key={index}>
									<img
										src={image.src}
										alt={product.data.title}
										className="modal__image"
									/>
								</SwiperSlide>
							);
						})}
				</Swiper>
			</div>
		</div>
	);
};

export default Modal;
