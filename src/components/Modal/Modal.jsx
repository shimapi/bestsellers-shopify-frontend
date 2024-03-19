import { useEffect, useState, useRef } from "react";
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
	const [isModalOpen, setIsModalOpen] = useState("modal-closed");

	const swiperRef = useRef(null);

	useEffect(() => {
		if (image) {
			setIsModalOpen("modal-active");
		}
	}, [image]);

	const handleNextSlide = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			const swiper = swiperRef.current.swiper;
			swiper.slideNext();
		}
	};

	const handlePrevSlide = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			const swiper = swiperRef.current.swiper;
			swiper.slidePrev();
		}
	};

	return (
		<div className={`modal ${isModalOpen}`}>
			<span className="modal__close" onClick={handleCloseModal}>
				&#x2715;
			</span>
			<div className="modal__container">
				<Swiper
					ref={swiperRef}
					slidesPerView={1}
					slidesPerGroup={1}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					loop={false}
					a11y={false}
					simulateTouch={false}
					navigation={false}
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
					<div className="swiper-button-next" onClick={handleNextSlide}></div>
					<div className="swiper-button-prev" onClick={handlePrevSlide}></div>
				</Swiper>
			</div>
		</div>
	);
};

export default Modal;
