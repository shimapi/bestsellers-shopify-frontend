//import PathConstants from "@/routes/pathConstants";
import "./Modal.scss";

const Modal = ({ image }) => {
	console.log("modal image", image);
	return (
		<div className="modal">
			<div className="modal__container">
				<img src={image} alt="modal" className="modal__image" />
			</div>
		</div>
	);
};

export default Modal;
