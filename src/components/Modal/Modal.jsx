//import PathConstants from "@/routes/pathConstants";
import { useEffect, useState } from "react";
import "./Modal.scss";

const Modal = ({ image, handleCloseModal }) => {
	console.log("image", image);
	const [isModalOpen, setIsModalOpen] = useState("modal-closed");

	useEffect(() => {
		if (image) {
			setIsModalOpen("modal-active");
		}
	}, [image]);

	console.log("modal image", image);
	return (
		<div className={`modal ${isModalOpen}`}>
			<span className="modal__close" onClick={handleCloseModal}>
				{" "}
				x{" "}
			</span>
			<div className="modal__container">
				<img src={image} alt="modal" className="modal__image" />
			</div>
			<div className="modal__navigation">
				<span className="modal__navigation-left">{"<"}</span>
				<span className="modal__navigation-right">{">"}</span>
			</div>
		</div>
	);
};

export default Modal;
